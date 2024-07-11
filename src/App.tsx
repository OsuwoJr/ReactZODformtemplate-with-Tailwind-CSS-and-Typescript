//import React from 'react'
import './App.css'

const App = () => {
  const name:string = "Osuwo"
  const age:number = 26
  const isMarried:boolean = false
  const getName = (name:string): number=>{
    if (name==="Pedro"){
      return 28
    }else {
      return 0
    }

  }
  return (
    <div className='App'>
      {name}
      {age}
      {isMarried}
     
    </div>
  )
  getName
}

export default App
