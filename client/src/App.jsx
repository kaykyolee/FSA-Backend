import { useState,useEffect } from 'react'
import './App.css'
import ScheduleList from './components/schedulelist';
import Navbar from './components/navbar';
import { fetchAllSchedule } from './helpers/schedule';
import {Routes, Route} from 'react-router-dom';
import { all } from 'axios';

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
        <Navbar/>
        <Routes>
          <Route path='/' element = {<ScheduleList allSchedule={allSchedule}/>}/>
          {/* <Route path='/goals' element = {<Lists/>}> */}
        </Routes>
      </div>
    </>
  )
}

export default App
