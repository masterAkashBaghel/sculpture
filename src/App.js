 
import React from "react";
import { useState } from "react";
import { sculptureList } from "./component/data";
import Resume from "./component/Resume";
import { FaArrowLeft, FaArrowRight  } from 'react-icons/fa';
import Nav from "./component/Nav";


function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [resume, setResume] = useState(false);

  const hasNext = index < sculptureList.length - 1;

  let sculpture = sculptureList[index];

  function handleNext() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setResume(true);
    }
  }
  function handleMore() {
    setShowMore(!showMore);
  }
  function handleResume() {
    // Hide the end slide interface
    setResume(false);
    setIndex(0); // Reset the index to start the slider again
  }
  function handlePrev() 
  {
    if(index!==0)
    {
      setIndex(index - 1);
    }
    else{
      setResume(true);
    }
  }

  return (
    <div className="flex flex-col justify-center   w-[100vw] h-[100vh] items-center hello">
    
      {resume ? (
        <div>
          
          <Resume handleResume ={handleResume}></Resume>
        </div>
        
      ) : (
        
       <div>
        <Nav></Nav>
         <div className="flex items-center justify-center flex-col gap-4   p-5  box">
         

        
         
         <h2 className="text-white font-extrabold pt-2">
           {sculpture.name} <span className=" font-light"> by</span> <span className="font-semibold ">{sculpture.artist}</span>
         </h2>
         <div className=" text-sm text-yellow-300">
           {index + 1} of {sculptureList.length}
         </div>
         

         <div className="flex gap-11 items-center justify-center">
         <button onClick={handlePrev} className="border-2 w-[50px] rounded-[50%] h-[50px] bg-white hov flex items-center justify-center   hov">  {<FaArrowLeft/>}</button>
         <img src={sculpture.url} alt={sculpture.alt} className="h-[300px] w-auto  border-2 rounded-lg items-center p-5 mx-auto zoom" />
         <button onClick={handleNext} className="border-2 w-[50px] rounded-[50%] h-[50px] bg-white hov flex items-center justify-center ">{<FaArrowRight/>}</button>

         </div>

         {/* show more  */}
         <button onClick={handleMore} className="border-2 px-5 py-1 rounded-md bg-[#7FFFD4] hov">
         {showMore ? ("Less" ) : ("More")} Details..
         </button>
         <div className="max-w-[500px]   p-3   text-center text-white">
        
         {showMore && <p>{sculpture.description}</p>}
         </div>
         
        
       </div>
       </div>
      )}
    </div>
  );
      }

export default App;

