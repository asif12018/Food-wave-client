/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const MangeFood = () => {
  //context api data
  const { user } = useContext(AuthContext);
  const [myFood, setMyFood] = useState([]);
  const [locations, setLocations] = useState(null)
  const [myFoodId, setMyFoodId] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:5000/userAllFood/${user?.email}`)
      .then(data => {
        setMyFood(data.data)
      })
  }, [user])
  // console.log(myFood._id)
  //auto location function
  useEffect(() => {
    const autocomplete = new GeocoderAutocomplete(
      document.getElementById("autocomplete"),
      'b248bfbcefa94d508f1d7a0dbea89df4',
      { /* Geocoder options */ }
    );

    autocomplete.on('select', (location) => {
      // Handle selected location
      console.log("Selected location:", location);
      setLocations(location)
    });

    autocomplete.on('suggestions', (suggestions) => {
      // Handle suggestions
      console.log("Suggestions:", suggestions);
    });


    return () => {
      autocomplete.off('select');
      autocomplete.off('suggestions');
    };
  }, []);
  //update food function
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const quantity = form.quantity.value;
    const expired = form.expired.value;
    const donnarLocations = locations;
    const foodId = myFoodId;
    const photo = form.photo.value;
    const notes = form.notes.value;
    const updateForm = {itemName, quantity, expired, donnarLocations, photo, foodId, notes}
    // console.log(updateForm)
    // console.log(myFoodId);
    //update function
    axios.patch(`http://localhost:5000/update/${myFoodId}`, updateForm)
     .then(response =>{
        console.log(response.data)
        document.getElementById('my_modal_1').close()
        //sweet alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your food is updated",
          showConfirmButton: false,
          timer: 1500
        });
     })
     .catch(error=>{
       console.error('error from managefood', error)
     })
    // document.getElementById('my_modal_1').close()
    

  }
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
              myFood?.map(food => <tr>
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
                <td>
  <button onClick={() => {
    document.getElementById('my_modal_1').showModal();
    setMyFoodId(food._id);
  }} className="btn bg-green-400 text-white">Update</button>
</td>

                <th>
                  <Link to={`/details/${food._id}`} className="btn btn-ghost btn-xs">details</Link>
                </th>
              </tr>)
            }


          </tbody>
          {/* foot */}


        </table>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box ">

            <div className="modal-action w-full">

              <form onSubmit={handleUpdate} method="dialog " className='max-w-sm mx-auto'>
                <h3 className='text-2xl font-semibold'>Food Update Form</h3>
                <div className='mb-5'>
                  {/* <img src={photo} alt="" /> */}
                </div>
                <div className="mb-5">
                  <label for="itemName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">food name</label>
                  <input type="text" id="itemName" name='itemName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                </div>
                <div className="mb-5">
                  <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">food quantity</label>
                  <input type="text" id="quantity" name='quantity' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                </div>
                <div className="mb-5">
                  <label for="expired" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">expired date</label>
                  <input type="date" id="expired" name='expired' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                </div>

                <div className="mb-5">
                  <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">food status</label>
                  <input defaultValue={'available'} type="text" id="status" name='status' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                </div>
                <div className="mb-5">
                  <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">food photo</label>
                  <input  type="text" id="photo" name='photo' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                </div>
                <div className="mb-5">
                  <label for="notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Food Notes Here</label>
                  <input  type="text" id="note" name='notes' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="enter your notes here" />
                </div>
               

           
                

                <div className="location-holder mb-5">
                  <div id="autocomplete" className="autocomplete-container relative w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"></div>
                </div>


                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                  </div>
                  <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                {/* if there is a button in form, it will close the modal */}
                <button type='submit' className="submit btn">submit</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MangeFood;