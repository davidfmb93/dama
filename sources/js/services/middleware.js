export default class middleware { // just add "default"
  agegate() {
    // You must assign routes that you need skip of the agegate, example, terms and conditions
    const skipRoutesAgegate = ['/agegate', '/verificador'];

    const agegateVerified = localStorage.getItem('agegate-verified');
    const routeFound = skipRoutesAgegate.find(route => location.pathname == route)
    if (!routeFound && !(agegateVerified == "true"))  window.location = `/agegate?redirect=${location.href}`;
    return 'verified';
  }

  hideOrShowCookie(){
    const routesShowCookie = ['/', '/agegate']
    const found = routesShowCookie.find( element => element == location.pathname)
    if(!found){
        document.head.innerHTML += `
        <style> 
            .optanon-alert-box-wrapper {
                display: none !important;
            }
        </style>`
    }
}

}