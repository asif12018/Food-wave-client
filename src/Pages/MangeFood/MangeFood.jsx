/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";


const MangeFood = () => {
    //context api data
    const {user} = useContext(AuthContext);
    const [myFood, setMyFood] = useState([]);
    useEffect(()=>{
       axios.get(`http://localhost:5000/userAllFood/${user?.email}`)
        .then(data =>{
             setMyFood(data.data)
        })
    },[user])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Photo</th>
        <th>Delete</th>
        <th>Update</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        myFood?.map(food =>  <tr>
            <th>
            
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={food?.photo} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{food.itemName}</div>
                  <div className="text-sm opacity-50">exp:{food.expired}</div>
                </div>
              </div>
            </td>
            <td>
              <button className="btn bg-red-500 text-white">delete</button>
            </td>
            <td><button className="btn bg-green-400 text-white">Update</button></td>
            <th>
              <Link to={`/details/${food._id}`} className="btn btn-ghost btn-xs">details</Link>
            </th>
          </tr>)
     }
     
 
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
        </div>
    );
};

export default MangeFood;