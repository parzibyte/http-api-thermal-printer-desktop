<script setup>
import { encode, decode } from 'js-base64';
import { useSiteLocaleData } from '@vuepress/client'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import MiInput from "./MiInput.vue"
import MiBoton from "./MiBoton.vue"
import SelectSimple from "./SelectSimple.vue"
import CustomTextarea from "./CustomTextarea.vue"
const url = ref("http://localhost:8000")
const licencia = ref("")
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
import { operacionesDisponibles } from '../../../listaCompletaDeOperaciones.js'
const busqueda = ref("");
const props = defineProps(['nombreOperacion', 'ocultarOperacionesDisponibles', 'urlBase'])

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
const operacionesElegidasPorUsuario = ref([]);
const agregarOperacion = (operacion, argumentos = []) => {
    const limpia = JSON.parse(JSON.stringify(operacion));
    limpia.expandida = false;
    for (let i = 0; i < limpia.argumentos.length; i++) {
        if (esEspañol()) {
            limpia.argumentos[i].valor = limpia.argumentos[i].ejemplo;
        } else {
            limpia.argumentos[i].valor = limpia.argumentos[i].ejemplo_ingles;
        }
    }
    for (let i = 0; i < argumentos.length; i++) {
        limpia.argumentos[i].valor = argumentos[i].valor;
    }
    operacionesElegidasPorUsuario.value.push(limpia);
}


