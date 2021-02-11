import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var";

export const modal = () => {
    const modal = doc.queAll('.aaModal'),
        closeModal = e => {
            let el = e.target;
            if( e.target === e.currentTarget ){
                if( !el.classList.contains('aaModal') ){
                    e.preventDefault();
                }
                [...doc.queAll('.aaModal')].map( el => {
                    el.classList.add('hide');
                } );
            }
        },
        openModal = e => {
            let dataEl = e.currentTarget.dataset.modal;
            if( !e.currentTarget.classList.contains('aaModal') ){
                e.preventDefault();
                doc.que(`.aaModal[data-modal="${dataEl}"]`).classList.remove('hide');
            }
        };

    if( modal.length > 0 ){
        [...doc.queAll('.aaModal, .aaModal__close, .aaModal__btn--close')].map( el => {
            el.addEventListener('click', e => {
                closeModal(e);
            });
        } );

        [...doc.queAll('[data-modal]:not(.aaModal)')].map( el => {
            el.addEventListener('click', e => {
                openModal(e);
            });
        } );
    }
}