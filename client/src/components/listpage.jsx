import { useState,useEffect } from 'react'
import List from './list';
import { useNavigate } from 'react-router';
import { fetchAllList } from '../helpers/list';
import SingleList from './listsingle';

export default function ListPage(){
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

      const handleDataClick = (id) => {
        console.log("Goal has been chosen");
        navigate(`/goals/${id}`)
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
        <div>
        {/* <Routes>
            <Route path="/goals/:listId" element ={<SingleList/>}/>
        </Routes> */}
        </div>
    </div>
    </>
  )
}

//   return (
//     <>
//       <div>
//         {allSchedule.map((schedule)=>(
//         <div 
//         key ={schedule.scheduleId}
//         onClick={()=>handleDataClick(schedule.scheduleId)} style={{ cursor: "pointer" }}>
//         <Schedule schedule={schedule}/>
//         </div>
//       ))}
//        </div>

//     </>
//   );
// }