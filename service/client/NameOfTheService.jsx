import "./index.css";
import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const NameOfTheService = () => {
  const { useState } = React;
  const [data, setData] = useState([]);
  useEffect( async ()=>{  
    const result = await axios('/products');
    setData(result.data)
    console.log(result.data);
    console.log(data);
},[]) ;

  return (
    <div>


      <div className="min-h-screen bg-White-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className  ="flex flex-col bg-white m-auto p-auto">

      <div
        className ="flex overflow-x-scroll pb-10 overflow-hidden  "
      >
        <div
          className ="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div className  ="inline-block px-3 " >
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
           >    
          {/* //    <div>
          //   <img className="rounded" src={thefakedata.img} alt={thefakedata.imgAlt}/>
          //   <div className="mt-2">
          //     <div>
          //       <div className="text-xs text-gray-600 uppercase font-bold">{thefakedata.eyebrow} </div>
          //       <div className="font-bold text-gray-700 leading-snug">
          //         <a href={thefakedata.url} className="hover:underline">{thefakedata.title}</a>
          //       </div>
          //       <div className="mt-2 text-sm text-gray-600">{ thefakedata.pricing}</div>
          //     </div>
          //   </div>
          // </div> */}
            </div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
          <div className  ="inline-block px-3 ">
            <div
              className ="w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2"
            ></div>
          </div>
        </div>
      </div>
</div>
 <ArrowForwardIosIcon fontSize="large" className="delete_btn "/>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            
          </div>
        </div>
      </div>  
      
    </div>
  );
};

export default NameOfTheService;
