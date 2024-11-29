import React from 'react';

function ProductDate(props){
    const day =props.date.toLocaleString('en-US',{day: '2-digit'});
     const month = props.date.toLocaleString('en-US',{month:'long' });
     const year = props.date.getFullYear();

    return (
        <div className='border border-black rounded-lg w-24  flex   flex-col items-center mb-3 bg-slate-950 text-white'>
         <div className='font-serif '>{month}</div>
         <div className='font-serif'>{year}</div>
         <div className='font-serif'>{day}</div>
         </div>
    )
}

export default ProductDate;