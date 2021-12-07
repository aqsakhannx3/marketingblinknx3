import React from 'react'
import groupcontact from "../images/groupcontact.png"
import profile from "../images/profile.png"
import speaker from "../images/speaker.png"
import chess from "../images/chess.png"
const SocialMediaMarketing = () => {
    return (
        <div className="container mt-5">

            <div className="row socialmedia">

                <div className="col-md-6 socialmedialeft">

                    <h3>Discover the Power of


                        Social Media Marketing</h3>
                    <p>
                        Even if you are offering a dedicated customer service, it will not always help you gain real insights into how your consumer thinks. To make your communication effective, you have to understand what your consumers prefer, and for that, social media is the key.


                    </p>
                    <p>


                        Social Media Marketing allows you to engage with your customer in real time and respond to them as if you are actually present in front of them. In today’s fast paced world, quick results are everything. Remember, the more you communicate, the better it gets.
                    </p>


                    <div className="d-flex btnsection">


                        <button type="button" className="btn btn-livechat  me-2 " style={{ width: "150px" }}>LIVE CHAT</button>

                        <button type="button" className="btn btnrequest " style={{ width: "150px" }} >GET STARTED</button>


                    </div>

                </div>
                <div className="col-md-6 socialmediaright" >




                    <div className="row">

                        <div className="col mt-3">
                            <div className="card socialmediarightcard w-100 shadow aligh-items-center justify-content-center" >

                                <div className="card-body ">
                                    <div className="d-flex  ">
                                        <img src={groupcontact} className="me-2" />
                                        <h4 className="text-center">Social Media Management</h4>

                                    </div>
                                    <p>With Marketing Blink's social media services, you can get a return on investment (ROI) with platforms like Facebook, Twitter, Instagram, and LinkedIn.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="card socialmediarightcard w-100 shadow aligh-items-center justify-content-center" >

                                <div className="card-body ">
                                    <div className="d-flex  ">
                                        <img src={speaker} className="me-2" />
                                        <h4 className="text-center">Social Media Campaigns</h4>

                                    </div>
                                    <p>Based on your marketing goal, consumer profile, and further research, Marketing Blink will develop a focused approach suited to your business needs.</p>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* cardrow2 */}
                    <div className="row">

<div className="col mt-3">
    <div className="card socialmediarightcard w-100 shadow aligh-items-center justify-content-center" >

        <div className="card-body ">
            <div className="d-flex  ">
                <img src={chess} className="me-2" />
                <h4 className="text-center">Social Media Strategy</h4>

            </div>
            <p>Marketing Blink devises a
social media strategy based on your target audience and your business goals.</p>

        </div>
    </div>
</div>
<div className="col mt-3">
    <div className="card socialmediarightcard w-100 shadow aligh-items-center justify-content-center" >

        <div className="card-body ">
            <div className="d-flex  ">
                <img src={profile} className="me-2" />
                <h4 className="text-center">Customer Centric Strategy</h4>

            </div>
            <p>Being customer-centric implies prioritising the needs and expectations of customers over all other considerations.</p>

        </div>
    </div>
</div>

</div>
                    
                </div>
            </div>
        </div>
    )
}

export default SocialMediaMarketing
