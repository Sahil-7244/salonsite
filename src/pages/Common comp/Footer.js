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
            <footer class="ftco-footer ftco-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2 logo">Haircare</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li class="ftco-animate"><FadeInUp><a href="#"><span class="icon-twitter"></span></a></FadeInUp></li>
                                    <li class="ftco-animate"><FadeInUp><a href="#"><span class="icon-facebook"></span></a></FadeInUp></li>
                                    <li class="ftco-animate"><FadeInUp><a href="#"><span class="icon-instagram"></span></a></FadeInUp></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4 ml-md-5">
                                <h2 class="ftco-heading-2">Information</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="py-2 d-block">FAQs</a></li>
                                    <li><a href="#" class="py-2 d-block">Privacy</a></li>
                                    <li><a href="#" class="py-2 d-block">Terms Condition</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Links</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="py-2 d-block">Home</a></li>
                                    <li><a href="#" class="py-2 d-block">About</a></li>
                                    <li><a href="#" class="py-2 d-block">Services</a></li>
                                    <li><a href="#" class="py-2 d-block">Work</a></li>
                                    <li><a href="#" class="py-2 d-block">Booking</a></li>
                                    <li><a href="#" class="py-2 d-block">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Have a Questions?</h2>
                                <div class="block-23 mb-3">
                                    <ul>
                                        <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                        <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                                        <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p>Copyright &copy;{(new Date().getFullYear())} All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                        </div>
                    </div>
                    <button onClick={topFunction} id="movetop" title="Go to top">
                        <h3>&#10548;</h3>
                    </button>
                </div>
            </footer>
                
            
        {/* <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> */}

        </>
    );
}