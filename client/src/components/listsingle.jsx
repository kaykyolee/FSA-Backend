import {useState, useEffect} from 'react';
import { fetchSingleList } from '../helpers/list';
import { useParams } from "react-router-dom";


export default function SingleList (){
    const [list, setList] = useState({});
    const { listId } = useParams();


    useEffect(()=> {
        async function getSingleList(){
            const APIResponse=await fetchSingleList(listId);
            if (APIResponse.success){
                setList(APIResponse.data.list);
                console.log("Single date data:", list)
            } else{
                console.error ("There was an error in getting this goal");
            }
        }
        getSingleList();
    },[]
    );


    return (
        <div>
          <h5>Today's goal: {list.goal}</h5>      

        </div>
    )


}