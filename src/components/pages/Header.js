import React from 'react'
import bannergirl from "../images/bannergirl1.jpg"
import trustpilot from "../images/trustpilot.png"

const Header = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 headerleft">


                    <img src={bannergirl} className="w-100" />
                </div>
                <div className="col-md-6 headerright">


                    <h2>

                        Digital
                        <br />
                        Marketing
                        <br />
                        Services
                    </h2>
                    <p>
                        Your mere social media presence isn’t all it takes to
                        up your social media game. Your Social Media
                        footprint. Reach new heights with digital marketing
                        services by <span>Marketing Blink</span>


                    </p>
                    <form>
                        <div class="input-group mb-3 mt-4">

                            <input type="text" class="form-control me-2" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="text" class="form-control" placeholder="Email " aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3 mt-4">

                            <input type="text" class="form-control me-2" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="text" class="form-control" placeholder="Social Media" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>





                    </form>
                  
<div className="d-flex btnsection">


<button type="button" className="btn btn-livechat  me-2 w-100">LIVE CHAT</button>

<button type="button" className="btn btnrequest w-100">GET STARTED</button>


</div>
                </div>
            </div>


            <div className="row header-icons">

                <div className="col">
                    <img src={trustpilot} />

                </div>
                <div className="col">
                    <img src={trustpilot} />
                </div>
                <div className="col">
                    <img src={trustpilot} />
                </div>
                <div className="col">
                    <img src={trustpilot} />
                </div>
            </div>
        </div>
    )
}

export default Header
