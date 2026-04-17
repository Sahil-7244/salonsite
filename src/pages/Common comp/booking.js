import FadeInUp from "../../For trigger Animation/animation";
import emailjs from "emailjs-com";

export default function Booking() {

    const handleSubmit = async (e) => {
        e.preventDefault();
console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            alert("Your appointment has been booked successfully!");
            e.target.reset();

        } catch (error) {
            alert("Failed to send booking. Please try again.");
            console.error(error);
        }
    };

    return(
        <>
            <section className="ftco-section ftco-booking bg-light" id="booking">
                <div className="container ftco-relative">
                    <div className="row justify-content-center pb-3">
                        <FadeInUp classname="col-md-10 heading-section text-center ftco-animate">
                            <span className="subheading">Booking</span>
                            <h2 className="mb-4">Make an Appointment</h2>
                            <p>Far far away, behind the word mountains</p>
                        </FadeInUp>
                    </div>

                    <h3 className="vr">Call Us: 012-3456-7890</h3>

                    <div className="row justify-content-center">
                        <FadeInUp classname="col-md-10 ftco-animate">

                            <form className="appointment-form" onSubmit={handleSubmit}>
                                <div className="row">

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Name" required/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Email" required/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="date" name="date" className="form-control appointment_date" required/>
                                        </div>    
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="time" name="time" className="form-control appointment_time" required/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="service" className="form-control">
                                                    <option value="Professional Makeup">Professional Makeup</option>
                                                    <option value="Manicure Pedicure">Manicure Pedicure</option>
                                                    <option value="Body Treatment">Body Treatment</option>
                                                    <option value="Haircut & Coloring">Haircut & Coloring</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="tel" name="phone" className="form-control"
                                                placeholder="Phone (ex.1234567890)" pattern="[0-9]{10}" required/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" cols="30" rows="7"
                                                className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Make an Appointment" className="btn btn-primary" />
                                </div>

                            </form>

                        </FadeInUp>
                    </div>
                </div>
            </section>
        </>
    );
}