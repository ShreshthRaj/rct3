import React,{useContext} from 'react'
import { AuthContext } from '../Context/AppContext'
import { Navigate } from 'react-router-dom'
// import { Children } from 'react';


export default function PrivateRoute({children}) {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children
//   return (
//     <div>
      
//     </div>
//   )
}
