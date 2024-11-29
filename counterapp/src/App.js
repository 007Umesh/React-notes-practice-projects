import React from 'react';
import { useState } from 'react';
import './App.css';


function App(porps) {

  const [count , setCount] = useState(0);
  

 const  increment =()=>{
      setCount(count+1);
    }
   const decrement =() =>{
      setCount(count-1);
  }   

  const resetCount=()=>{
    setCount(0);
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... '>
    <div className='p-4 w-1/2 text-center'>
    <h2 className='font-mona text-xl'>Increment and Decrement</h2>
      </div>
      <div className='flex gap-5  p-4 text-xl'>
        <button className='border-2 border-black rounded-lg p-4' onClick={decrement}>-</button>
        <p className='p-4 border-2 border-black rounded-lg '>{count}</p>
        <button className='border-2 border-black p-4 rounded-lg' onClick={increment}>+</button>
      </div>
    <button className='border-2 border-black rounded-2xl w-24 p-3 font-mono text-xl'  onClick={resetCount}>reset</button>
    </div>
  );
}

export default App;
