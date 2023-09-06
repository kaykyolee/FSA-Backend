import Task from './task';

export default function TaskList({allTask}){
    return(
        <>
        {allTask.map((task)=>{
            return <Task key={task.taskId} task={task}/>
})}
        </>
    )
}