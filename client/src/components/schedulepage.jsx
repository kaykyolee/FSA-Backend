import { useState, useEffect } from "react";
import Schedule from './schedule';
import AddSchedule from './scheduleadd'
import { fetchAllSchedule } from "../helpers/schedule";
import { Routes, Route, useNavigate } from "react-router";

// import dayjs from 'dayjs'

// // formatDate(timestamp){
// //     return new Intl.DateTimeFormat('en-US').format(timestamp);
// // }

// // const shortDateFormat=dayjs(date).format("MM/DD/YYYY")


export default function SchedulePage() {
  const [allSchedule, setAllSchedule] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const schedule = await fetchAllSchedule();
      setAllSchedule(schedule);
      console.log(schedule);
      return schedule;
    }
    fetchData();
  }, []);

  const handleDataClick = (scheduleId) => {
    console.log("Date has been chosen");
    navigate(`/schedule/${scheduleId}`)
  };

  return (
    <>
      <div>
        {allSchedule.map((schedule)=>(
        <div 
        key ={schedule.scheduleId}
        onClick={()=>handleDataClick(schedule.scheduleId)} style={{ cursor: "pointer" }}>
        <Schedule schedule={schedule}/>
        </div>
      ))}
        <div>
        <AddSchedule/>
        </div>
       </div>

    </>
  );
}