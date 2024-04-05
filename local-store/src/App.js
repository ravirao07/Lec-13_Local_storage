import React, { useRef } from 'react'
import './App.css'
const App = ()=>{
  const inputref = useRef("")
  const update = () =>{
    console.log(inputref.current.value);
    localStorage.setItem("name" ,inputref.current.value)
  }
  return(
  <div className="App">
    <h1>App Component</h1>
   <input ref={inputref}></input>
   <br/><br/>
    <button onClick={update}>Submit</button>
  </div>
)
}
export default App