const obtenerJsonCodificado = computed(() => {
    return JSON.stringify(obtenerJsonResultante.value);
});
const obtenerJsonResultante = computed(() => {
    const jsonResultante = {
        serial: licencia.value,
        nombreImpresora: impresoraSeleccionada.value,
        operaciones: operacionesElegidasPorUsuario.value.map(operacion => {
            return {
                nombre: operacion.nombre,
                argumentos: operacion.argumentos.map(argumento => {
                    if (argumento.tipo === "float64") {
                        return parseFloat(argumento.valor);
                    }
                    if (argumento.tipo === "bool") {
                        if (argumento.valor === "false") {
                            return false;
                        }
                        return Boolean(argumento.valor);
                    }
                    return argumento.valor;
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
    operacionesElegidasPorUsuario.value.splice(indice, 1);
}
const deberiaDeshabilitarBoton = computed(() => {
    if (!url.value) {
        return true;
    }

    if (!impresoraSeleccionada.value) {
        return true;
    }

    if (operacionesElegidasPorUsuario.value.length <= 0) {
        return true;
    }
    return false;
});

const detallesPlugin = ref({});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const mensajeErrorVersion = ref("");


const refrescarDetalles = async () => {
    if (!deberiaHacerPeticion.value) {
        return;
    }
    try {
        const respuestaHttp = await fetch(url.value + "/version", {
            signal: controller.signal,
        })
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

const agregarOperacionPorNombre = (nombre) => {
    if (!nombre) {
        return;
    }
    const indice = operacionesDisponibles.findIndex(operacion => {
        return operacion.nombre === nombre;
    });
    if (indice != -1) {
        agregarOperacion(operacionesDisponibles[indice]);
    }
}

const deberiaHacerPeticion = ref(false);
const controller = new AbortController();
onBeforeUnmount(() => {
    controller.abort();
    deberiaHacerPeticion.value = false;
});
onMounted(() => {
    const siteLocaleData = useSiteLocaleData();
    if (siteLocaleData.value.lang.includes("es")) {
        i18n.locale.value = "es";
    } else {
        i18n.locale.value = "en";
    }
    if (props.ocultarOperacionesDisponibles === true) {
        deberiaMostrarListaCompleta.value = false;
    }

    if (props.nombreOperacion) {
        agregarOperacionPorNombre(props.nombreOperacion);
    } else {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const posibleArreglo = urlSearchParams.get("operaciones");
        if (posibleArreglo) {
            try {
                const operacionesDecodificadas = JSON.parse(decode(posibleArreglo));
                for (const operacion of operacionesDecodificadas) {
                    const posibleIndice = operacionesDisponibles.findIndex(operacionExistente => {
                        if (operacion.nombre === operacionExistente.nombre) {
                            return true;
                        }
                        return false;
                    })
                    if (posibleIndice !== -1) {
                        agregarOperacion(operacionesDisponibles[posibleIndice], operacion.argumentos);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        } else {
            const posibleNombreOperacion = urlSearchParams.get("operacion");
            if (posibleNombreOperacion) {
                agregarOperacionPorNombre(posibleNombreOperacion);
            }
        }
    }

    deberiaHacerPeticion.value = true;
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

const estaCopiando = ref(false);
const etiquetaParaBotonCompartir = computed(() => {
    if (estaCopiando.value) {
        return i18n.t("copiado");
    } else {
        return i18n.t("compartir");
    }
});

const compartir = async () => {
    const operacionesBase64 = encodeURIComponent(encode(JSON.stringify(operacionesElegidasPorUsuario.value)));
    const texto = window.location.origin + window.location.pathname + "?operaciones=" + operacionesBase64;
    try {
        await navigator.clipboard.writeText(texto);
        estaCopiando.value = true;
        await sleep(1000);
        estaCopiando.value = false;
    } catch (e) {
        prompt(i18n.t("copiarManualmente"), texto);
    }
}
const enlaceCompartirImpresora = () => {
    if (esEspañol()) {
        return props.urlBase + "/es/guia/instalar-compartir-impresora.html";
    } else {
        return props.urlBase + "/guide/install-share-printer.html";
    }
}
const enlaceDescargarPlugin = () => {
    if (esEspañol()) {
        return props.urlBase + "/es/guia/descargar.html";
    } else {
        return props.urlBase + "/guide/download.html";
    }
}


const normalizarNombre = (nombre) => {
    const mapaAcentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u',
        'ñ': 'n', 'Ñ': 'n'
    };

    return nombre
        .toLowerCase()
        .replace(/[áéíóúñÁÉÍÓÚÑ]/g, (letra) => mapaAcentos[letra])
        .replaceAll(" ", "-");
}

const enlaceOperacion = (operacion) => {
    if (esEspañol()) {
        return props.urlBase + `/es/esc-pos/${normalizarNombre(operacion.nombre_corto)}.html`;
    } else {
        return props.urlBase + `/esc-pos/${normalizarNombre(operacion.nombre_corto_ingles)}.html`;
    }
}

const deberiaMostrarListaCompleta = ref(true);
</script>
<template>
    <div class="flex flex-col">
        <div>
            <div class="dark:bg-green-700 dark:text-slate-300 bg-green-400 text-white p-2 rounded-md"
                v-if="detallesPlugin.plataforma === 'Desktop'">
                <strong>{{ $t("versionPlugin") }}: </strong> {{ detallesPlugin.plataforma }} {{detallesPlugin.version}}
            </div>
            <div class="dark:bg-red-700 dark:text-gray-200 bg-red-500 text-white p-2 rounded-md"
                v-if="!detallesPlugin.plataforma || detallesPlugin.plataforma !== 'Desktop' || mensajeErrorVersion">
                {{ $t("pluginNoDetectado") }} {{ mensajeErrorVersion }}
                <br>
                <a class="dark:text-gray-200 text-white" :href="enlaceDescargarPlugin()">{{ $t("guiaDescarga") }}</a>
            </div>
            <MiInput v-model="url" label="URL"></MiInput>
            <MiInput v-model="licencia" :label="$t('licencia')"></MiInput>
            <SelectSimple :toString="(nombreImpresora) => nombreImpresora"
                :mensajeValidacion="mensajeValidacionImpresora" v-model="impresoraSeleccionada"
                :label="$t('seleccionaImpresora')" :elementos="impresoras">
            </SelectSimple>
            <div class="dark:bg-red-700 dark:text-gray-200 bg-red-500 p-2 rounded text-white mb-2" v-if="impresoras.length <= 0">
                {{ $t("noHayImpresoras") }}
                <br>
                <a class="text-white dark:text-gray-200" :href="enlaceCompartirImpresora()">{{ $t("guiaCompartirImpresoras") }}</a>
                <br>
                <MiBoton @click="refrescarImpresoras()" tipo="info">{{ $t("refrescarImpresoras") }}</MiBoton>
            </div>
        </div>
    </div>

    <div class="flex flex-row">
        <div class="flex w-1/2 flex-col">
            <p v-show="operacionesElegidasPorUsuario.length <= 0">{{ $t("seleccionaUnaOperacion") }}</p>
            <div class="p-2 dark:bg-gray-700 bg-gray-200 mb-1 rounded-md hover:bg-gray-300"
                v-for="(operacion, indiceOperacion) in operacionesElegidasPorUsuario">
                <div class="flex flex-col">
                    <small class="break-all" :title="devolverDescripcionDeOperacion(operacion)">
                        {{ $t("nombreOperacion") }}:
                        <a class="dark:hover:text-white hover:text-sky-500" :href="enlaceOperacion(operacion)">
                            {{ operacion.nombre }}
                        </a>
                    </small>
                    <MiBoton @click="operacion.expandida = false" v-if="operacion.expandida">{{ $t("contraer") }}
                    </MiBoton>
                    <MiBoton @click="operacion.expandida = true" v-else>{{ $t("expandir") }}</MiBoton>
                    <small v-show="operacion.expandida">{{ devolverDescripcionDeOperacion(operacion) }}</small>
                </div>
                <CustomTextarea v-model="argumento.valor" :title="devolverDescripcionDeArgumento(argumento)"
                    v-for="(argumento, indiceArgumento) in operacion.argumentos"
                    :label="devolverLabel(argumento, indiceArgumento)">
                </CustomTextarea>
                <MiBoton @click="eliminarOperacion(indiceOperacion)" tipo="danger">{{ $t("eliminarOperacion") }}
                </MiBoton>
            </div>
        </div>
        <div class="flex w-1/2 flex-col p-1">
            <div class="flex flex-row">
                <MiBoton @click="enviar" :disabled="deberiaDeshabilitarBoton">{{ $t("hacerPeticion") }}</MiBoton>
                <MiBoton @click="compartir" :disabled="deberiaDeshabilitarBoton">{{ etiquetaParaBotonCompartir }}
                </MiBoton>
            </div>
            <div class="dark:bg-yellow-700 bg-yellow-500 text-white p-2 rounded-md my-1" v-show="deberiaMostrarAlerta">
                {{ respuestaHttp }}
            </div>
            <div class="max-w-fit overflow-auto dark:bg-gray-700 bg-gray-200 rounded-md p-2">
                <pre><code class="dark:text-gray-400 text-gray-700 bg-gray-200 dark:bg-gray-700">{{ codigo }}</code></pre>
            </div>
        </div>

    </div>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <MiBoton @click="deberiaMostrarListaCompleta = true" v-if="!deberiaMostrarListaCompleta">{{
                $t("mostrarOperacionesDisponibles") }}</MiBoton>
            <MiBoton @click="deberiaMostrarListaCompleta = false" v-if="deberiaMostrarListaCompleta">{{
                $t("ocultarOperacionesDisponibles") }}</MiBoton>
        </div>

        <div class="flex flex-col" v-show="deberiaMostrarListaCompleta">
            <MiInput type="search" v-model="busqueda" :label="$t('buscar')"></MiInput>
            <div>
                <div class="rounded-md p-1 mb-1 dark:hover:bg-gray-700 hover:bg-gray-200 hover:cursor-pointer" @click="agregarOperacion(operacion)"
                    v-for="(operacion, indice) in operacionesFiltradas">
                    <p>
                        <a class="hover:text-gray-500 dark:hover:text-gray-200" :href="enlaceOperacion(operacion)">
                            {{ operacion.nombre }}
                        </a>
                        <small class="text-xs">: {{ devolverDescripcionDeOperacion(operacion) }}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>