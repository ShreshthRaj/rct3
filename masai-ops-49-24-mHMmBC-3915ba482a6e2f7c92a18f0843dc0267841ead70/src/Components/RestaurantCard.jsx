import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


 
//  if(loading){
//   <loader/>
//  }


export default function RestaurantCard(props) {

var {page}=props
  
  // const [loading,setLoading]=useState(false)
  
//  var page=1;
  
const [final,setApi] =useState([]);

  return (
   
    <>

    
{final.map((ele)=>
        <tr key={ele.id} data-testid="item">
        <td>
          {/* <Link data-testid="name">{ele.name}</Link> */}
        </td>
        <td data-testid="rating">{ele.rating}</td>
        <td data-testid="type">{ele.type}</td>
        <td data-testid="price">{ele.price_starts_from}</td>
  

        </tr>
               )}
    
    
    </>



  );
}
