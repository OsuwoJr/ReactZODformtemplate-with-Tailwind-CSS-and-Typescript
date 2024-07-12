import {createContext} from 'react'
import './App.css'
import { Person,BoysLuck } from './components/Person'

interface AppContextInterface {
  name: string;
  age: number;
  country:string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App = () => {

  const contextValue:AppContextInterface = {
    name:"John",
    age:20,
    country:"Brazil"
  }
 
  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
      <Person name="Osuwo" age={20} email="osuwoodongo@gmail.com" boysLuck={BoysLuck.Short}/>
      
    </div>
    </AppContext.Provider>
    
  )
 
}

export default App
