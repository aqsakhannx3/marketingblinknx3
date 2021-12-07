import React from 'react'
import digitalcommimg from "../images/digitalcommimg.png"
const DigitalCoomunication = () => {
    return (
        <div className="container mt-5">

            <div className="row socialmedia">

                <div className="col-md-6 socialmedialeft">

                    <h3>Unlock the Power of

                         <br/>

                    Digital Communication</h3>
                    <p>
                    Effective and engaging communication with your customer is the key to successful outcomes, but more than that, the success of a business in this digital era depends on the effectiveness of a digital marketing strategy. With the right digital marketing agency by your side, you can achieve your marketing goals in less time than you might have imagined and start reaping the benefits of your hard work quicker than you think.

                    </p>
                    


                    <div className="btnsection">


                      

                        <button type="button" className="btn btnrequest " style={{paddingLeft:"20px" ,paddingRight:"20px"}} >Request Digital Marketing Plan</button>


                    </div>

                </div>
                <div className="col-md-6 socialmediaright" >

       

                 
             <img src={digitalcommimg} style={{width:"100%"}}/>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default DigitalCoomunication
