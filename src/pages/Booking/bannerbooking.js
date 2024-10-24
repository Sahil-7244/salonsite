
import FadeInUp from "../../For trigger Animation/animation";

export default function Bannerbooking(){
    return(
        <>
            <section class="hero-wrap hero-wrap-2" style={{backgroundImage: "url('images/bg-1.jpg')"}} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <FadeInUp classname="col-md-9 ftco-animate pb-5 text-center">
                            <h2 class="mb-0 bread">Booking</h2>
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-round-forward"></i></a></span> <span>Booking <i class="ion-ios-arrow-round-forward"></i></span></p>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}