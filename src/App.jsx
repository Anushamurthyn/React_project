import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name: 'anusha',
    age: 22,
    address:{
      city:'bengalru',
      state:'kar',
      country:'India'
    }
  }
  let newArr =[1,2,3,4,3,4]
  return (
    <>
      <h1 className='text-3xl bg-gray-500 p-3 rounded'
      >Vite with tailwind</h1>
      <Card username="Bengaluru" myArr={newArr}/>
      <Card username='Kolkata'about='kolkata is incredilbe' />
      <Card username='mumbai'/>
      

    </>
  )
}

export default App
