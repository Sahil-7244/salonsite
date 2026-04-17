import FadeInUp from "../../For trigger Animation/animation";

export default function Footer(){


  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
    };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
    }


    return(
        <>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2 logo">Haircare</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><FadeInUp><a href="#"><span className="icon-twitter"></span></a></FadeInUp></li>
                                    <li className="ftco-animate"><FadeInUp><a href="#"><span className="icon-facebook"></span></a></FadeInUp></li>
                                    <li className="ftco-animate"><FadeInUp><a href="#"><span className="icon-instagram"></span></a></FadeInUp></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Information</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">FAQs</a></li>
                                    <li><a href="#" className="py-2 d-block">Privacy</a></li>
                                    <li><a href="#" className="py-2 d-block">Terms Condition</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Home</a></li>
                                    <li><a href="#" className="py-2 d-block">About</a></li>
                                    <li><a href="#" className="py-2 d-block">Services</a></li>
                                    <li><a href="#" className="py-2 d-block">Work</a></li>
                                    <li><a href="#" className="py-2 d-block">Booking</a></li>
                                    <li><a href="#" className="py-2 d-block">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA(fake)</span></li>
                                        <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210(fake)</span></a></li>
                                        <li><a href="#"><span className="icon icon-envelope "></span><span className="text">sahilchauhan9377@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright &copy;{(new Date().getFullYear())} All rights reserved | made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://www.linkedin.com/in/sahilchauhan7244" target="_blank">Sahil Chauhan</a></p>
                        </div>
                    </div>
                    <button onClick={topFunction} id="movetop" title="Go to top">
                        <h3>&#10548;</h3>
                    </button>
                </div>
            </footer>
                
            
        {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> */}

        </>
    );
}