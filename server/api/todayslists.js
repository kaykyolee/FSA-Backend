const data= require ('./seedData');

async function getAllTodayslists (){
    try{
        const rows=await data.todaylists;
        return rows;
    }catch(error){
        throw error;
    }
}