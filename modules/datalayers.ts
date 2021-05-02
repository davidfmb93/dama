const project = "base"
const { layers } = require(`/src/${project}/js/config/datalayers.ts`)

declare global {
    interface Window {
        dama: any   ,
        datalayer: any  
        SHA256: any,
    }
}

window.dama = window.dama || {};

window.dama.info = 'Desarrollado en 150% por David Martinez'

window.dama.setDatalayer = (select: string, label: string) => {
    try {
        let dataLayerFound =  layers.find( (value:any) => value.name == select);
        typeof window != 'undefined' ? pushLayer(dataLayerFound, label) :  console.log('%c Por favor configurar el Datalayer, no encontrado! ', 'background: #222; color: #bada55');
    } catch (error) {
        console.error('%c Datalayer Error! ', 'background: red; color: #bada55');
    }
}

function pushLayer(dataLayerFound: any, label: string ){
    const encrypted: Boolean = dataLayerFound['encrypted']
    delete dataLayerFound['name']
    dataLayerFound['eventLabel']  = label ? (encrypted ? window.SHA256(label) : label) : dataLayerFound['eventLabel']
    window.datalayer.push(dataLayerFound);
}

export const datalayers = async () => {}
