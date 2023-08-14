import React, { useState } from 'react';
import Card  from './Card';

function Cards(props) {     //props can also be used
    let courses = props.courses;
    let category=props.category;
   //  console.log("printing data");
   //  console.log(courses);

   const[likedCourses,setLikedCourses] = useState([]);

   function getCourses () {

      if(category === "All"){

         let allCourses = [];

         Object.values(courses).forEach(array => {
            array.forEach(courseData => {
               allCourses.push(courseData);
            })
         })
         console.log(allCourses);
         return allCourses; 
      } 
      //all courses not selected to specific categeory data pass kardiya
      else{
         return courses[category];
      }

   }
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
            getCourses().map( (course) => (
               <Card key={course.id} 
               course={course} 
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}  
               />
            ))        
       }
    </div>
  )
}

export default Cards;
