import React from 'react';

const Cards = ({ food }) => {
    const { photo, itemName, notes, expired, donnarName, donnarLocation, quantity, status, email, _id } = food

    return (
        <div className="  bg-base-100 shadow-xl">
            <figure><img className='h-[300px]' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Food Name: {itemName}</h2>
                <p> <span className='font-bold'>Note:</span> {notes}</p>
                <p><span className='font-bold'>Pickup location:</span> {donnarLocation.properties.municipality}</p>
                <p><span className='font-bold'>Expired Data:</span> {expired}</p>
                <p><span className='font-bold'>Quantity:</span> {quantity}</p>
                <p className='font-bold text-green-400'><span className='text-black'>Status:</span>{status}</p>
                <p className='font-bold'>Donar Name and image</p>
                <div>
                    <div className="flex-shrink-0 group block">
                        <div className="flex items-center">
                            <img className="inline-block flex-shrink-0 size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                                <div className="ms-3">
                                    <h3 className="font-semibold text-gray-800">Mark Wanner</h3>
                                    <p className="text-sm font-medium text-gray-400">mark@gmail.com</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;