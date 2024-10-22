import Header from "../Common comp/header";
import Bannerhome from "./bannerhome";
import Booking from "../Common comp/booking";
import Services from "../Common comp/services";
import Team from "../Common comp/team";
import Welcome from "../Common comp/welcome";
import Gallery from "../Common comp/gallerycomp";
import Pricing from "../Common comp/pricing";
import Testimonial from "../Common comp/testimonial";
import Footer from "../Common comp/Footer";
import './stackanimate.css';

export default function Home(){
    return(
        <>
            <Header />
            <Bannerhome />
            <Welcome />
            <Services />
            <Booking />
            <Team />
            <Gallery />
            <Pricing />
            <Testimonial />
            <Footer />
        </>
    );
}