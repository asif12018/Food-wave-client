import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const FeatureFood = () => {
    const [foods, setFoods] = useState([])
    const [featuredFood, setFeaturedFood] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/allFood')
        .then(data => {
            setFoods(data.data);
            //filtering food with highest quantity
            const maxFood = Math.max(...data.data.map(food => food.quantity));
            const filteredFeaturedFood = data.data.filter(food => food.quantity == maxFood);
            setFeaturedFood(filteredFeaturedFood);
        })
    },[])

    return (
        <div className="my-10">
            <h3 className="text-4xl font-bold text-center">Feature Foods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 my-10">
                {
                    featuredFood.map(food => <Cards key={food._id} food={food}></Cards>)
                }
            </div>
            <div className="flex justify-center">
                <Link className="btn">Show All Food</Link>
            </div>
        </div>
    );
};

export default FeatureFood;