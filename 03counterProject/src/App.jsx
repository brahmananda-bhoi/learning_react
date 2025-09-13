import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(4)

  const addValue=()=>{
    setCount(count+1);
  }

  const removeValue=()=>{
    if(count>0)
      count=count-1;
    setCount(count);
  }

  return (
    <>
      <h1>I am BRAHMANANDA</h1>
      <div>Counter Value: {count}</div>
      <button
      onClick={addValue}
      >Add Value: {count}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value: {count}</button>
    </>
  )
}

export default App
