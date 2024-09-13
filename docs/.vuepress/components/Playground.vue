<script setup>
import { useSiteLocaleData } from '@vuepress/client'
import { ref, computed, onMounted } from 'vue'
import MiInput from "./MiInput.vue"
import MiBoton from "./MiBoton.vue"
import SelectSimple from "./SelectSimple.vue"
import CustomTextarea from "./CustomTextarea.vue"
const url = ref("http://localhost:8000")
const licencia = ref("")
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
import { operacionesDisponibles } from './operaciones'
const busqueda = ref("");

const operacionesFiltradas = computed(() => {
    if (busqueda.value === "") {
        return operacionesDisponibles;
    }
    const expresion = new RegExp(`${busqueda.value}.*`, "i");
    return operacionesDisponibles.filter(operacion => {
        if (esEspañol()) {
            if (expresion.test(operacion.descripcion) || expresion.test(operacion.nombre)) {
                return true;
            }
        } else {
            if (expresion.test(operacion.descripcion_ingles) || expresion.test(operacion.nombre)) {
                return true;
            }
        }
        return false;
    })
});
const arregloDeOperaciones = ref([]);
const agregarOperacion = (operacion) => {
    const limpia = JSON.parse(JSON.stringify(operacion));
    limpia.expandida = false;
    arregloDeOperaciones.value.push(limpia);
}


const obtenerJsonCodificado = computed(() => {
    return JSON.stringify(obtenerJsonResultante.value);
});
const obtenerJsonResultante = computed(() => {
    const jsonResultante = {
        serial: licencia.value,
        nombreImpresora: impresoraSeleccionada.value,
        operaciones: arregloDeOperaciones.value.map(operacion => {
            return {
                nombre: operacion.nombre,
                argumentos: operacion.argumentos.map(argumento => {
                    if (argumento.tipo === "float64") {
                        return parseFloat(argumento.ejemplo);
                    }

                    if (argumento.tipo === "bool") {
                        if (argumento.ejemplo === "false") {
                            return false;
                        }
                        return Boolean(argumento.ejemplo);
                    }
                    return argumento.ejemplo;
                })
            };
        }),
    };
    return jsonResultante;
});

const enviar = async () => {
    deberiaMostrarAlerta.value = false;
    const respuesta = await fetch(url.value + "/imprimir", {
        method: "POST",
        body: obtenerJsonCodificado.value,
    });
    respuestaHttp.value = await respuesta.json();
    deberiaMostrarAlerta.value = true;

}

const deberiaMostrarAlerta = ref(false);
const impresoraSeleccionada = ref("");

const codigo = computed(() => {
    return `const respuesta = await fetch("${url.value}/imprimir",
{
    method: "POST",
    body: JSON.stringify(${JSON.stringify(obtenerJsonResultante.value, null, 4)}),
    headers:{
    "Content-Type": "application/json",
},
    });`
});

const respuestaHttp = ref({ ok: false, message: "" });
const impresoras = ref([]);
const mensajeValidacionImpresora = computed(() => {
    if (impresoraSeleccionada.value) {
        return "";
    }
    return i18n.t("seleccionaImpresora");
});

const refrescarImpresoras = async () => {
    try {
        const respuesta = await fetch(url.value + "/impresoras")
        impresoras.value = await respuesta.json();
    } catch (e) {
        impresoras.value = [];
    }
}

const eliminarOperacion = (indice) => {
    arregloDeOperaciones.value.splice(indice, 1);
}
const deberiaDeshabilitarBoton = computed(() => {
    if (!url.value) {
        return true;
    }

    if (!impresoraSeleccionada.value) {
        return true;
    }

    if (arregloDeOperaciones.value.length <= 0) {
        return true;
    }
    return false;
});

const detallesPlugin = ref({});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const mensajeErrorVersion = ref("");


const refrescarDetalles = async () => {
    try {
        const respuestaHttp = await fetch(url.value + "/version")
        const detalles = await respuestaHttp.json();
        detallesPlugin.value = detalles;
        mensajeErrorVersion.value = "";
    } catch (e) {
        detallesPlugin.value = {};
        mensajeErrorVersion.value = e;
    } finally {
        await sleep(1500);
        await refrescarDetalles();
    }
}

const esEspañol = () => {
    return i18n.locale.value === "es";
}

onMounted(() => {
    const siteLocaleData = useSiteLocaleData();
    if (siteLocaleData.value.lang.includes("es")) {
        i18n.locale.value = "es";
    } else {
        i18n.locale.value = "en";

    }
    const urlSearchParams = new URLSearchParams(window.location.search);
    const posibleNombreOperacion = urlSearchParams.get("operacion");
    if (posibleNombreOperacion) {
        const indice = operacionesDisponibles.findIndex(operacion => {
            return operacion.nombre === posibleNombreOperacion;
        });
        if (indice != -1) {
            agregarOperacion(operacionesDisponibles[indice]);
        }
    }
    refrescarDetalles();
    refrescarImpresoras();
});


