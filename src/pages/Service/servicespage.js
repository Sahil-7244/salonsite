import Footer from "../Common comp/Footer";
import Booking from "../Common comp/booking";
import Header from "../Common comp/header";
import Pricing from "../Common comp/pricing";
import Services from "../Common comp/services";
import Bannerservice from "./Bannerservice";

export default function Servicepage(){
    return(
        <>
            <Header />
            <Bannerservice />
            <Services />
            <Booking />
            <Pricing />
            <Footer />
        </>
    );
}