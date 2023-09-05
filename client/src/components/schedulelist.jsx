import Schedule from './schedule';
import dayjs from 'dayjs'

// formatDate(timestamp){
//     return new Intl.DateTimeFormat('en-US').format(timestamp);
// }

// const shortDateFormat=dayjs(date).format("MM/DD/YYYY")

export default function ScheduleList({allSchedule}){
    return(
        <>
        {allSchedule.map((schedule)=>{
            return <Schedule key={schedule.scheduleId} schedule={schedule}/>
})}
        </>
    )
}