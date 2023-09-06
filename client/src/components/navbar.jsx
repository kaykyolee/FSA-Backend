import{Routes,Route,Link} from 'react-router-dom';
    // const [dateClicked, setDateClicked]=useState(true);
    

export default function Navbar(){
    return(
        <div>
            <Link to='/'>Dates</Link>
            {/* {dateClicked ?  */}
            <Link to='/goals'>Goals</Link> 
            {/* : <Link to='/'>Dates</Link>} */}
            <Link to='/tasks'>To-Do List</Link>
        

        </div>
    )
}