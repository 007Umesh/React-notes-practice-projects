import React from 'react';
import ProductForm from './ProductForm';


function NewProduct(props){

    const saveProduct = (data)=>{
       console.log("isnisde newProduct component");
        console.log(data);
        //calling parent function
        props.newdata(data);
    }

    return (
        <div className='border-2 border-black rounded-2xl p-5 bg-white shadow-2xl shadow-indigo-500/40 ...'>
            <ProductForm  addData={saveProduct}/>
        </div>
    )

}

export default  NewProduct;