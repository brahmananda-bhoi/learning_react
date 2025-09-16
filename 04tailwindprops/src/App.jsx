import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myhash={
    hash2:"winter",
    hash3:"photography"
  }
  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl'>Tailwind test</h1>
      {/* <Card hash1="photography" hash={myhash}/> */}
      <Card/>
      <Card hash1="sun" hash2="mounten" hash3='winter'/>
    </>
  )
}

export default App
