import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Comparison from "./Comparison.jsx";


// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './styles.css'


// install Virtual module
SwiperCore.use([Virtual]);








export default function RelatedProducts(props) {
  const [swiperRef, setSwiperRef] = useState(null);



 
  // Create array with 1000 slides
 


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
    <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual 
        onClick = {()=> {return "opacity-5"}}
        className={}
      >
           {props.relatedData.map((e,index)=>(
             <SwiperSlide key={e.id} virtualIndex={index}>
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
          </SwiperSlide>  
           ))}  
</Swiper>
      

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
