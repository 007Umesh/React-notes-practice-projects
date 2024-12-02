import React,{useState} from 'react';
import Card from './Card';

function Testimonial(props){
    let review = props.reviews;
    const [index,setIndex] = useState(0);

            const leftShiftHandler =()=>{
                if(index-1 < 0){
                    setIndex(review.length - 1);
                }
                else{
                    setIndex(index-1);
                }
            }
            const rightShiftHandler =()=>{
                if(index+1 >= review.length){
                    setIndex(0);
                }
                else{
                    setIndex(index+1);
                }
                
            }
            const surpriseHandler =()=>{
                const rand =Math.floor(Math.random()*review.length);
                setIndex(rand);
                
            }


    return(
        <div className='flex flex-col  p-4'>
            <Card reviews={review[index]} leftShiftHandler={leftShiftHandler} rightShiftHandler={rightShiftHandler}  surpriseHandler={surpriseHandler}>
            </Card>
             
           
        </div>
    )
}

export default Testimonial;