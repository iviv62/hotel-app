import * as clientClass from './client-cache';
import {ALL_HOUSES,SAVED_HOUSES_OF_USER} from './query';
import {user,favouriteHouses, allHouses,searchedData,filteredData} from './storage';

let client=clientClass.client

export const getDataOnLoadingScreen= async()=>{
    let responseSaved = await client.query({query:SAVED_HOUSES_OF_USER}) 
      .then((data) => {
      //save in reactive variable
      favouriteHouses(data.data)
   
    }).catch((error)=>{
       console.log(error);
    });
    
    let responseAll =await client.query({query:ALL_HOUSES}).then((data) => {
      //save in reactive variable
     
      allHouses(data.data)
      console.log(data.data)
      searchedData(data.data.allHouses);
    
    }).catch((error)=>{
     console.log(error);
    });
    }