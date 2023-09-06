import { useNavigate } from "react-router";
import { deleteSchedule } from "../helpers/schedule";

export default function DeleteScheduleButton ({scheduleId}){
    const navigate=useNavigate();

    async function handleDelete (event){
        event.preventDefault();
        try {
            const response =await deleteSchedule(scheduleId);
            navigate ('/');
        }catch (error){
            console.error (error);
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Date</button>
        </div>

    )

}