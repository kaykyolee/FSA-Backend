export default function Schedule({schedule}){
    return (
        <p key={schedule.scheduleId}>{schedule.date}</p>
    )
}