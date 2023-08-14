import React from 'react'
import {FcLike} from "react-icons/fc";
import {FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';


function Card(props) {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses= props.setLikedCourses;
    // console.log("printing courses")
    // console.log(course);
    function clickHandler(){
          if(likedCourses.includes(course.id)){
            //pehele se like hua pada hai 
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id))) ;
            toast.warning("like Removed");
          }

          else{
            //pehle se liked nahi hai ye course

            //insert karan hai ye course liked courses main
            if(likedCourses.length === 0) {
              setLikedCourses([course.id]);
            }
            else{
              //non empty case
              setLikedCourses ( (prev) => [...prev, course.id]);
            }
            toast.success("liked successfully");
          }
    }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        
           <div className='relative'>
              <img src={course.image.url}></img>
            
               <div className="w-[40px] h-[40px] bg-white absolute rounded-full right-1 bottom-[-7px]
                 grid place-items-center">
                <button onClick={clickHandler} >
                    {
                       likedCourses.includes(course.id) ?
                       (<FcLike fontSize="1.75rem"/>) :
                       (<FcLikePlaceholder fontSize="1.75rem"/>)                       
                    }
                </button>
               </div>
            </div>
        
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
              {
                course.description.length > 100 ?
                 (course.description.substr(0,100)) + "..." :
                 (course.description )
              }
            </p>
        </div>

    </div>
  )
}

export default Card;

