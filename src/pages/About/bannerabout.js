import FadeInUp from "../../For trigger Animation/animation"

export default function Bannerabout(){
    return(
        <>
            <section className="hero-wrap hero-wrap-2" style={{backgroundImage: "url('images/bg-1.jpg')"}} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <FadeInUp classname="col-md-9 ftco-animate pb-5 text-center">
                            <h2 className="mb-0 bread">About us</h2>
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-round-forward"></i></a></span> <span>About us<i className="ion-ios-arrow-round-forward"></i></span></p>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}