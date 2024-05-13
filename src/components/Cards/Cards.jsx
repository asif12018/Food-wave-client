import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ food }) => {
    
    const { photo, itemName, notes, expired, donnarName, donnarLocation, quantity, status, email, _id , donnarImage} = food

    return (
        <div className="  bg-base-100 shadow-xl">
            <div className='max-h-[800px] py-5'>
            <figure className='border-2 flex justify-center'><img className='h-[300px] ' src={photo} alt="food" /></figure>
            <div className="card-body">
                <h2 className="card-title">Food Name: {itemName}</h2>
                <p> <span className='font-bold'>Note:</span> {notes}</p>
                <p><span className='font-bold'>Pickup location:</span>{donnarLocation?.properties.municipality ? donnarLocation?.properties.municipality : donnarLocation?.properties.city }</p>
                <p><span className='font-bold'>Expired Data:</span> {expired}</p>
                <p><span className='font-bold'>Quantity:</span> {quantity}</p>
                <p className='font-bold text-green-400'><span className='text-black'>Status:</span>{status}</p>
                
            </div>
                <div className='card-body my-0 py-0'>
                <div>
                    <div className="flex-shrink-0 group block ">
                        <div className="flex items-center">
                            <img className="inline-block flex-shrink-0 size-[62px] rounded-full" src={donnarImage} alt="Image Description"/>
                                <div className="ms-3">
                                    <h3 className="font-semibold text-gray-800">{donnarName}</h3>
                                    <p className="text-sm font-medium text-gray-400">donnar details</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col    ">
                    <Link to={`/details/${_id}`} className="btn bg-[#95d230] font-bold text-white">View Details</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;