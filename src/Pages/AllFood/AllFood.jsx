import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [items, setItems] = useState([])
    useEffect(()=>{
       axios.get('http://localhost:5000/allFood')
       .then(data => {
        // setItems(data.data)
        setFoods(data.data)
        //creating a new array 
        const newArray = data.data.map(obj =>{
            return {
                id: obj._id,
                name: obj.itemName
            }
        })

        setItems(newArray)
    
    
    }
    
    
    )
    },[])
    // console.log(items)

    //react search auto suggestion intrigation
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }

      const handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
      }

      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }

      const handleOnFocus = () => {
        // console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
          </>
        )
      }
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="" style={{ width: "50%" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
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