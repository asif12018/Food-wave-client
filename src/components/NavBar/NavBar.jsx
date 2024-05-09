import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        
<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
  <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto" aria-label="Global">
    <div className="md:col-span-3 flex items-center">
      
      <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
        <img className="h-[50px]" src="https://i.postimg.cc/28fFSZJR/logo.png" alt="" />
        
      </a>
      <h2 className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80">foodWave</h2>
      
    </div>

    
    <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
        Sign in
      </button>
      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
        Hire us
      </button>

      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    

    
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0 nav-holder">
        
         <NavLink to={'/'} className="inline-block text-black hover:text-gray-600"  aria-current="page">Work</NavLink>

        
        
          <NavLink to={'/about'} className="inline-block text-black hover:text-gray-600" >Services</NavLink>

          <NavLink>Home</NavLink>
        
        
          <NavLink to={'/about'} className="inline-block text-black hover:text-gray-600" >About</NavLink>
        
        
          <NavLink to={'/dfdff'} className="inline-block text-black hover:text-gray-600" >Careers</NavLink>
        
        
          <NavLink to={'/fdfdfdfdf'} className="inline-block text-black hover:text-gray-600" >Blog</NavLink>
        
      </div>
    </div>
    
  </nav>
</header>

    );
};

export default NavBar;