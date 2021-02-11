import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var";

export const menu = () => {
    const hamBtn = doc.queAll('.hamburgerBtn');

	if( hamBtn.length > 0 ){
		[...hamBtn].map( el => {
			el.addEventListener('click', e => {
				e.preventDefault();
				e.currentTarget.classList.toggle('active');
			});
		} );
	}
}