import './App.css'

const App = () => {
  const name:string = "Osuwo"
  const age:number = 26
  const isMarried:boolean = false
  
  return (
    <div className='App'>
      {name}
      {age}
      {isMarried}
    </div>
  )
}

export default App
