import Footer from "../Common comp/Footer";
import Header from "../Common comp/header";
import Bannercontact from "./Bannercontact";
import Address from "./address";
import Map from "./map";

export default function Contactus(){
    return(
        <>
            <Header />
            <Bannercontact />
            <Address />
            <Map />
            <Footer />
        </>
    );
}