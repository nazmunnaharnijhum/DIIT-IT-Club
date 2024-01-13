import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import President from "../President/President";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>DIIT IT Club | Home</title>
      </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <Gallery></Gallery>
            <President></President>
        </div>
    );
};

export default Home;