import React,{useState} from 'react';
import data from './data';
import Tours from './components/Tours';

function App() {

const [tours,setTours] = useState(data);

function removeCard(id){
  const newTours = tours.filter(tour => tour.id !== id);
  setTours(newTours);
}


if(tours.length === 0){
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-16'>
      <h1 className='p-10 text-4xl font-mono text-blue-900 border-dashed border-2 border-sky-500 ... w-1/2 text-center '>No tours left</h1>
      <button onClick={()=>{
        setTours(data)
      }} className='border-2 border-black p-3 rounded-2xl bg-deco'>Reresh</button>
    </div>
  )
}

  return (
    <div >   
      <Tours tours={tours} removeCard ={removeCard}/>
    </div>
  );
}

export default App;
