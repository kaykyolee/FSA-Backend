import { useState,useEffect } from 'react'
import './App.css'
import ScheduleList from './components/schedulelist';
import ListList from './components/listlist';
import Navbar from './components/navbar';
import { fetchAllSchedule } from './helpers/schedule';
import { fetchAllList } from './helpers/list';
import {Routes, Route} from 'react-router-dom';
import { all } from 'axios';

function App() {
  const [allSchedule, setAllSchedule] = useState([])
  const [allList, setAllList] =useState([])

  useEffect(()=>{
    async function fetchData(){
      const schedule=await fetchAllSchedule();
      setAllSchedule(schedule);
      console.log(schedule);
      return schedule;
    }
    fetchData();
  },[]);

  useEffect(()=>{
    async function fetchData(){
      const list=await fetchAllList();
      setAllList(list);
      console.log(list);
      return list;
    }
    fetchData();
  },[]);

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<ScheduleList allSchedule={allSchedule}/>}/>
          <Route path='/goals' element = {<ListList allList={allList}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
