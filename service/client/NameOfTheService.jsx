import "./index.css";
import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RelatedProducts from "./RelatedProducts.jsx"


const NameOfTheService = () => {
  const [data, setdata] = useState([]);
  useEffect(()=> {  
    axios.get('/products')
   .then(result => { setdata(result.data)
    console.log(data);})
},[]) ;
const checkdata = ()=>{
  if (data[0] !== undefined) {
    return  <RelatedProducts relatedData = {data}/>
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
