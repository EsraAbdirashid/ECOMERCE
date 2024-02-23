import React from 'react'
import Dashboard from './Components/Dashboard'
import { Outlet } from 'react-router-dom'
// import Home from './Components/Home'
import Toprelated from './Components/Toprelated'
import MensWear from './Components/MensWear'

const App = () => {
  return (
    <div >
     <Dashboard/>
     <Outlet />

      <main> 
     {/* <div id='Home'>
       <Home/>
      </div>  */}
     <div id='Toprelated'>
    <Toprelated/>
      </div>
      <div id='MensWear'>
        <MensWear/>
      </div>
     </main> 
    </div>
  )
}

export default App