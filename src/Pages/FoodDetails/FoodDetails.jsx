import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const FoodDetails = () => {
    const { id } = useParams();
    const [showmap, setShowmap] = useState(false);
    const [food, setFood] = useState({});
    const { photo, itemName, notes, expired, donnarName, donnarLocation, quantity, status, email, _id , donnarImage}  = food;
    const position = [donnarLocation?.properties.lat, donnarLocation?.properties.lon]
    useEffect(() => {
        axios.get(`http://localhost:5000/details/${id}`)
            .then(response => {
                setFood(response.data); 
                setTimeout(()=>{
                    setShowmap(true)
                },100)
            })
           
    }, [id]); 
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
				<p><span className='font-semibold'>Status:</span>{status}</p>
                <p><span className='font-bold'>Pickup location:</span> {donnarLocation?.properties.municipality ? donnarLocation?.properties.municipality : donnarLocation?.properties.city }</p>
			</div>
		</a>
	

	</div>
    <div className='container mx-auto '>
        <h2 className='text-3xl font-bold my-6'>Map view:</h2>
        <div id='map' className='w-auto my-map-container'>
           
        {
                                showmap &&  <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px' }}>
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
