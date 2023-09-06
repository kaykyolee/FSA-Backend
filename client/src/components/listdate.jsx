import { useState,useEffect } from 'react'
import List from './list';
import { useNavigate } from 'react-router';
import { fetchAllList } from '../helpers/list';
import SingleList from './listsingle';

export default function ListDate(){
    const [allList, setAllList] =useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
          const list=await fetchAllList();
          setAllList(list);
          console.log(list);
          return list;
        }
        fetchData();
      },[]);

      const handleDataClick = (scheduleId,listId) => {
        const url=`/schedule/${scheduleId}/goals/${listId}`
        console.log("Goal has been chosen");
        navigate(url)
      };

      
  return (
    <>
    <div>    
        {allList.map((list)=>(
      <div
        key={list.listId}
        onClick={()=>handleDataClick(list.listId)} style={{cursor:'pointer'}}>
        <List list={list}/>
      </div>
        ))}
    </div>
    </>
  )
}

