/**
 * 
 * Service Dama JS
 * 
 * 
 */
import {
  findPhoneNumbersInText,
  parsePhoneNumber
} from 'libphonenumber-js'

class dama {
  click(name = null, configuration) {
    const element = document.querySelectorAll('[dm-click=' + name + ']')[0]
    element && element.addEventListener("click", configuration, false)
    return 'render';
  }
  hide(ids = []) {
    ids.map(id => {
      const element = document.getElementById(id)
      if (element) element.style.display = "none";
    })
    return 'render';
  }
  show(id = null) {
    const element = document.getElementById(id)
    if (element) element.style.display = "block";
    return 'render';
  }
  hideShow(idHide = null, idShow = null) {
    let element = document.getElementById(idHide)
    if (element) element.setAttribute("style", "display:none !important");
    element = document.getElementById(idShow)
    if (element) element.setAttribute("style", "display:block !important");
    return 'render';
  }

  print(name, text) {
    const element = document.querySelectorAll('[dm-model=' + name + ']')[0]
    if (typeof element != "undefined" && element != null)
      element.innerHTML = text;
    return;
  }

  print(name, text) {
    const element = document.querySelectorAll('[dm-model=' + name + ']')[0]
    if (typeof element != "undefined" && element != null)
      element.innerHTML = text;
    return;
  }

  getInpunts(ids = []) {
    const data = {}
    ids.map(id => {
      let value = document.getElementById(id) ? document.getElementById(id).value : null
      if (value) data[id] = value
    })
    return data;
  }

  errorsCode( ids = [] ) {

    // Show errors for each input
    ids.map( id => {

      const el = document.getElementById(id),
        value = el.value,
        messageError = el.parentElement.querySelector('.form__message')
      
      if( value.trim() === '' || value.trim() === undefined || value.trim() === null ) {
        el.classList.add('error')
        messageError.textContent = 'Ingrese un valor correcto'
      } else {
        el.classList.remove('error')
        messageError.textContent = ''
      }

    } )

    // Validate if has error some input
    const hasErrors = ids.some( id => {
      if( document.getElementById(id).classList.contains('error') ){
        return true
      } else {
        return false
      }
    } )

    return hasErrors

  }

  termsGetValue(){
    const terms = document.getElementById('terms')
  
    if( terms ) {
      terms.addEventListener('change', e => {
        if( terms.checked ) {
          terms.value = 'on'
        } else {
          terms.value = 'off'
        }
      })
    }
  
  }

  getParamUrl(param) {
    const url_string = window.location.href
    const url = new URL(url_string);
    const getParam = url.searchParams.get(param);
    return getParam;
  }

  globalValidation(data, value, currenCountry) {
    let result = false
    switch (data.type) {
      case "email":
        result = this.validationEmail(value, data.required)
        break;
      case "text":
        result = this.validationText(value, data.required)
        break;
      case "number":
        result = this.validationNumber(value, data.required)
        break;
      case "phone":
        result = this.validationNumber(currenCountry, value, data.required)
        break;
      case "boolean":
        result = this.validationBoolean(value, data.required)
        break;
      default:
        result = true
        break;
    }
    return result
  }
  
  validationEmail(email, required) {
    let result = {
      valid: true,
      message: ""
    }
    if (required) {
      if (email) {
        const exp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        const temp = exp.test(email)
        console.log(temp)
        result = {
          valid: temp,
          message: (temp) ? "" : "El correo no es valido"
        }
      } else {
        result = {
          valid: false,
          message: "El campo es requerido"
        }
      }
    }
    return result
  }
  
  validationText(text, required) {
    let result = {
      valid: true,
      message: ""
    }
    if (required) {
      if (text) {
        const newText = this.removeDiacritics(text)
        const exp = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
        // const exp = /^[A-Z\s]+$/i
        const temp = exp.test(newText)
        result = {
          valid: temp,
          message: ""
        }
      } else {
        result = {
          valid: false,
          message: "El campo es requerido"
        }
      }
    }
    return result
  }

  validationNumber(number, required) {
    let result = {
      valid: true,
      message: ""
    }
    if (required) {
      if (number) {
        const exp = /^[0-9]*$/
        const temp = exp.test(number)
        result = {
          valid: temp,
          message: (temp) ? "" : "Ingrese un valor valido"
        }
      } else {
        result = {
          valid: false,
          message: "El campo es requerido"
        }
      }
    }
    // console.log('result:', result)
    return result
  }

  // validationPhone(countryCode, phoneNumber, required) {
  //   let result = {
  //       valid : true,
  //       message: ""
  //   }
  //   if(required){
  //       if(countryCode && phoneNumber){
  //           let temp = ''
  //           const number = findPhoneNumbersInText(`${phoneNumber}`, countryCode)
  //           if (number && number.length > 0) {
  //             temp = number[0]['number']['number']
  //             const currentNumber = parsePhoneNumber(`${temp}`)
  //             result = {
  //                 valid: currentNumber.isValid(),
  //                 message : (currentNumber.isValid()) ? "" : "Ingrese un numero valido"

  //               }
  //           }
  //       }else{
  //           result = {
  //               valid : false,
  //               message: "Debe Seleccionar el pais y numero de Télefono"
  //           }
  //       }
  //   }
  //   return result
  // }

  validationBoolean(boolean, required) {
    const result = {
      valid: boolean === 'on' ? true : false,
      message: boolean === 'on' ? '' : 'Acepte los términos y condiciones'
    }
    return result
  }
  removeDiacritics(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }
}

export default dama;
