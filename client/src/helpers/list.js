//list/goal fetch requests

const baseUrl ='http://localhost:5500';

export async function fetchAllList(){
    try{
        const response=await fetch(`${baseUrl}/api/lists`);
        const retrunVal=await response.json();
        return retrunVal;
    }catch(err){
        console.log(err);
        return err;
    }
}