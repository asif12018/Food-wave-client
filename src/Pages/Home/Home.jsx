
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import FeatureFood from "../../components/FeatureFood/FeatureFood";
import NewsSection from "../../components/NewsSection/NewsSection";
import Contact from "../../components/Contact/Contact";


const Home = () => {
    
    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>FoodWave | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeatureFood></FeatureFood>
            <NewsSection></NewsSection>
            <Contact></Contact>
        </div>
        </HelmetProvider>
    );
};

export default Home;