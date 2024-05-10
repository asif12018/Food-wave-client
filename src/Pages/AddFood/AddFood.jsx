import { useContext } from "react";
import  { useEffect, useState } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './AddFood.css'


const Addproduct = () => {
    //auto location code start from here
    const [locations, setLocations] = useState(null)
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
  
      // Clean up event listeners when component unmounts
      return () => {
        autocomplete.off('select');
        autocomplete.off('suggestions');
      };
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
    





    //----------------------------//
     // context api data
     const {user} = useContext(AuthContext);
     

    //add item function
    const handleAddItems = e => {
        
        e.preventDefault();
        const form = e.target;
        const itemName = form.item_name.value;
        const photo = form.photo.value;
        const notes = form.notes.value;
        const quantity = form.quantity.value;
        const expired = form.expired.value;
        const stock = form.stock.value;
        const email = user.email;
        const donnarName = user.displayName;
        const donnarLocation = locations;
        const donnarImage = user?.photoURL;
        
        const itemData = {donnarName, photo, notes, quantity,  expired, stock, itemName, email, donnarLocation, donnarImage}
        console.log(itemData);
        // fetch(`https://artifex-server-site.vercel.app/`,{
        //     method: 'POST',
        //     headers:{
        //         'content-type':'application/json'
        // },
        //    body: JSON.stringify(itemData)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     Swal.fire({
        //         title: 'Success!',
        //         text: 'Product added successfully',
        //         icon: 'success',
        //         confirmButtonText: 'okk'
        //       })
        //       form.reset();
        //     console.log(data)})
    }
    return (
        <div>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <a href="#" className="text-2xl font-bold text-gray-800">Donate Food!</a>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </a>
                                <span className="font-semibold text-gray-900">login</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                                <span className="font-semibold text-gray-900">provide details</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                                <span className="font-semibold text-gray-500">confirm</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Donate Summary</p>
                    <p className="text-gray-400">Please complete this form carefully.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://i.postimg.cc/C12gYkRF/photorealistic-kid-refugee-camp.jpg" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Check out our non-profitable campaign</span>
                                <span className="float-right text-gray-400">status: tranding!</span>

                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://i.postimg.cc/CLqmckYj/hopeless-refugee-refugee-camp.jpg" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">checkout the latest compaign</span>
                                <span className="float-right text-gray-400">status: new</span>

                            </div>
                        </div>
                    </div>



                </div>
                <form onSubmit={handleAddItems } className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Add Item Details</p>
                    <p className="text-gray-400">Complete this form to add items</p>
                    <div className="">
                        <label className="mt-4 mb-2 block text-sm font-medium">Food name</label>
                        <div className="relative">
                            <input type="text" name="item_name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the item name" required/>
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                            </div>
                        </div>
                        <label className="mt-4 mb-2 block text-sm font-medium">Food image url</label>
                        <div className="relative">
                            <input type="text" name="photo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the image url" required/>

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">Additional notes</label>
                        <div className="relative">
                            <input type="text" name="notes" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the subcategory_name" required/>

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">Enter the Quantity</label>
                        <div className="relative">
                            <input type="text" name="quantity" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the subcategory_name" required/>

                        </div>

                        



                        <label className="mt-4 mb-2 block text-sm font-medium">Expired date</label>
                        <div className="relative">
                            <input type="text" name="expired" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the process time" required/>

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">stock status</label>
                        <div className="relative">
                            <input type="text" name="stock" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the stock status" required/>

                        </div>


                        <label className="mt-4 mb-2 block text-sm font-medium">Search your location and selected the location from suggestion list</label>
                         
                        <div className="location-holder mb-[20px]">
                        <div id="autocomplete" className="autocomplete-container relative w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"></div>
                        </div>



                        







                        {/* Total */}


                    </div>
                    <button type="submit" className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Add Food To Donate List</button>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;