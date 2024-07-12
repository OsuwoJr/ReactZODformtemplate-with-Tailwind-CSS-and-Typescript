//import React from 'react'
import './App.css'
import { Person,BoysLuck } from './components/Person'

const App = () => {
 
  return (
    <div className='App'>
      <Person name="Osuwo" age={20} email="osuwoodongo@gmail.com" boysLuck={BoysLuck.Short}/>
    </div>
  )
 
}

export default App
