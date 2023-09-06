//schedule fetch requests

const baseUrl ='http://localhost:5500';

export async function fetchAllSchedule(){
    try{
        const response=await fetch(`${baseUrl}/api/schedule`);
        const returnVal=await response.json();
        return returnVal;
    }catch(err){
        console.log(err);
        return err;
    }
}

export async function fetchSingleSchedule(scheduleId){
    try{
        const response=await fetch (`${baseUrl}/api/schedule/${scheduleId}`);
        const result = await response.json();
        const singleSchedule=result;
        console.log (singleSchedule);
        return singleSchedule
    }catch (error){
        console.error(error);
    }
}


export async function createSchedule(scheduleId,date){
    try {
        const response=await fetch(`${baseUrl}/api/schedule`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scheduleId,
                date,
            }),
        });
        const result = await response.json();
        return result
    }catch (error){
        console.error (error);
    }
}

export async function deleteSchedule (scheduleId) {
    try{
        const response=await fetch (`${baseUrl}/api/schedule/${scheduleId}`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error){
        console.error (error);
    }
}

