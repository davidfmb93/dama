import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var.js";

export const openLoader = () => {
    console.log('hello')
    const oLoader = doc.queAll(`.oLoader, a[href*="/"]:not([target]), a[href*="."]:not([target])`);

    if( oLoader.length > 0 ){
        [...oLoader].map( el => {
            el.addEventListener('click', () => {
                doc.que('.cosLoader').classList.remove('hide');
            });
        } );
    }
}