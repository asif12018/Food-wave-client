import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';

import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';
import { ImCross } from "react-icons/im";

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 }
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
// };
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const NavBar = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true)

  //set state base on the screen size

  useEffect(() => {
    //setting the media query value min-width
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    // function to set state based on the screen size
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Add event listener for media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Set the initial state based on the media query
    handleMediaQueryChange(mediaQuery);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  
  const { user, userLogout } = useContext(AuthContext)
  //user logout function
  const handleLogout = () => {
    userLogout()
      .then(() => {
        // Sign-out successful.
        console.log('logout successfull')
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  
  
  return (

    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 max-w-[1400px] mx-auto">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto" aria-label="Global">
        <div className="md:col-span-3 flex items-center">

          <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
            <img className="h-[50px]" src="https://i.postimg.cc/28fFSZJR/logo.png" alt="" />

          </a>
          <h2 className="flex-none rounded-xl text-xl inline-block font-bold focus:outline-none focus:opacity-80">foodWave</h2>

        </div>


        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          {/* <Link to={'/register'} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
            Sign up
          </Link>
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
            Hire us
          </button> */}

          {
            user ? <>
              <div className="relative inline-block">
                <img className="inline-block size-[38px] rounded-lg" src={user?.photoURL} alt="Image Description"/>
                  <span className="absolute top-0 end-0 block size-2.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400 dark:ring-neutral-900"></span>
              </div>
              <button onClick={handleLogout} to={'/register'} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
             logout
          </button>

            </> : <Link to={'/login'} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
            log in
          </Link>
      }

          <div className="md:hidden">
            <button onClick={()=>{setHidden(!hidden)
              setIsOpen(!isOpen)
            }}  type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse={hidden && "#navbar-collapse-with-animation"} 
            aria-controls={hidden && "navbar-collapse-with-animation"} 
            aria-label={hidden && "Toggle navigation"}>
              {
                hidden ? 
                <RxHamburgerMenu />
                : <ImCross />
              }
              
              
            </button>
          </div>
        </div>



        <motion.div animate={isOpen ? "open" : "closed"}
      variants={variants} id="navbar-collapse-with-animation" className={hidden ? "hs-collapse hidden  overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6": "hs-collapse  overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"} >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-4 md:mt-0 nav-holder">

            <NavLink to={'/'} className="inline-block text-black hover:text-gray-600 text-sm" aria-current="page">Home</NavLink>




            


            <NavLink to={'/addFood'} className="inline-block text-black hover:text-gray-600 text-sm" >Add Food</NavLink>

            <NavLink to={'/available'} 
            className='inline-block text-black hover:text-gray-600'
            >Available Foods</NavLink>


            <NavLink to={'/allFood'} className="inline-block text-black hover:text-gray-600 text-sm" >All Food</NavLink>


            <NavLink to={'/register'} className="inline-block text-black hover:text-gray-600 text-sm" >Register</NavLink>

            <NavLink to={'/manageAll'} className="inline-block text-black hover:text-gray-600 text-sm" >manage food</NavLink>


            <NavLink to={'/myRequest'} className="inline-block text-black hover:text-gray-600 text-sm" >My Food Request</NavLink>
             
            
          </div>
        </motion.div>

      </nav>
    </header>

  );
};

export default NavBar;