const project: string = "base"
// IMPORT SASS
require(`/src/${project}/sass/main.scss`)
// IMPORT ROUTES 
const { routes } = require(`/src/${project}/js/config/routes.ts`)

let route: any = routes.find((item: any) => window.location.pathname == item.path)

require(`/src/${project}/js/services/general.ts`).page()
require(`/modules/datalayers.ts`)
route ? require(`/src/${project}/js/components/` + route.component + '.ts').page() : routeDontFound()
/**
 * dinamicRoutes
 * 
 * This function generate the dinamic routes when yu send in the route :
 * 
 * @returns 
 */
function dinamicRoutes(){
  let otherRoutes:any = routes.filter((item: any) => item.path.includes(':'))
  let getRouteCurrent:any = location.pathname.split('/')
  let request:object = {}
  otherRoutes.map( (route: any) => request = getRouteCurrent[1] == (route.path.split('/'))[1] ? { 'status': true, 'route': route} : { 'status': false })
  return request
}

/**
 * routeDontFound
 * 
 * This function work when route wasn't found
 * 
 * @returns 
 */
function routeDontFound(){
  const dinamic: any = dinamicRoutes();
  dinamic.status && require(`/src/${project}/js/components/${dinamic.route.component}.ts`).page()
}