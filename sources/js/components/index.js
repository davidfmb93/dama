import apiDrupal from "../services/apiDrupal.js";
import dama from "../services/dama.js";

const api = new apiDrupal();
const dm = new dama();

export const page = async () => {
  const init = async () => {
    const request = await api.index()
    console.log(request)
  }
  init()
}
