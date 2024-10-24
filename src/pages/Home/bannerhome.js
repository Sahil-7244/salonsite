import FadeInUp from "../../For trigger Animation/animation";

export default function Bannerhome(){
    return(
        <>
            <section class="hero-wrap js-fullheight" style={{backgroundImage: "url(images/bg-2.jpg)"}} data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                        <FadeInUp classname="col-lg-12 ftco-animate d-flex align-items-center">
                            <div class="text text-center">
                                <span class="subheading">Welcome to Haircare</span>
                                <h1 class="mb-4">We are professional care for your hair</h1>
                                <p><a href="#booking" class="btn btn-primary btn-outline-primary px-4 py-2">Book now</a></p>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}