import List from './list';

export default function ListList({allList}){
    return(
        <>
        {allList.map((list)=>{
            return <List key={list.listId} list={list}/>
})}
        </>
    )
}