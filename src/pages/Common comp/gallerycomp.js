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
            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters justify-content-center mb-5 pb-2">
                        <FadeInUp classname="col-md-6 text-center heading-section ftco-animate">
                            <span className="subheading">Gallery</span>
                            <h2 className="mb-4">Our gallery</h2>
                            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </FadeInUp>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        {
                            gallerydata.map(
                                (pic,i)=>{
                                    return <Galleryprops key={i} img={pic.image} headtitle={pic.headingtitle} vrtitle={pic.verticletitle} />
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
                <div className="project">
                    <img src={"images/"+props.img} className="img-fluid" alt="Colorlib Template" />
                    <div className="text">
                        <span>{props.headtitle}</span>
                        <h3><a href="project.html">{props.vrtitle}</a></h3>
                    </div>
                    <a href={"images/"+props.img} className="icon image-popup d-flex justify-content-center align-items-center">
                        <span className="icon-expand"></span>
                    </a>
                </div>
            </FadeInUp>
        </>
    );
}