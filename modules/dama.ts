/**
 * 
 * Service Dama JS
 * 
 * 
 */

export class dama {
  welcome(){
    return 'welcome to DAMA'
  }
  click(name: string = null, configuration: any) {
    const element = document.querySelectorAll('[dm-click=' + name + ']')[0]
    element && element.addEventListener("click", configuration, false)
    return 'render';
  }
  hide(ids: any = []) {
    ids.map((id: any) => {
      const element = document.getElementById(id)
      if (element) element.style.display = "none";
    })
    return 'render';
  }
  show(id: string = null) {
    const element = document.getElementById(id)
    if (element) element.style.display = "block";
    return 'render';
  }
  // hideOne(id = null) {
  //   const element = document.getElementById(id)
  //   if (element) element.style.display = "none";
  //   return 'render';
  // }
  // hideShow(idHide = null, idShow = null) {
  //   let element = document.getElementById(idHide)
  //   if (element) element.setAttribute("style", "display:none !important");
  //   element = document.getElementById(idShow)
  //   if (element) element.setAttribute("style", "display:block !important");
  //   return 'render';
  // }

  // print(name, text) {
  //   const element = document.querySelectorAll('[dm-model=' + name + ']')[0]
  //   if (typeof element != "undefined" && element != null)
  //     element.innerHTML = text;
  //   return;
  // }

  // print(name, text) {
  //   const element = document.querySelectorAll('[dm-model=' + name + ']')[0]
  //   if (typeof element != "undefined" && element != null)
  //     element.innerHTML = text;
  //   return;
  // }

  // getInpunts(ids = []) {
  //   const data = {}
  //   ids.map(id => {
  //     let value = document.getElementById(id) ? document.getElementById(id).value : null
  //     if (value) data[id] = value
  //   })
  //   return data;
  // }


  //  getDataForm(form: any){
  //    let request = {}, value
  //    form.target.forEach(element =>{
  //      console.log(element.type)
  //      // si es un select multiple guardamos los valores si no guardamos el elemento
  //      let isSelectMultiple = element.hasAttribute("multiple")
  //      value = isSelectMultiple ? [...element.options].filter(option => option.selected).map(option => option.value) : element.value
  //      //Pero si es un chekbox, guardamos el valor del checkbox, pero primero verificamos si es un checkbox
  //      value = element.type == "checkbox" ? String(element.checked) : element.value
  //      console.log(element.name, ":", value)
  //      //Finalmente guardamos en nuestro objeto
  //      if(element.name && value.length) request[element.name] = value
  //    })
  //    return request;
  //  }
}