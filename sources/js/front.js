import middleware  from './services/middleware.js'
import { routes } from "./routes.js"

const mw = new middleware()
// mw.agegate()
// mw.hideOrShowCookie()

let route = routes.find(item => window.location.pathname == item.path)
route = route ? route : routes.find(item => window.location.pathname == `/${item.name}.html`)
// console.log('route', route)

if(route) {
  require('./partials/generalPage.js').page()
  require('./components/' + route.component + '.js').page()
}