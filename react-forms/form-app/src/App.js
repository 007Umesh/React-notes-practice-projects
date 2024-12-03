import React,{useState} from 'react';


function App() {

const [formData,setFormData] = useState(
  {firstName:'',
    lastName:'',
     email:'',
     country:'india',
     city:'',
     state:'',
     zip:'',
     address:'',
     comments:false ,
     offers:false ,
     candidate:false ,
      mode:"", 
      
  }
);

function changeHandler(evt){
  const {name,type,checked,value} = evt.target;
  setFormData(prev=>{
    return{
   ...prev,[name]: type === "checkbox" ? checked : value
}
  })  
}
function submitHandler(e){
  e.preventDefault();  
  console.log(JSON.stringify(formData));
}

  return (
    <div className="flex justify-center bg-gray-100  w-[100vw] p-5">
      
     <form onSubmit={submitHandler}
     className='w-1/2 p-5  flex flex-col shadow-sm gap-3 bg-white font-serif rounded-2xl '>

      
     <label htmlFor='firstName'>First Name</label>
      <input type="text" 
      placeholder='First Name' 
      name='firstName' 
      id='firstName'
      value={formData.firstName} 
       onChange={changeHandler}
       className='form-input'
      />
     
      <label htmlFor='lasttName'>Last Name</label> 
      <input type="text"
       placeholder='last Name' 
       name='lastName'
       id='lastName'
       value={formData.lastName}
      onChange={changeHandler}
      className='form-input'
            />

       
       <label htmlFor='emial'>Email Address</label>  
      <input type="email" 
      placeholder='enter ur email' 
      name='email'
      id='email'
      value={formData.email}
      onChange={changeHandler}
      className='form-input'
      />

     
      <label htmlFor='country'>Country</label> 
      <select name ='country' 
      id='country' 
      onChange={changeHandler}
      className='form-input'>
      <option value='india'>india</option>
      <option value='Canada'>Canada</option>
      <option value='russia'>russia</option>
      </select>

    
      <label htmlFor='address'>Street Address</label>
      <input
      placeholder='Address'  onChange={changeHandler}
      name='address'
      id='address'
      className='form-input'
      value={formData.address}
      />
       
 

      <label htmlFor='city'>City</label>
      <input type='text'
      name='city' id='city'
      onChange={changeHandler}
      className='form-input'/>

    
      
      <label htmlFor='state'>State / Province</label>
      <input type='text'
      name='state' id='state'
      onChange={changeHandler}
      className='form-input'/>

     
      
      <label htmlFor='zip'>ZIP / Postal Code</label>
      <input type='text'
      name='zip' id='zip'
      onChange={changeHandler}
      className='form-input'/>
   
    <h3 >By Email</h3>
    <div className='flex items-center gap-2 '>
    <input type='checkbox' onChange={changeHandler}
      name='comments' id='comments' checked={formData.comments}
      />
      <label htmlFor='comments'> Comments</label>
    </div>
    <p className='pl-4'>Get notified when someones posts a comments on a posting</p>
      
      <div className='flex items-center gap-2 '>
      <input type='checkbox' onChange={changeHandler}
       name='candidate' id='candidate' checked={formData.candidate}
      />
      <label htmlFor='candidate'> Candidates</label>
      </div>
      
      <p className='pl-4'>Get notified when a Candidates applies for a job</p>

      <div className='flex items-center gap-2 '>
      <input type='checkbox' onChange={changeHandler}
      name='offers' id='offers' checked={formData.offers}
      />
      <label htmlFor='offers'> Offers</label>
      </div>
      
      <p className='pb-3 pl-4 '>Get notified when a Candidates accept or reject an offer</p>
  
      
      
     
     <h3 className='pb-1'>Push Notifications</h3>
     <div className='flex items-center gap-2 '>
     <input type='radio' onChange={changeHandler} name='mode'
      value="Everything"
      id='Everything'
      checked={formData.mode === "Everything"}/>
      <label htmlFor='Everything'>Everything</label>
     </div>
      
      <div className='flex items-center gap-2 '>
      <input type='radio' onChange={changeHandler} name='mode'
      value="Same as email"
      id='Same as email'
      checked={formData.mode === "Same as email"}/>
      <label htmlFor='Same as email'>Same as email</label>
      </div>
      
  
    <div className='flex items-center gap-2 '>
    <input type='radio' onChange={changeHandler} name='mode'
      value="no-notification"
      id='no-notification'
      checked={formData.mode === "no-notification"}/>
      <label htmlFor='no-notification'>No push Notifications</label>
    </div>
      
      
     <div className='pt-2'>
     <input type='submit'
     className='border-2 border-black p-2 rounded-lg bg-violet-600 text-white w-28 cursor-pointer'
     value='save'/></div>     
      
    
     </form>
    
    </div>
  );
}

export default App;
