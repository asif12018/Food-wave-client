import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [items, setItems] = useState([])
    const [allFood, setAllFood] = useState([]);
    useEffect(()=>{
       axios.get('http://localhost:5000/allFood')
       .then(data => {
        // setItems(data.data)
        setFoods(data.data);
        setAllFood(data.data);
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

    //food filtering function
    const handleSearch = (name) =>{
        console.log('this is name:',name)
        axios.get(`http://localhost:5000/filter?name=${name}`)
        .then(data => setFoods(data.data))
    }

    //react search auto suggestion intrigation
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
      }

      const handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
      }

      const handleOnSelect = (item) => {
        // the item selected
        console.log(item.name)
        handleSearch(item.name)
      }

      const handleOnFocus = () => {
        // console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
            {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }

      //shorting function
  const handleShort = (data) => {
    if (data === 'all') {
        setFoods(allFood);
    } else if (data === 'new') {
        const filterFood = allFood.slice().sort((a, b) => new Date(a.expired) - new Date(b.expired));
        setFoods(filterFood);
    } else if (data === 'old') {
        const filterFood = allFood.slice().sort((a, b) => new Date(b.expired) - new Date(a.expired));
        setFoods(filterFood);
    }
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
          <div>
          <div className="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
    Filter By Expired Date
    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
    <a onClick={()=>handleShort('all')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      All
    </a>
    <a onClick={()=>handleShort('new')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      New to Old
    </a>
    <a onClick={()=>handleShort('old')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      Old to new
    </a>
    
  </div>
</div>
          </div>
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