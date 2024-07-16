import "./App.css"
import "./index.css"
export interface IAppProps {
}

function App() {
  return (
    <div className="App">
      <form >
        <label className="text-red-900">
          First Name:
        </label>
        <input type="text" placeholder="first name"/>
        <label>
          Last Name:
        </label>
        <input type="text" placeholder="Last name"/>
        <label>
          Email:
        </label>
        <input type="email" placeholder="email"/>
        <label>
          Age
        </label>
        <input type="number" placeholder="age"/>
        <label>
          Password
        </label>
        <input type="password" placeholder="Password"/>
        <label>
          Confirm Password
        </label>
        <input type="password" placeholder="Confirm Password"/>
      </form>
      
    </div>
  );
}

export default App