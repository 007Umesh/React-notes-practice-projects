import React from 'react';
import Testimonial from './components/Testimonials';
import Reviews from './Data';

function App() {
  console.log(Reviews);
  return (
    <div className='h-[100vh] w-[100vw]  flex flex-col justify-center items-center bg-gray-200 '> 
    <div className='pb-16'>
    <h1 className='text-4xl font-bold text-center'>Our Testimonials</h1>
    <div className='bg-violet-400 h-[4px] mt-1 ml-16 w-1/2 '></div>  
      </div>   
        
      <Testimonial reviews={Reviews}/>         
    </div>
  );
}

export default App;
