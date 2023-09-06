//list/goal fetch requests

const baseUrl ='http://localhost:5500';

export async function fetchAllList(){
    try{
        const response=await fetch(`${baseUrl}/api/lists`);
        const returnVal=await response.json();
        return returnVal;
    }catch(err){
        console.log(err);
        return err;
    }
}

export async function fetchSingleList(listId){
    try{
        const response=await fetch (`${baseUrl}/api/goals/${listId}`);
        const result = await response.json();
        const singleList=result;
        console.log (singleList);
        return singleList;
    }catch (error){
        console.error(error);
    }
}