import Loader from "../Components/Loader";
import React from "react";
import {useParams,Link} from "react-router-dom"




function RestaurantPage() {
  
const { user_id } = useParams();
const getData = async(url) => {
  // return fetch(url).then((res) => res.json());
   try{
     let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${user_id}`)
     let data=await res.json();
     return data
   }
   catch(err){
    console.log(err)

   }
};
  const [userDetails, setUserDetails] = React.useState({});
  // const abc='/mockapi/getrestaurants/:id' 
   const fin=async()=>{
    try{
     let datas=await getData()
     setUserDetails(datas.data)

    }
    catch(err){
      console.log(err)
    }
   }
  

     

  React.useEffect(() => {
    // getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/:${user_id}`).then((res) =>
    // setUserDetails(res.data)
    // );
    fin()

  }, [user_id]);
  console.log(userDetails)
  // if (true) {
  //   return <Loader />;
  // }
  return (
    
    <div data-testid="restaurant-container">
      <img src={userDetails.image} data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">{userDetails.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{userDetails.type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{userDetails.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">
            {userDetails.number_of_votes}
          </b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">
            {userDetails.price_starts_from}
          </b>
        </div>
      </div>
      <div>

    </div>
      </div>
     
  );
}
export default RestaurantPage;
