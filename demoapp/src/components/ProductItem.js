import React,{useState} from 'react';
import ProductDate from './ProductDate';

function ProductItem(props){

const [title,setTitle] =useState(props.title);
const clickHandler = ()=>{
    //alert("added to cart");
    setTitle("popcorn");
}
    return(
    <div className='flex justify-between gap-16 pt-3  items-center border-2 rounded-xl p-3 mb-3'>
        <ProductDate date={props.date}/>
            <h2 className='border-2 rounded-xl  p-4 bg-orange-400'>{title}</h2>   
            <button className='border-2 rounded-xl  p-4' onClick={clickHandler}>
        Add to cart
       </button>      
    </div>
    
    );
}
export default ProductItem;