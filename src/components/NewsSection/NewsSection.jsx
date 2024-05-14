import { motion } from "framer-motion"

const NewsSection = () => {
    return (
        
<div className="container my-24 mx-auto md:px-6">
  
  <section className="mb-32 text-center md:text-left">
    <h2 className="mb-12 text-center text-3xl font-bold">Latest articles</h2>

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:mb-0">
        <motion.div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light" whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <img src="https://i.postimg.cc/VkgXJBq5/ray-sangga-kusuma-7u-Sr-Oy-Y1-U0-I-unsplash.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </motion.div>
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold">Your Impact in Action: Transforming Lives Through Food Donations</h3>
        <div
          className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
          
          news
        </div>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>13.01.2022</u> by
            <a href="#!">Anna Maria Doe</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
        Your generosity knows no bounds, and its impact is tangible. Through your support, we've been able to provide vital nourishment to families facing hunger in our community. Your donations aren't just meals; they're lifelines, offering hope and sustenance to those in need. Thank you for being a beacon of compassion and making a difference in the lives of others.
        </p>
      </div>
    </div>

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:order-2 md:mb-0">
        <motion.div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://i.postimg.cc/PrtxCG2z/pexels-tkirkgoz-6016495.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </motion.div>
      </div>

      <div className="md:order-1">
        <h3 className="mb-3 text-2xl font-bold">Empowering Change: The Power of Food Donations</h3>
        <div
          className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
          
          Impact
        </div>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>12.01.2022</u> by
            <a href="#!">Halley Frank</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
        Food donations aren't just about feeding the hungry; they're about empowering individuals and communities to create lasting change. With your contributions, we're not only providing meals but also fostering resilience and building brighter futures. Together, we're breaking the cycle of hunger and paving the way for a stronger, more vibrant community.
        </p>
      </div>
    </div>

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:mb-0">
        <motion.div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://i.postimg.cc/QdKH3QfR/pexels-nicollazzi-xiong-208366-668353.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </motion.div>
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold">"Celebrating Milestones: A Year of Impact"</h3>
        <div className="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
          
          1 year celebration !!
        </div>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>10.01.2022</u> by
            <a href="#!">Joe Svan</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
        As we look back on the past year, we're filled with gratitude for the incredible impact your support has made possible. From reaching new milestones in donations to expanding our reach within the community, every achievement is a testament to the power of collective action. Thank you for standing with us as we continue our mission to end hunger and build a better world for all.
        </p>
      </div>
    </div>
  </section>
  
</div>

    );
};

export default NewsSection;