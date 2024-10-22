import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FadeInUp from '../../For trigger Animation/animation';

export default function Team(){

    const teamdata=[{"image":"stylist-1.jpg", "name":"Danica Lewis", "post":"Hair Stylist"},
    {"image":"stylist-2.jpg", "name":"Nicole Simon", "post":"Nail Master"},
    {"image":"stylist-3.jpg", "name":"Cloe Meyer", "post":"Director"},
    {"image":"stylist-4.jpg", "name":"Rachel Clinton", "post":"Hair Stylist"},
    {"image":"stylist-5.jpg", "name":"Dave Buff", "post":"Barber"}
    ];

    return(
        <>
            <section class="ftco-section ftco-team">
                <div class="container-fluid px-md-5">
                    <div class="row justify-content-center pb-3">
                        <FadeInUp classname="col-md-10 heading-section text-center ftco-animate">
                            <span class="subheading">Artistic Director</span>
                            <h2 class="mb-4">Makeup Artist</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </FadeInUp>
                    </div>
                    <div class="row">
                        <FadeInUp classname="col-md-12 ftco-animate">
                            <OwlCarousel
                            class="carousel-team owl-carousel"
                            autoplay
                            autoHeight
                            items={1}
                            margin= {30}
                            stagePadding= {0}
                            nav= {false}
                            dots
                            navText={ ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'] }
                            responsive={{
                                0:{
                                    items: 1
                                },
                                600:{
                                    items: 3
                                },
                                1000:{
                                    items: 4
                                }
                            }}>
                                {
                                    teamdata.map(
                                        (team,i)=>{
                                            return <Teamprops img={team.image} name={team.name} post={team.post} />
                                        }
                                    )
                                }
                            </OwlCarousel>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}

function Teamprops(props){
    return(
        <>
            <div class="item">
                <a href="#" class="team text-center">
                    <div class="img" style={{backgroundImage: "url(images/"+props.img+")"}}></div>
                    <h2>{props.name}</h2>
                    <span class="position">{props.post}</span>
                </a>
            </div>
        </>
    );
}