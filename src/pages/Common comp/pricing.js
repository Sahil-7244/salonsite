import FadeInUp from "../../For trigger Animation/animation";

export default function Pricing(){
    const pricingdata= [{"title":"Hair Style", "price":"$50.00", "list1":"Hair Dryer", "list2":"Hair Coloring", "list3":"Hair Cut", "list4":"Hair Dresser", "list5":"Hair Spa"},
    {"title":"Manicure Pedicure", "price":"$34.50", "list1":"Manicure", "list2":"Pedicure", "list3":"Coloring", "list4":"Nails", "list5":"Nail Cut"},
    {"title":"Makeup", "price":"$54.50", "list1":"Makeup", "list2":"Professional Makeup", "list3":"Blush on", "list4":"Facial Massage", "list5":"Facial Spa"},
    {"title":"Body Treatment", "price":"$89.50", "list1":"Massage", "list2":"Spa", "list3":"Foot Spa", "list4":"Body Spa", "list5":"Relaxing"}    
    ];

    return(
        <>
            <section className="ftco-section ftco-pricing" id="pricing">
			<div className="container">
				<div className="row justify-content-center pb-3">
                    <FadeInUp classname="col-md-10 heading-section text-center ftco-animate">
          	            <span className="subheading">Pricing</span>
                        <h2 className="mb-4">Our Prices</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </FadeInUp>
                </div>
                <div className="row">
                    {
                        pricingdata.map(
                            (price,i)=>{
                                return <Pricingprops key={i} title={price.title} price={price.price} list1={price.list1} list2={price.list2} list3={price.list3} list4={price.list4} list5={price.list5} />
                            }
                        )
                    }
                </div>
			</div>
		</section>
        </>
    );
}

function Pricingprops(props){
    return(
        <>
             <FadeInUp classname="col-md-3 ftco-animate">
                <div className="pricing-entry pb-5 text-center" style={{marginRight:"10px", marginLeft: "10px"}}>
                    <div>
                        <h3 className="mb-4">{props.title}</h3>
                        <p><span className="price">{props.price}</span> <span className="per">/ session</span></p>
                    </div>
                    <ul>
                        <li>{props.list1}</li>
                        <li>{props.list2}</li>
                        <li>{props.list3}</li>
                        <li>{props.list4}</li>
                        <li>{props.list5}</li>
                    </ul>
                    <p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
                </div>
            </FadeInUp>
        </>
    );
}