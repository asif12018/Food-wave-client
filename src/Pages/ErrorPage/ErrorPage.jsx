import { Helmet, HelmetProvider } from "react-helmet-async";

const ErrorPage = () => {
    return (
      <HelmetProvider>
        <div className="flex items-center justify-center  bg-white py-48">
          <Helmet>
            <title>404 Error</title>
          </Helmet>
      <div className="flex flex-col">
        

        {/* Error Container */}
        <div className="flex flex-col items-center">
          <div className="text-primary font-bold text-7xl">404</div>
          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>
          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        {/* Continue With */}
        <div className="flex flex-col mt-48">
          <div className="text-gray-400 font-bold uppercase">Continue With</div>
          <div className="flex flex-col items-stretch mt-5">
            {/* Nav Item #1 */}
            <a // Use <a> for links in React 
               href="/" // Add the actual link destination
               className="flex flex-row group px-4 py-8 border-t 
                          hover:cursor-pointer transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i className="mdi mdi-home-outline mx-auto 
                           text-indigo-900 text-2xl md:text-3xl"></i>
              </div>
              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                  Home Page
                </div>
                <div className="font-semibold text-sm md:text-md lg:text-lg
                             text-gray-400 group-hover:text-gray-500
                             transition-all duration-200 delay-100">
                  Everything starts here
                </div>
              </div>
              <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                         group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
            </a>

            {/* Other Nav Items - Follow the same pattern */}
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
    );
};

export default ErrorPage;