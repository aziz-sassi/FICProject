import "./index.css";
import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RelatedProducts from "./RelatedProducts.jsx"
import YourOutfitList from "./YourOutfitList.jsx"


const NameOfTheService = () => {
  const [data, setdata] = useState([]);
  const [outfits,setoutfits] = useState([]);
  const [productPics , setproductPics] = useState([]);

  useEffect(()=> {  
    axios.get('/products')
   .then(result => { setdata(result.data)
    getoutfits()
   })
},[]) ;
const addToOutfits = (element)=>{
  if (!outfits.includes(element)) {
    setoutfits([...outfits,...data.filter(e=>e===element)])
  }
  if (outfits.includes(element)) {
  console.log("you cant add to outfits twice  ")
  }
}
const getoutfits = () => {


 
          






}
const checkdata = ()=>{
  if (data[0] !== undefined) {
    Promise.all ( data.map((e)=>{

      return axios.get(`/products/${e.id}/styles`)
   
   
        
       }))
             .then(result =>{ 
        
        setproductPics(result)
        console.log(result)
        console.log(productPics,"helllll")
        return;
  
         // setproductPics([...productPics,result.data.results[0]])
         // console.log(productPics,result.data.results[0].photos[0]['thumbnail_url'],"this is chkara7oms")
   
         
             })

    return (<> <RelatedProducts relatedData = {data} addoutfit = {addToOutfits} pics = {productPics}/>
    <YourOutfitList relatedData = {data} outfitsData = {outfits}  /> </>)
  }

  else {

    
    return <h1>chkara7oms</h1>
  }
}
return(
  <>
 {checkdata()}
 
  </>


  );
};

export default NameOfTheService;
