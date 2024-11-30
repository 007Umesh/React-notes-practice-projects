import React,{useState} from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';

function Card(props){
    let course = props.courseData;
    let info = course.description;
    let liked = props.liked;
    let setLike = props.setLike;
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info:`${info.substring(0,150)}...`;
    const readMoreHandler = () =>{
        setReadmore(!readmore);
    }

    
    function clickHandler(){
        if(liked.includes(course.id)){
            setLike((prev)=> prev.filter((cid)=>(cid !== course.id) ));
                toast.warning("Dis-liked");       
        }
        else{
            if(liked.length === 0){
                setLike([course.id]);
            }
            else{
                setLike((prev)=>[...prev,course.id]);
            }
            toast.success("liked successfully");
        }
    }
    return(
        <div className="w-[300px]  rounded-xl shadow-2xl bg-gradient-to-r from-rose-400 to-red-500 overflow-hidden">
            <div className='relative'>
            <img src={course.image.url} alt={course.image.alt}></img>
                           
                <div className="absolute right-[1px] bottom-[1px]  w-[40px] h-[40px] bg-white rounded-full grid place-items-center ">
                    <button onClick={clickHandler}>
                       {liked.includes(course.id) ?(<FcLike fontSize="1.75rem"/>) :(<FcLikePlaceholder fontSize="1.75rem"/>)}
                    </button>
            </div>
            </div> 
        <div className="p-2">
            <p className='font-bold text-2xl text-rose-950'>{course.title}</p>
            <div className=' font-bold text-pretty pt-2'>{description }
            <button onClick={readMoreHandler} className='cursor-pointer text-red-950'>
            {readmore ? `show Less`:`read more`}
          </button>
            </div>
        </div>
        </div>
    ) 
}

export default Card;