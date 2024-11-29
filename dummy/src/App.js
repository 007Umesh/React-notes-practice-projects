import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [height,setHeight] = useState(window.innerHeight);
  const [width,setWidth] = useState(window.innerWidth);
  
  
 useEffect(()=>{
    const handleSize=()=>{
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleSize);
    return ()=>{
        window.removeEventListener('resize', handleSize);
      }
 },[]);

  return (
    <div className="h-screen">
      <h2>Window size</h2>
      <p>{height}*{width}</p>
    </div>
  );
}

export default App;
