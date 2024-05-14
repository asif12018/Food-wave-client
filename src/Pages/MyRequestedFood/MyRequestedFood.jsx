/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import axios from "axios";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../customHooks/useAxiosSecure";


const MyRequestedFood = () => {
  const axiosSecure = useAxiosSecure()
    //user data from context api
    const {user} = useContext(AuthContext);
    const [request, setRequest] = useState([]);
    const [donate , setDonate] = useState([]);
    useEffect(()=>{
       axiosSecure.get(`http://localhost:5000/allRequest/${user.email}`)
       .then(res =>{
        //   console.log(res.data)
          setRequest(res.data);
       })
    },[user.email, axiosSecure])
    //user total donated food
    useEffect(()=>{
      axiosSecure.get(`http://localhost:5000/userAllFood/${user.email}`)
      .then(res =>{
        //  console.log('user total donated food',res.data)
        setDonate(res.data);
      })
    },[user.email, axiosSecure])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Donnar Name</th>
        <th>Experied date and requested date</th>
        <th>pickup location</th>
        <th>your donated food</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        request.map(food =>  <tr>
            <td>
              <div className="flex items-center gap-3">
                
                <div>
                  <div className="font-bold">{food?.donnarName}</div>
                  <div className="text-sm opacity-50">{food?.donnarEmail}</div>
                </div>
              </div>
            </td>
            <td>
              exp: {food?.expiredDate}
              <br/>
              <span className="badge badge-ghost badge-sm">req:{food?.requestedDate}</span>
            </td>
            <td>{food?.pickupLocation?.properties.municipality ? food?.pickupLocation?.properties.municipality : food?.pickupLocation?.properties.city }</td>
            <td>{donate.length}</td>
            <th>
              <Link to={`/details/${food.foodId}`} className="btn btn-ghost btn-xs">details</Link>
            </th>
          </tr>)
      }
      
     
 
      {/* row 4 */}
 
    </tbody>
    

    
  </table>
</div>
        </div>
    );
};

export default MyRequestedFood;