const devolverLabel = (argumento, indice) => {
    if (esEspañol()) {
        return `argumentos[${indice}] ${argumento.descripcion} (${argumento.tipo})`;
    } else {
        return `argumentos[${indice}] ${argumento.descripcion_ingles} (${argumento.tipo})`;
    }
}

const devolverDescripcionDeArgumento = (argumento) => {
    if (esEspañol()) {
        return argumento.descripcion;
    } else {
        return argumento.descripcion_ingles;

    }
}
const devolverDescripcionDeOperacion = (operacion) => {
    if (esEspañol()) {
        return operacion.descripcion;
    } else {
        return operacion.descripcion_ingles;

    }
}
</script>
<template>
    <div class="flex flex-col">
        <div>
            <div class="bg-green-400 text-white p-2 rounded-md" v-if="detallesPlugin.plataforma === 'Desktop'">
                <strong>{{ $t("versionPlugin") }}: </strong> {{ detallesPlugin.plataforma }}
            </div>
            <div class="bg-red-500 text-white p-2 rounded-md"
                v-if="!detallesPlugin.plataforma || detallesPlugin.plataforma !== 'Desktop' || mensajeErrorVersion">
                {{ $t("pluginNoDetectado") }} {{ mensajeErrorVersion }}
                <br>
                <a class="text-white" href="./descargar">{{ $t("guiaDescarga") }}</a>
            </div>
            <MiInput v-model="url" label="URL"></MiInput>
            <MiInput v-model="licencia" :label="$t('licencia')"></MiInput>
            <SelectSimple :mensajeValidacion="mensajeValidacionImpresora" v-model="impresoraSeleccionada"
                :label="$t('seleccionaImpresora')" :elementos="impresoras">
            </SelectSimple>
            <div class="bg-red-500 p-2 rounded text-white mb-2" v-if="impresoras.length <= 0">
                {{ $t("noHayImpresoras") }}
                <br>
                <a href="./compartir">{{ $t("guiaCompartirImpresoras") }}</a>
                <br>
                <MiBoton @click="refrescarImpresoras()" tipo="info">{{ $t("refrescarImpresoras") }}</MiBoton>
            </div>
        </div>
    </div>

    <div class="flex flex-row">
        <div class="flex w-1/2 flex-col">
            <p v-show="arregloDeOperaciones.length <= 0">{{ $t("seleccionaUnaOperacion") }}</p>
            <div class="p-2 bg-gray-200 mb-1 rounded-md hover:bg-gray-300"
                v-for="(operacion, indiceOperacion) in arregloDeOperaciones">
                <div class="flex flex-col">
                    <small class="break-all" :title="devolverDescripcionDeOperacion(operacion)">
                        {{ $t("nombreOperacion") }}:
                        <a href="#">
                            {{ operacion.nombre }}
                        </a>
                    </small>
                    <MiBoton @click="operacion.expandida = false" v-if="operacion.expandida">{{ $t("contraer") }}
                    </MiBoton>
                    <MiBoton @click="operacion.expandida = true" v-else>{{ $t("expandir") }}</MiBoton>
                    <small v-show="operacion.expandida">{{ devolverDescripcionDeOperacion(operacion) }}</small>
                </div>
                <CustomTextarea v-model="argumento.ejemplo" :title="devolverDescripcionDeArgumento(argumento)"
                    v-for="(argumento, indiceArgumento) in operacion.argumentos"
                    :label="devolverLabel(argumento, indiceArgumento)">
                </CustomTextarea>
                <MiBoton @click="eliminarOperacion(indiceOperacion)" tipo="danger">{{ $t("eliminarOperacion") }}
                </MiBoton>
            </div>
        </div>
        <div class="flex w-1/2 flex-col p-1">
            <MiBoton @click="enviar" :disabled="deberiaDeshabilitarBoton">{{ $t("hacerPeticion") }}</MiBoton>
            <div class="bg-yellow-500 text-white p-2 rounded-md" v-show="deberiaMostrarAlerta">
                {{ respuestaHttp }}
            </div>
            <div class="max-w-fit overflow-auto">
                <pre><code >{{ codigo }}</code></pre>
            </div>
        </div>

    </div>
    <div class="flex flex-col">
        <MiInput type="search" v-model="busqueda" :label="$t('buscar')"></MiInput>
        <div>
            <div class="p-1 mb-1 hover:bg-gray-200 hover:cursor-pointer" @click="agregarOperacion(operacion)"
                v-for="(operacion, indice) in operacionesFiltradas">
                <p>
                    <a href="#">
                        {{ operacion.nombre }}
                    </a>
                    <small class="text-xs">: {{ devolverDescripcionDeOperacion(operacion) }}</small>
                </p>
            </div>
        </div>

    </div>
</template>