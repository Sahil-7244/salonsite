import FadeInUp from "../../For trigger Animation/animation"

export default function Salonvideo(){
    return(
        <>
            <section class="ftco-section ftco-no-pb ftco-no-pt">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d-flex">
                            <div class="p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/bg-2.jpg)"}}>
                                <a href="https://vimeo.com/45830194" class="icon popup-vimeo d-flex justify-content-center align-items-center">
                                    <span class="icon-play"></span>
                                </a>
                            </div>
                        </div>
                        <FadeInUp classname="col-md-6 py-md-5 pb-5 wrap-about pb-md-5 ftco-animate">
                            <div class="heading-section mb-4 mt-md-5">
                                <span class="subheading">About Us</span>
                                <h2 class="mb-4">Welcome To Haircare A Hair Salon</h2>
                            </div>
                            <div class="pb-md-5">
                                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}