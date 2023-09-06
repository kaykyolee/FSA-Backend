import {useState, useEffect} from 'react';
import { fetchSingleSchedule } from '../helpers/schedule';
import { useParams } from "react-router-dom";
import DeleteScheduleButton from './scheduledelete';
import ListPage from './listpage'


export default function SingleSchedule (){
    const [schedule, setSchedule] = useState({});
    const { scheduleId } = useParams();


    useEffect(()=> {
        async function getSingleSchedule(){
            const APIResponse=await fetchSingleSchedule(scheduleId);
            if (APIResponse){
                setSchedule(APIResponse);
                // console.log(APIResponse.data.schedule)
            } else{
                console.error ("There was an error in getting this date");
            }
        }
        getSingleSchedule();
    },[]
    );

    return (
        <div>
        <div>
          <h5>Today's date:  {schedule.date}</h5>      
        <DeleteScheduleButton scheduleId={scheduleId}/>
        </div>
        <div>
            <h5>Choose a goal for today: </h5><ListPage/> 
        </div>
        </div>
    )
}