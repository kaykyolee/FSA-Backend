export default function List({list}){
    return (
        <p key={list.listId}>{list.goal}</p>
    )
}