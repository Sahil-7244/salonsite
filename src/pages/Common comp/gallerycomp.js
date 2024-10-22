import FadeInUp from "../../For trigger Animation/animation";

export default function Gallery(){
    const gallerydata= [{"image":"work-1.jpg", "headingtitle":"Stylist", "verticletitle":"Beard"},
    {"image":"work-2.jpg", "headingtitle":"Beauty", "verticletitle":"Haircut"},
    {"image":"work-3.jpg", "headingtitle":"Beauty", "verticletitle":"Hairstylist"},
    {"image":"work-4.jpg", "headingtitle":"Beauty", "verticletitle":"Haircut"},
    {"image":"work-5.jpg", "headingtitle":"Beauty", "verticletitle":"Makeup"},
    {"image":"work-6.jpg", "headingtitle":"Fashion", "verticletitle":"Model"},
    {"image":"work-7.jpg", "headingtitle":"Beauty", "verticletitle":"Makeup"},
    {"image":"work-8.jpg", "headingtitle":"Beauty", "verticletitle":"Makeup"}
    ];

    return(
        <>
            <section class="ftco-section ftco-no-pt ftco-no-pb">
                <div class="container">
                    <div class="row no-gutters justify-content-center mb-5 pb-2">
                        <FadeInUp classname="col-md-6 text-center heading-section ftco-animate">
                            <span class="subheading">Gallery</span>
                            <h2 class="mb-4">Our gallery</h2>
                            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </FadeInUp>
                    </div>
                </div>
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        {
                            gallerydata.map(
                                (pic,i)=>{
                                    return <Galleryprops img={pic.image} headtitle={pic.headingtitle} vrtitle={pic.verticletitle} />
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

function Galleryprops(props){
    return(
        <>
            <FadeInUp classname="col-md-6 col-lg-3 ftco-animate">
                <div class="project">
                    <img src={"images/"+props.img} class="img-fluid" alt="Colorlib Template" />
                    <div class="text">
                        <span>{props.headtitle}</span>
                        <h3><a href="project.html">{props.vrtitle}</a></h3>
                    </div>
                    <a href={"images/"+props.img} class="icon image-popup d-flex justify-content-center align-items-center">
                        <span class="icon-expand"></span>
                    </a>
                </div>
            </FadeInUp>
        </>
    );
}