import Footer from "../Common comp/Footer";
import Header from "../Common comp/header";
import Pricing from "../Common comp/pricing";
import Team from "../Common comp/team";
import Testimonial from "../Common comp/testimonial";
import Welcome from "../Common comp/welcome";
import Bannerabout from "./bannerabout";
import Salonvideo from "./salonvideo";

export default function About(){
    return(
        <>
            <Header />
            <Bannerabout />
            <Salonvideo />
            <Welcome />
            <Team />
            <Pricing />
            <Testimonial />
            <Footer />
        </>
    );
}