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
      <div>
        <img src="data:image/jpeg;base64,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"/>
        </div>
    

    </>
  )
}