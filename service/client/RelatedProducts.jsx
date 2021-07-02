    import React, { useState, useEffect } from 'react';

import Comparison from "./Comparison.jsx";







export default function RelatedProducts(props) {

const [isToggled,setisToggled] = useState(false)


    
    const clickandle = (boolean)=>{
       
            setisToggled(boolean);
        
    }
   



    const toggleComparison = ()=>{
        if (isToggled) {
            return <Comparison exit = {clickandle}/>
        }
        else {
          return;
        }
     

    }


    return (
        <div>
                
    <div>
{console.log(props.relatedData,'hhhhhhhhhhhhh')}

      <div className="min-h-screen bg-White-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className  ="flex flex-col bg-white m-auto p-auto">

      <div
        className ="flex overflow-x-scroll pb-10 overflow-hidden  "
      >
        <div
          className ="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >

           {props.relatedData.map((e)=>(
                         <div className  ="inline-block px-3  "  key = {e.id} onClick = {()=>clickandle(true)}>
                         <div
                           className =" w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2 hover:bg-white hover:shadow-lg hover:border-transparent"
                        >  
       <div>
       <img className="rounded" src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' alt="hello"/> 
     <div className="mt-2">
       <div>
         <div className="text-xs text-gray-600 uppercase font-bold">{e.category} </div>
         <div className="font-bold text-gray-700 leading-snug">
           <a href='#' className="hover:underline">{e.name}</a>
         </div>
         <div className="mt-2 text-sm text-gray-600">{ e.default_price}</div>
       </div>
     </div>
   </div>
   </div>
          </div>
           ))}  
      
      
 
        </div>
      </div>
</div>
<div className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black">&#x276F;</div>
    <div className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black">&#x276E;</div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            
          </div>
        </div>
      </div>  
      
    </div>
    {toggleComparison()}
            </div>
    )
}
