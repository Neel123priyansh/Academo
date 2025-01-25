import './App.css'
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import {Home} from './Home/home'
import { Dashboard } from './DashBoard/dashboard'
import ExpandableCardDemo from './DashBoard/click'
import { Timetable } from './DashBoard/chat_class'
import { Search } from './DashBoard/search'
import { EventSRM } from './DashBoard/event'
// import { FloatingDockDemo } from './DashBoard/dashboard'
// import { Form } from './Regis/form'
// import { Add } from './Cart/add'

// import { Trainer } from './DashBoard/Trainer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dash' element={<Dashboard/>}/>
      <Route path='/Time' element={<Timetable/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Event' element={<EventSRM/>}/>
      {/* <Route path='/Expand' element={<ExpandableCardDemo/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
