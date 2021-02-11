/* GENERAL */
const win = window,
    doc = document,
    log = console.log,
    al = alert
    
const changeFunctions = ( oldName, newName ) => {
    [Window, Document, Element].map( selector => {
        selector.prototype[`${oldName}`] = selector.prototype[`${newName}`]
    } )
}

const addEv = changeFunctions('addEv', 'addEventListener'),
    que = changeFunctions('que', 'querySelector'),
    queAll = changeFunctions('queAll', 'querySelectorAll'),
    gId = changeFunctions('gId', 'getElementById')

export {win, doc, log, al, addEv, que, queAll, gId}