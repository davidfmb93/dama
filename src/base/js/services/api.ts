import  Petition  from ".../../../modules/petition";

/**
 * Use Petition
 * 
 * You must use pet.get(url) or pet.post(url, data) 
 */
const pet = new Petition()

export class apiService {
  welcome(){
    return 'welcome to ApiService';
  }
  example(){
    return pet.get('http://api.150porciento.com/api/countries')
  }
}