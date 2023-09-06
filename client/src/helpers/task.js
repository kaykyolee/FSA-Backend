//task fetch requests

const baseUrl ='http://localhost:5500';

export async function fetchAllTask(){
    try{
        const response=await fetch(`${baseUrl}/api/tasks`);
        const returnVal=await response.json();
        return returnVal;
    }catch(err){
        console.log(err);
        return err;
    }
}

export async function fetchSingleTask(id){
    try{
        const response = await fetch(`${baseUrl}/api/tasks/${id}`);
        const returnVal = await response.json();
        return returnVal;
    }catch (err){
        console.log(err);
        return err;
    }
}