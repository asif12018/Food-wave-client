import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards/Cards";

const AllFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
       axios.get('http://localhost:5000/allFood')
       .then(data => setFoods(data.data))
    },[])
    return (
        <div className="max-w-[1400px] mx-auto">
            <h3 className="text-2xl font-bold">Total Available Food:{foods.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {
                    foods.map(food => <Cards key={food._id} food={food}></Cards>)
                 }
            </div> 
        </div>
    );
};

export default AllFood;