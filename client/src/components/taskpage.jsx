import { useState,useEffect } from 'react'
import TaskList from '../components/tasklist';
import { fetchAllTask } from '../helpers/task';

export default function TaskPage(){
    const [allTask, setAllTask] =useState([])

    useEffect(()=>{
        async function fetchData(){
          const task=await fetchAllTask();
          setAllTask(task);
          console.log(task);
          return task;
        }
        fetchData();
      },[]);

      
  return (
    <>
      <div>
        <TaskList allTask={allTask}/>
      </div>
    </>
  )
}