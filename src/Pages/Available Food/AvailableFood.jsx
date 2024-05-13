import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Hero from "../../components/Hero/Hero";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const AvailableFood = () => {
  
  const [foods, setFoods] = useState([])
  const [items, setItems] = useState([])
  const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/allFood?status=${'available'}`)
      .then(data => {
        // setItems(data.data)
        setFoods(data.data);
        setAllFood(data.data);
        //creating a new array 
        const newArray = data.data.map(obj => {
          return {
            id: obj._id,
            name: obj.itemName
          }
        })

        setItems(newArray)
      }

      )
  }, [])
  console.log(foods)
  //tanstack query
  


  // console.log(items)

  //food filtering function
  const handleSearch = (name) => {
    console.log('this is name:', name)
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
        <Hero></Hero>
      <div className="flex w-full  justify-between mb-[20px]">
      <div className="w-1/2 " style={{ width: "50%" }}>
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
      <div className="w-1/2">
        
          
          <div >
          <Menu >
  <MenuButton
    px={4}
    py={2}
    background={'black'}
    textColor={'white'}
    fontWeight={'semibold'}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
  >
    <span className="flex items-center justify-between">Filter By Expired Date <IoIosArrowDown /></span>
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=> handleShort('all')}>All food</MenuItem>
    <MenuItem onClick={()=>handleShort('new')}>new to old</MenuItem>
    <MenuDivider />
    <MenuItem onClick={()=> handleShort('old')}>old to new</MenuItem>
    
  </MenuList>
</Menu>
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

export default AvailableFood;