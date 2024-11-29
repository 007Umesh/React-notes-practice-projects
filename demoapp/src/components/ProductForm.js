import React,{useState} from 'react';


function ProductForm(props){

    const [newTitle,setTitle] = useState('');
    const [newDate, setDate] = useState('');

 const titleChangeHandler =(evt)=>{
       setTitle(evt.target.value);
    }

    const dateChangeHandler =(evt)=>{
        setDate(evt.target.value);   
        }   
       

        const submitForm =(evt)=>{
            evt.preventDefault();
            const productData = {
                title:newTitle,
                date:newDate,
            }
            props.addData(productData);
            
            setTitle("");
            setDate("");
        }
    return(
        <form className='flex flex-col gap-4' onSubmit={submitForm}> 
            <div className='border-2 rounded-xl  p-4'>
                <label className='pr-3'>Title</label>
                <input type="text" name="title" value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='border-2 rounded-xl  p-4'>
                <label className='pr-3'>Date</label>
                <input type="date" min="2022-01-01" value={newDate} max="2024-12-12" name="date" onChange={dateChangeHandler}></input>
            </div>
            <div className='border-2 rounded-xl  p-4 text-center bg-slate-700 text-white'>
                <button  type='submit'>Add Product</button>
            </div>
        </form>

        
    )
}

export default ProductForm;