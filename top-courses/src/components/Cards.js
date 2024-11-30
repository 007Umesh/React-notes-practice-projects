import React,{useState} from "react";
import Card from "./Card";

function Cards(props){
    let courses = props.courses;
    let category = props.category;

    
    function getCourses(){
        if(category === "All"){
            let allCourses=[];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);        
                })
            })
            return allCourses;
        }
        else{
            //pass only specific category
            return courses[category];
        }
       
    }
    
    const [liked, setLike] = useState([]);


    return(
        <div className=" mb-4 flex  justify-center flex-wrap gap-5">
           {
            getCourses().map((course)=>{
                return (
                    <Card key={course.id}  courseData ={course} liked={liked} setLike={setLike}/>
                )
            })
           }
           
        </div> 
    )
}

export default Cards;