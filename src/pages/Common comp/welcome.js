
export default function Welcome(){
    return(
        <>
            <section class="ftco-section ftco-no-pt ftco-no-pb">
                <div class="container-fluid px-0">
                    <div class="row no-gutters">
                        <Welcomeprops img="formen.jpg" title="For Men"  />
                        <div class="col-md-3 text-center d-flex align-items-stretch">
                            <div class="text-about py-5 px-4">
                                <h1 class="logo">
                                    <a href="#"><span class="flaticon-scissors-in-a-hair-salon-badge"></span>Haircare</a>
                                </h1>
                                <h2>Welcome to our Salon</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p class="mt-3"><a href="#" class="btn btn-primary btn-outline-primary">Read more</a></p>
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
            <div class="col-md text-center d-flex align-items-stretch">
                <div class="services-wrap d-flex align-items-center img" style={{backgroundImage: "url(images/"+props.img+")"}}>
                    <div class="text">
                        <h3>{props.title}</h3>
                        <p><a href={"#pricing"} class="btn-custom">See pricing <span class="ion-ios-arrow-round-forward"></span></a></p>
                    </div>
                </div>
            </div>
        </>
    );
}