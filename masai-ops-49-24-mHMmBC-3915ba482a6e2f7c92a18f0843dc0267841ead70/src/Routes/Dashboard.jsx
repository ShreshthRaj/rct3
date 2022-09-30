import Loader from "../Components/Loader";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
// import {Link} from "react-router-dom
import { Link } from "react-router-dom";
import {useSearchParams} from "react-router-dom"


  
function Dashboard() {
  const [final,setApi] =useState([]);
  const [searchParams,setSearchParams]=useSearchParams()
  const [page,setPage]=useState(1);
  // const [page,setPage] =useState(1)
  const getdata=async(page)=>{
    try{
      let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
      let data= await res.json()
      return data

    }
    catch(err){
    console.log(err)
    }
}

useEffect(()=>{
  // setLoading(true)
  fin()
  // setLoading(false)

},[page])
const fin=async()=>{
 try{
    let datas=await getdata(page)
    setApi(datas.data)
    // console.log(datas)
 }
 catch(err){
console.log(err)
 }
}

 
  const logout=()=>{
    // <Navigate to="/"/>
    // <Link to="/" element={<Home/>}></Link>
      //  <Navigate to="/"></Navigate>
      // <Link to="/"></Link>
      // window.location.href="./Home.jsx"
      <Navigate  to="/login"/>
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logout} data-testid="logout-btn">Logout</button>
        <p>
          Token:{Math.random().toString().substr(2, 6)}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
           <option value="fine_dining">Fine Dining</option>
           <option value="ethnic">Ethinic</option>
           <option value="fast_food">Fast Food</option>
           <option value="cafe">Cafe</option>
           <option value="casual_dining">Casual dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{margin:"auto",marginLeft:"37%",  justifyContent: "center" }}>
         {/* <Loader/> */}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
          
               

               <table>


               <tr>
                     
                     <td>Name</td>
                    <td>Rating</td>
                    <td>Type</td>
                    <td>Price Starts From</td>
                     
                   </tr>
                   {/* <RestaurantTable page={page}/>
                    */}
              
           

              
{final.map((ele)=>
        <tr key={ele.id} data-testid="item">
        <td>
           <Link to={`/dashboard/${ele.id}`}>{ele.name}</Link>
        </td>
        <td data-testid="rating">{ele.rating}</td>
        <td data-testid="type">{ele.type}</td>
        <td data-testid="price">{ele.price_starts_from}</td>
  

        </tr>
)}
               </table>
      </div>
      <br />
      <div style={{display:"flex",margin:"auto",justifyContent:"space-around",width:"30%"}} data-testid="pagination-container">
{/*           
          <button disabled={page==1} onClick={()=>setPage(page-1)} >
              PREV
            </button>
            <button>
            {page}
            </button>
            <button onClick={()=>setPage(page+1)} >
              NEXT
              
            </button> */}

 
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(1) }}>1</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(2) }}>2</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(3) }}>3</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(4) }}>4</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(5) }}>5</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(6) }}>6</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(7) }}>7</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(8) }}>8</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(9) }}>9</div>
           <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"7px",cursor:"pointer"}} onClick={()=>{setPage(10) }}>10</div>
        {/* Pagination */}
        </div>
    </div>
  );
}

export default Dashboard;
