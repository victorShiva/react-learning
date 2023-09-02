import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  let myObj={
    username:'Shivam',
    class:'FYBCA'
  }
  // let newArr=[1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind
    Test </h1>
    <Card userName='Shiva' someObj={myObj} btnText='Visit-Me'/>
    <Card userName='Sanjeev' btnText='Click-Me' />
    <Card/>
    </>
  )
}

export default App
