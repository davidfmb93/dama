/**
 * Call Datalayer
 * 
 * Call datalayer you need register this like above, so you can call this with the next function when the event is clic
 *      dataDataLayers('name-selected', 'label-without-encrypt'), for example
 *      dataDataLayers('startGame', 'davidfmb93@gmail.com')
 */
export const layers: object = [
    {
        'name': 'NAME',
        'event': 'trackEvent',
        'eventCategory': 'CATEGORY', // Categoría del evento (String). Requerido.
        'eventAction': 'ACTION', // Acción o subcategoría del evento (String). Requerido.
        'eventLabel': 'LABEL', // Etiqueta de descripción del evento (String). Requerido.
        'encrypted': false // encrypted Label
    }
]

