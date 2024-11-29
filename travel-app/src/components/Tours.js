import React from "react";
import Cards from './Cards';

function Tours({tours,removeCard}){
        return(
        <div className="flex flex-col"> 
            <div className="flex items-center justify-center p-10 text-4xl font-mono text-blue-900 ">
            <h1 className="border-dashed border-2 border-sky-500 ... w-1/2 text-center p-4 font-bold">Plan with Love</h1>
            </div>
        <div className=" p-4 flex  justify-center flex-wrap gap-5">
            {
                tours.map((tour)=>{
                    return <Cards key={tour.id} {...tour} removeCard={removeCard} ></Cards>
                })
            }
            </div>    
        </div>
    )
}

export default Tours;
