import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { AuthContext } from './../../AuthProvider/AuthProvider';
import moment from 'moment/moment';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const FoodDetails = () => {
    //checking is this user food
    const [isUser, setIsUser] = useState(false);
    const [requested, setRequested] = useState(false);
    //context api data
    const {user} = useContext(AuthContext);
    // console.log(user.email);
    const { id } = useParams();
    const [showmap, setShowmap] = useState(false);
    const [food, setFood] = useState({});
    const { photo, itemName, notes, expired, donnarName, donnarLocation, quantity, status, email, _id, donnarImage } = food;
    const position = [donnarLocation?.properties.lat, donnarLocation?.properties.lon]
    useEffect(() => {
        axios.get(`http://localhost:5000/details/${id}`)
            .then(response => {
                setFood(response.data);
                setTimeout(() => {
                    setShowmap(true)
                }, 100)
                //checking is the user is food donnar
                if(response.data.email == user.email){
                    console.log('user is the donnar')
                    setIsUser(true);
                }
            })

    }, [id]);
    

    //send request for food function
    const handleSentRequest = e =>{
           e.preventDefault();
           const form = e.target;
           const donnarName = form.donnarName.value;
           const donnarEmail = form.donnarEmail.value;
           const foodName = form.foodName.value;
           const foodId = form.foodId.value;
           const requesterName = form.requesterName.value;
           const requesterEmail = form.requesterEmail.value;
           const requestedDate = form.requestedDate.value;
           const expiredDate = form.expiredDate.value;
           const requesterNote = form.requesterNote.value;
           const pickupLocation = donnarLocation;
        //    console.log('donnar name:', donnarName,
        //     'donnar email', donnarEmail,
        //     'foodName', foodName,
        //     'foodId', foodId,
        //     'requesterName', requesterName,
        //     'requesterDate', requestedDate,
        //     'expiredDate', expiredDate,
        //     'requesterNote', requesterNote
        //    )
           const requesterData = {donnarName, donnarEmail, foodName, foodId, requesterName, requesterEmail, requestedDate, expiredDate, requesterNote, pickupLocation}
        //    console.log(requesterData);
        //    console.log('requester Email:', requesterEmail)
           //sending data to the post
           axios.post('http://localhost:5000/request/',requesterData)
           .then(data =>{
              console.log(data.data)
              const modal = document.getElementById('my_modal_1');
              setRequested(true);
              modal.close();
           })
         
    }
    //checking if the user requested that food
    useEffect(() => {
        if (!_id) return; // Guard against undefined _id
        axios.get(`http://localhost:5000/request/${user.email}?foodId=${_id}`)
            .then(data => {
                console.log(data.data.requesterName);
                if(data.data.requesterName){
                    setRequested(true);
                }
                
            })
    }, [food]);
    // console.log('location', donnarLocation.properties.lat)
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Food and Donar Details:</h3>
                            <p><span className='font-semibold'>Note:</span>{notes}</p>
                            <p><span className='font-semibold'>Food Name:</span>{itemName}</p>
                            <p><span className='font-semibold'>Food Quantity:</span>{quantity}</p>
                            <p><span className='font-semibold'>Expired Date:</span>{expired}</p>
                            {
                                requested ? <p><span className='font-semibold'>Status:</span>requested</p> : <p><span className='font-semibold'>Status:</span>{status}</p>
                            }
                            <p><span className='font-bold'>Pickup location:</span> {donnarLocation?.properties.municipality ? donnarLocation?.properties.municipality : donnarLocation?.properties.city}</p>
                            {/*--- requested food modal---*/}
                            <div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                {
                                    isUser ? <button className='btn btn-error' disabled>You can't request your own food</button> : <button disabled={requested == true} className="btn bg-[#95d230] text-white font-semibold" onClick={() => document.getElementById('my_modal_1').showModal()}>{requested ? 'you have already requested the food' : 'request the food'}</button>
                                }
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box ">
                                        
                                        <div className="modal-action w-full">
                                            
                                            <form onSubmit={handleSentRequest} method="dialog " className='max-w-sm mx-auto'>
                                            <h3 className='text-2xl font-semibold'>Food request Form</h3>
                                                <div className='mb-5'>
                                                   <img src={photo} alt="" />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="donnarName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donnar Name</label>
                                                    <input defaultValue={donnarName} type="text" id="donnarName" name='donnarName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="donnarEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donnar Email</label>
                                                    <input defaultValue={email} type="text" id="donnarEmail" name='donnarEmail' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="foodName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                                                    <input defaultValue={itemName} type="text" id="foodName" name='foodName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="foodId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Id</label>
                                                    <input defaultValue={_id} type="text" id="foodId" name='foodId' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="requesterName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Name</label>
                                                    <input defaultValue={user?.displayName} type="text" id="requesterName" name='requesterName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="requesterEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Email</label>
                                                    <input defaultValue={user?.email} type="text" id="requesterEmail" name='requesterEmail' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                            
                                                <div className="mb-5">
                                                    <label for="requestedDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requested Date</label>
                                                    <input defaultValue={moment().format('l')} type="text" id="requestedDate" name='requestedDate' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                {/* <div className="mb-5">
                                                    <label for="expiredDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired date</label>
                                                    <input defaultValue={expired} type="text" id="expire" name='expiredDate' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div> */}
                                                <div className="mb-5">
                                                    <label for="expiredDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired date</label>
                                                    <input defaultValue={expired} type="text" id="expire" name='expiredDate' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" readOnly />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="requesterNote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requester Note</label>
                                                    <textarea  type="text" id="requesterNote" name='requesterNote' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="enter your note here" required />
                                                </div>
                                                {/* <div className="mb-5">
                                                    <label for="pickupLocation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                                                    <textarea  type="text" id="pickupLocation" name='pickupLocation' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="enter your note here" required />
                                                </div> */}
                                               
                                               
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
                    </a>
                    <div className="flex-shrink-0 group block ">
                        <div className="flex items-center">
                            <img className="inline-block flex-shrink-0 size-[62px] rounded-full" src={donnarImage} alt="Image Description" />
                            <div className="ms-3">
                                <h3 className="font-semibold text-gray-800">{donnarName}</h3>
                                <p className="text-sm font-medium text-gray-400">donnar details</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container mx-auto '>
                    <h2 className='text-3xl font-bold my-6'>Map view:</h2>
                    <div id='map' className='w-auto my-map-container'>

                        {
                            showmap && <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        }

                    </div>
                </div>
            </section>

        </div>
    );
};

export default FoodDetails;
