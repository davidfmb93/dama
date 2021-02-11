import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var.js";

export class Alert {
    constructor( selector, {title = 'Title example', text = 'Text example', additionalClass = '', dataAlert = 1, enableImg = false, nameImg = '', enableClose = true} = {} ){
        this.selector = selector;
        this.title = title;
        this.text = text;
        this.additionalClass = additionalClass;
        this.dataAlert = dataAlert;
        this.enableImg = enableImg;
        this.nameImg = nameImg;
        this.enableClose = enableClose;
    }
    printAlert(){

        const indexElements = doc.queAll('.alert__item').length;

        const tempImg = `
            <div class="alert__item__box alert__item__box--icon">
                <img src="/img/icons/${this.nameImg}" alt="" class="alert__item__img">
            </div>
            `,
            tempCloseBtn = `
            <span class="alert__close">x</span>
            `;

        const template = `
            <!-- ALERT ITEM -->
            <article class="alert__item ${ this.additionalClass } active" data-alert="${indexElements}">
                ${ this.enableImg === true ? tempImg : '' }
                <div class="alert__item__box alert__item__box--content">
                    <h2 class="alert__item__title"> ${this.title} </h2>
                    <p class="alert__item__desc"> ${this.text} </p>
                </div>
                ${ this.enableClose === true ? tempCloseBtn : '' }
            </article>
            <!-- END ALERT ITEM -->
        `;

        this.selector.insertAdjacentHTML('afterbegin', template);

    }
    removeAlert(data){

        log(data);
        
    }
}