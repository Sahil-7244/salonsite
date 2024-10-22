import { Link } from "react-router-dom";

export default function Notfound(){
    return(
        <>
            <div class="container">
                <h1 style={{paddingTop:"20px", fontSize: "7vw", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", lineHeight: "1", fontWeight: "600", color: "GrayText"}}><center>OOPS...</center></h1>
                <div style={{display:"flex", justifyContent:"center", padding:"0px", margin:"0px"}}>
                    <img src="images/badhaircut1.jpg" alt="404img" height="300px" width="300px" style={{mixBlendMode:"multiply"}}/>
                </div>
                <h1 style={{paddingTop:"0px", fontSize: "7vw", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", lineHeight: "1", fontWeight: "600", color: "#bf925b"}}><center>Looks <span style={{color:"GrayText"}}>like</span> something<br/> went <span style={{color:"GrayText"}}>wrong!!</span></center></h1>
                <div>
                    <center>
                        <button style={{borderRadius:"5px", backgroundColor:"#bf925b"}}><Link to="/" style={{color:"white"}}><b>back to homepage</b></Link></button>
                    </center>
                </div>
            </div>
        </>
    );
}