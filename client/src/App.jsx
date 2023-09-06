import './App.css'
import Navbar from './components/navbar';
import SchedulePage from './components/schedulepage';
import ListPage from './components/listpage';
import TaskPage from './components/taskpage';
import SingleSchedule from './components/schedulesingle';
import {Routes, Route} from 'react-router-dom';
import { all } from 'axios';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<SchedulePage/>}/>
          <Route path="/schedule/:scheduleId" element={<SingleSchedule />} />
          <Route path='/goals' element = {<ListPage/>}/>
          <Route path='/tasks' element = {<TaskPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
