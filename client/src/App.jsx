import { useState,useEffect } from 'react'
import './App.css'
import ScheduleList from './components/schedulelist';
import { fetchAllSchedule } from './helpers/schedule';
import { all } from 'axios'

function App() {
  const [allSchedule, setAllSchedule] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const schedule=await fetchAllSchedule();
      setAllSchedule(schedule);
      console.log(schedule);
      return schedule;
    }
    fetchData();
  },[]);

  return (
    <>
      <div>
        <ScheduleList allSchedule={allSchedule}/>
      </div>

    </>
  )
}

export default App
