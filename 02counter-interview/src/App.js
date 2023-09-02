import './App.css';
import React , {useState} from 'react';

function App() {
  let [counter,setValue]=useState(5)
  // let counter = 10;
  function addValue(){
    // console.log('counter',counter);
    setValue(previous=>previous+1)
    setValue(previous=>previous+1)
    setValue(previous=>previous+1)
    setValue(previous=>previous+1)
  }
  function removeValue(){
    setValue(counter-1)
  }

  return (
    <>
    <h1>Counter Demo </h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value : {counter}</button>
    <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  )
}

export default App;
