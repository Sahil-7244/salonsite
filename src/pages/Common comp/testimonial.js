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
            <section className="testimony-section bg-light">
                <div className="container">
                    <FadeInUp classname="row ftco-animate justify-content-center">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="testimony-img" style={{backgroundImage: "url(images/testimony-img.jpg)"}}></div>
                        </div>
                        <div className="col-md-6 col-lg-7 py-5 pl-md-5">
                            <div className="py-md-5">
                                <FadeInUp classname="heading-section ftco-animate">
                                    <span className="subheading">Testimony</span>
                                    <h2 className="mb-0">Happy Customer</h2>
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
                                    navText={ ['<span className="ion-ios-arrow-back">', '<span className="ion-ios-arrow-forward">']}
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
                                                return <Testimonialprops key={i} content={a.content} uimg={a.userimage} name={a.name} post={a.post} />
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
            <div className="item">
                <div className="testimony-wrap pb-4">
                    <div className="text">
                        <p className="mb-4">{props.content}</p>
                    </div>
                    <div className="d-flex">
                        <div className="user-img" style={{backgroundImage: "url(images/"+props.uimg+")"}}></div>
                    </div>
                    <div className="pos ml-3">
                        <p className="name">{props.name}</p>
                        <span className="position">{props.post}</span>
                    </div>
                </div>
            </div>
        </>
    );
}