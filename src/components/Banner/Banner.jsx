import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  
    return (
        
          <Fade>
          <div className="carousel w-full min-h-[600px] my-5 animate__animated animate__zoomIn">
        <div id="slide1" className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/sft4zhXw/Adobe-Stock-245229115.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center" style={{backgroundColor:'#3C5B6F66', zIndex:'10'}}>
        <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold text-white">Giving Back: Providing Meals
        <Typewriter
    words={[' for those in need']}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    loop={true}
/>
         </h1>
          <p className="text-white text-[10px] md:text-[15px] lg:text-lg">Join our mission to nourish those in need.

</p>
          <a href="#state" className="btn">Expore more</a>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/CLqmckYj/hopeless-refugee-refugee-camp.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center">
        <h1 className="text-xl md:text-4xl  font-bold text-white">Empower Change: Support Our  <Typewriter
    words={[' Empower Change: Support Our']}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    loop={true}
/></h1>
          <p className="text-white text-[10px] md:text-lg">Join us in the fight against hunger.
</p>
          <a href="#state" className="btn">Expore more</a>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3"  className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/C12gYkRF/photorealistic-kid-refugee-camp.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center">
        <h1 className="text-xl md:text-4xl  font-bold text-white">No Child Should Know Hunger:  <Typewriter
    words={[' Donate Today..']}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    loop={true}
/></h1>
          <p className="text-white text-[10px] md:text-lg">Ending hunger starts with you.</p>
          <a href="#state" className="btn">Expore more</a>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/tCny1L99/tim-marshall-c-Atz-HUz7-Z8g-unsplash.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center">
          
        <h1 className="text-xl md:text-4xl  font-bold text-white">Giving Back: Providing Meals  <Typewriter
    words={[' for those in need']}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    loop={true}
/></h1>
          <p className="text-white text-[10px] md:text-lg">Join our mission to nourish those in need.
</p>
          <button className="btn">Expore more</button>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
        </Fade>
        
    );
};

export default Banner;