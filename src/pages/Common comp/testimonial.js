import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FadeInUp from '../../For trigger Animation/animation';

export default function Testimonial(){

    const testimonialdata=[{"content":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", "userimage":"stylist-1.jpg", "name":"Jeff Nucci", "post":""},
    {"content":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", "userimage":"stylist-2.jpg", "name":"Jeff Nucci", "post":"Businessman"},
    {"content":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", "userimage":"stylist-3.jpg", "name":"Jeff Nucci", "post":"Businessman"},
    {"content":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", "userimage":"stylist-4.jpg", "name":"Jeff Nucci", "post":"Businessman"},
    {"content":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", "userimage":"stylist-5.jpg", "name":"Jeff Nucci", "post":"Businessman"}
    ];

    return(
        <>
            <section class="testimony-section bg-light">
                <div class="container">
                    <FadeInUp classname="row ftco-animate justify-content-center">
                        <div class="col-md-6 col-lg-5 d-flex">
                            <div class="testimony-img" style={{backgroundImage: "url(images/testimony-img.jpg)"}}></div>
                        </div>
                        <div class="col-md-6 col-lg-7 py-5 pl-md-5">
                            <div class="py-md-5">
                                <FadeInUp classname="heading-section ftco-animate">
                                    <span class="subheading">Testimony</span>
                                    <h2 class="mb-0">Happy Customer</h2>
                                </FadeInUp>
                                <FadeInUp>
                                <OwlCarousel
                                    className="carousel-testimony owl-carousel ftco-animate"
                                    loop
                                    autoplay
                                    autoHeight
                                    center
                                    items={1}
                                    margin={30}
                                    stagePadding= {0}
                                    autoplayHoverPause={true}
                                    nav= {false}
                                    dots
                                    navText={ ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">']}
                                    responsive={{
                                        0:{
                                            items: 1
                                        },
                                        600:{
                                            items: 1
                                        },
                                        1000:{
                                            items: 1
                                        }
                                    }}>
                                    {
                                        testimonialdata.map(
                                            (a,i)=>{
                                                return <Testimonialprops content={a.content} uimg={a.userimage} name={a.name} post={a.post} />
                                            }
                                        )
                                    }
                                </OwlCarousel>
                                </FadeInUp>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>
        </>
    );
}

function Testimonialprops(props){
    return(
        <>
            <div class="item">
                <div class="testimony-wrap pb-4">
                    <div class="text">
                        <p class="mb-4">{props.content}</p>
                    </div>
                    <div class="d-flex">
                        <div class="user-img" style={{backgroundImage: "url(images/"+props.uimg+")"}}></div>
                    </div>
                    <div class="pos ml-3">
                        <p class="name">{props.name}</p>
                        <span class="position">{props.post}</span>
                    </div>
                </div>
            </div>
        </>
    );
}