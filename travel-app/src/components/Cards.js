import React,{useState} from 'react';

function Cards({id,name,info,image,price,removeCard}){
    const [readmore, setReadmore] = useState(false);
    const descritption = readmore ? info:`${info.substring(0,150)}...`;
    const readmoreHandler= ()=>{
        setReadmore(!readmore);
    }
     return(
        <div className='border-2 border-black flex flex-col  max-w-96 h-max font-mono p-3 rounded-xl shadow-2xl bg-lavender'>
            <img className='h-64 w-full rounded-xl' src={image} alt='images'></img>
            <h4 className='p-2  '>{name}</h4>
            <p className='p-2 '><strong>{price}</strong></p>
           <div className='p-2 '>
          {descritption}
          <span onClick={readmoreHandler} className='cursor-pointer text-blue-600'>
            {readmore ? `show Less`:`read more`}
          </span>
           </div>
           <div className='flex justify-center items-center pb-2'>
           <button onClick={()=>{
                removeCard(id)
            } } className='border-2 border-black p-3 rounded-2xl bg-deco hover:bg-red-200 '>Not Interested</button>
           </div>
           
        </div>
        

    )
}

export default Cards;