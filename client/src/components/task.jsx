export default function Task({task}){
    return (
        <div>
        <p key={task.taskId}>{task.title}</p>
        <p key={task.taskId}>{task.description}</p>
        <p key={task.taskId}>{task.priority}</p>
        <p key={task.taskId}>{task.status}</p>
        <p key={task.taskId}>{task.notes}</p>
        </div>
    )
}