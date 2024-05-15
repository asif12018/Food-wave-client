import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const FeatureFood = () => {
    const [foods, setFoods] = useState([]);
    const [featuredFood, setFeaturedFood] = useState([]);

    useEffect(()=>{
        axios.get('https://food-wave-server-steel.vercel.app/allfood')
        .then(response => {
            const data = response.data;
            console.log("Backend response:", data); // Log backend response
            setFoods(data);
            
            //filtering food with highest quantity
            const quantities = data.map(food => food.quantity);
            console.log("Quantities:", quantities); // Log quantities
            const maxFood = Math.max(...quantities);
            console.log("Max Quantity:", maxFood); // Log max quantity
            const filteredFeaturedFood = data.filter(food => food.quantity == maxFood);
            console.log("Filtered Featured Food:", filteredFeaturedFood); // Log filtered featured food
            setFeaturedFood(filteredFeaturedFood);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    },[]);
    
    
    return (
        <div className="my-10">
            <h3 className="text-4xl font-bold text-center">Feature Foods</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 my-10">
                {
                    featuredFood.map(food => <Cards key={food._id} food={food}></Cards>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={'/available'} className="btn">Show All Food</Link>
            </div>
        </div>
    );
};

export default FeatureFood;
