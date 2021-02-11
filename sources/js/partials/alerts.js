import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var";
import { Alert } from '../Class/Alert.js';

export const alerts = () => {

    const alertContainer = doc.que('.alert');

    let allAlerts = [];

    const createAlert = data => {

        const {selector, title, text, additionalClass, dataAlert, enableImg, nameImg, enableClose} = data;

        const instance1 = new Alert(selector, {
            title,
            text,
            additionalClass,
            dataAlert,
            enableImg,
            nameImg,
            enableClose,
        });

        instance1.printAlert();
        allAlerts.push(instance1);

    };

    if( alertContainer ){

        createAlert({
            selector: alertContainer,
            enableClose: false,
            title: 'Alert! This was generated with JavaScript',
            text: `JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.`,
            enableImg: true,
            nameImg: 'facebook.png'
        });

        createAlert({
            selector: alertContainer,
            enableClose: true,
            title: 'How',
            text: `JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.`,
            enableImg: true,
            nameImg: 'facebook.png'
        });

        createAlert({
            selector: alertContainer,
            enableClose: true,
            title: 'Lorem ipsum',
            text: `JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.`,
            enableImg: false,
        });

        doc.que('.alert').addEventListener( 'click', e => {
            if( e.target.classList.contains('alert__close') ){
                let el = e.target,
                    elGrandpa = el.closest('.alert'),
                    elParent = el.closest('.alert__item'),
                    elParentData = elParent.dataset.alert;

                allAlerts[elParentData].removeAlert();
                // log(allAlerts[elParentData]);
                // allAlerts.splice(elParentData);
            }
        } );

    }

    // log(allAlerts);
}