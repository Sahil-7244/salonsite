import FadeInUp from "../../For trigger Animation/animation";

export default function Bannerhome(){
    return(
        <>
            <section className="hero-wrap js-fullheight" style={{backgroundImage: "url(images/bg-2.jpg)"}} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                        <FadeInUp classname="col-lg-12 ftco-animate d-flex align-items-center">
                            <div className="text text-center">
                                <span className="subheading">Welcome to Haircare</span>
                                <h1 className="mb-4">We are professional care for your hair</h1>
                                <p><a href="#booking" className="btn btn-primary btn-outline-primary px-4 py-2">Book now</a></p>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}