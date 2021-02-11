import { win, doc, log, al, addEv, que, queAll, gId } from "../general/var.js";
import apiDrupal from "../services/apiDrupal.js";
import dama from "../services/dama.js";

const dm = new dama();


const api = new apiDrupal();
export const page = async () => {
    /* ON LOAD */
    const init = () => {
        win.onload = () => doc.que('.loader') && doc.que('.loader').classList.add('hide')
        setTimeout(() => { doc.que('.loader').classList.add('hide') }, 5000);
    }
    init()
}

export default page;
