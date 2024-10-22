import Footer from "../Common comp/Footer";
import Gallery from "../Common comp/gallerycomp";
import Header from "../Common comp/header";
import Bannergallery from "./bannergallary";

export default function Gallerypage(){
    return(
        <>
            <Header />
            <Bannergallery />
            <Gallery />
            <Footer />
        </>
    );
}