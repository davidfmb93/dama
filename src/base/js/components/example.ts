import { dama } from ".../../../modules/dama";
import { apiService } from "../services/api";
/**
 * Use Petition
 * 
 * You must use pet.get(url) or pet.post(url, data) 
 */
const api = new apiService();
/**
 * Use Dama
 * 
 * Dama has a lot of function to help to developer, this function you can get in the next url
 * 
 */
const dm = new dama();

export const page = async () => {
  console.log('Api:', api.example())
  console.log('Dama:', dm.welcome())
}



