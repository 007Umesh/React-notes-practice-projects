import React,{useEffect, useState} from 'react';
import './App.css';
import NavBar  from './components/NavBar';
import { filterData,apiUrl} from './data';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {toast} from 'react-toastify';
import Spinner from './components/Spinners';

function App() {

const [courses,setCourse] =useState([]);
const[loading , setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);

const fetchData= async()=>{
  setLoading(true);
  try{
    const res = await fetch(apiUrl);
    const output = await res.json();
    //console.log("output");
    //console.log(output);
    setCourse(output.data);
   
  }
  catch(error){
    toast.error("something went wrong");

  }
  setLoading(false);
}

useEffect( () => {
  fetchData();
},[]);


 return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-red-500 to-orange-500 text-opacity-50">
     <NavBar />
     <Filter filterData={filterData} setCategory={setCategory} category={category}/>
     <div className='w-11/12 max-w-[1200px] mx-auto  min-h-[50vh]'>
      {
        loading ? (<Spinner />) : ( <Cards  courses={courses} category={category}/>)
      }
     </div>
    </div>
  );
}

export default App;
