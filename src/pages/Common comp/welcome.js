
export default function Welcome(){
    return(
        <>
            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <Welcomeprops img="formen.jpg" title="For Men"  />
                        <div className="col-md-3 text-center d-flex align-items-stretch">
                            <div className="text-about py-5 px-4">
                                <h1 className="logo">
                                    <a href="#"><span className="flaticon-scissors-in-a-hair-salon-badge"></span>Haircare</a>
                                </h1>
                                <h2>Welcome to our Salon</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p className="mt-3"><a href="#" className="btn btn-primary btn-outline-primary">Read more</a></p>
                            </div>
                        </div>
                        <Welcomeprops img="forwomen.jpg" title="For Women"  />
                    </div>
                </div>
            </section>
        </>
    );
}

function Welcomeprops(props){
    return(
        <>
            <div className="col-md text-center d-flex align-items-stretch">
                <div className="services-wrap d-flex align-items-center img" style={{backgroundImage: "url(images/"+props.img+")"}}>
                    <div className="text">
                        <h3>{props.title}</h3>
                        <p><a href={"#pricing"} className="btn-custom">See pricing <span className="ion-ios-arrow-round-forward"></span></a></p>
                    </div>
                </div>
            </div>
        </>
    );
}