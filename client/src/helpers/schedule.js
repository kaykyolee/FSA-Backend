//schedule fetch requests

const baseUrl ='http://localhost:5500';

export async function fetchAllSchedule(){
    try{
        const response=await fetch(`${baseUrl}/api/schedule`);
        const retrunVal=await response.json();
        return retrunVal;
    }catch(err){
        console.log(err);
        return err;
    }
}