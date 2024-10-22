import Footer from "../Common comp/Footer";
import Booking from "../Common comp/booking";
import Header from "../Common comp/header";
import Bannerbooking from "./bannerbooking";

export default function Bookingpage(){
    return(
        <>
            <Header />
            <Bannerbooking />
            <Booking />
            <Footer />
        </>
    );
}