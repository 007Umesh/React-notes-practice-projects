import React from "react";

function Filter(props) {

    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHanlder(title){
        setCategory(title);
    }
    return(
        <div className=" flex gap-2 justify-center items-center p-4"> 
            {
                filterData.map((filter)=>{
               return(<button key={filter.id}  
                className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black *
                    hover:bg-opacity-50 border-2 transition-all duration-300 ${category === filter.title ?  " border-black" :  " border-transparent" } `} 
                
                
                onClick={()=>filterHanlder(filter.title)}
                >
                {filter.title}
            </button>) 
                })
            }
        </div>
        )
}

export default Filter;