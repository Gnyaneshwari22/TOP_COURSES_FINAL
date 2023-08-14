import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';

import Filter from './components/Filter';
import {apiUrl,filterData} from "./data";
import { toast } from "react-toastify";
import Spinner from './components/Spinner';


const App = () => {

  const [courses , setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
   
    const fetchData = async () => {
      setLoading(true);

      try{
          let response= await fetch(apiUrl);
          let output =  await response.json();

          //save data into a variable

          setCourses(output.data);

          // console.log(data);
      }
      catch (error){
                 toast.error("something went wrong");
      }
      setLoading(false);
    }


    useEffect ( () => {
        fetchData();
   } ,[]);
      
   
  return (
      <div className="min-h-screen flex flex-col bg-slate-600">
         <div>
           <Navbar/>
         </div>
          
        <div>
            <Filter 
              filterData = {filterData}
              setCategory={setCategory}
              category={category}
            />
        </div>

        <div className="w-11/12 max-w-[1200px] 
          mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
           {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
           }
        </div>
      </div>
  );
};

export default App;
