import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    const [showBanner, setShowBanner] = useState(true);
    return (
        <div>
            {
                showBanner && <Banner></Banner>
            }
        </div>
    );
};

export default Home;