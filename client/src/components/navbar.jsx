import{Routes,Route,Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <Link to='/'>Dates</Link>
            <Link to='/lists'>Goals</Link>
            <Link to='/tasks'>To-Do List</Link>
        </div>
    )
}