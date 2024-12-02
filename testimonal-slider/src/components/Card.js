import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

function Card(props){
    let review = props.reviews;
    let leftShiftHandler = props.leftShiftHandler;
    let rightShiftHandler = props.rightShiftHandler;
    let surpriseHandler = props.surpriseHandler;
    return(
        <div className="flex flex-col justify-center items-center md:relative bg-whit e h-[350px] w-[450px] gap-2 shadow-2xl">
            <div className="absolute top-[-5rem] z-[10] left-3 ">
           <div className="absolute w-[140px] h-[140px] bg-violet-500 rounded-full  z-[-10] bottom-[5px] left-[10px]"></div>
            <img src={review.image}
            className="aspect-square rounded-full w-[140px] h-[140px] object-cover z-40"
            alt="images"></img>
        
            </div>

           <div >
           <p className="font-bold pt-6 tracking-wider">{review.name}</p>
           </div>

           <div>
           <p className="text-violet-300 uppercase">{review.job}</p>
           </div>

            <div>
                <FaQuoteLeft className="text-violet-500"/>
            </div>
                
            <div>
            <p className="text-center p-4 pt-0">{review.text}</p>
            </div>

            <div>
            <FaQuoteRight className="text-violet-500"/>
            </div>

            <div className="flex gap-5 text-violet-600 font-bold text-3xl">
            <button onClick={leftShiftHandler}> &lt; </button>
            <button onClick={rightShiftHandler}> &gt;</button>
            </div>
        
            <div>
            <button onClick={surpriseHandler}
            className="bg-violet-600 text-white p-3 rounded-lg w-32 hover:bg-violet-950 transition-all duration-200">Surpirse Me</button>
            </div>
           

        </div>
    )
}

export default Card;