import FadeInUp from "../../For trigger Animation/animation";

export default function Services(){
    
    const servicesdata=[{"flaticon" : "flaticon-male-hair-of-head-and-face-shapes", "title" : "Haircut & Styling", "description" : "A small river named Duden flows by their place and supplies."},
    {"flaticon" : "flaticon-beard", "title" : "Beard", "description" : "A small river named Duden flows by their place and supplies."},
    {"flaticon" : "flaticon-beauty-products", "title" : "Makeup", "description" : "A small river named Duden flows by their place and supplies."},
    {"flaticon" : "flaticon-healthy-lifestyle-logo", "title" : "Body Treatment", "description" : "A small river named Duden flows by their place and supplies."}
    ];

    return(
        <>
            <section class="services-section ftco-section">
                <div class="container">
                    <div class="row justify-content-center pb-3">
                        <FadeInUp classname="col-md-10 heading-section text-center ftco-animate">
                            <span class="subheading">Services</span>
                            <h2 class="mb-4">Services Menu</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </FadeInUp>
                    </div>
                    <div class="row no-gutters d-flex">
                        {servicesdata.map(
                            (service,i)=>{
                                return <Servicesprops logo={service.flaticon} title={service.title} content={service.description} />
                            }
                        )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

function Servicesprops(props){
    return(
        <>
            <FadeInUp classname="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                <div class="media block-6 services d-block text-center">
                    <div class="icon"><span class={props.logo}></span></div>
                    <div class="media-body">
                        <h3 class="heading mb-3">{props.title}</h3>
                        <p>{props.content}</p>
                    </div>
                </div>    
            </FadeInUp>
        </>
    );
}