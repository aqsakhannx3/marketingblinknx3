import React from 'react'
import DMSicon1 from "../images/DMSicon1.png"
import DMSicon3 from "../images/DMSicon3.png"
import DMSicon2 from "../images/DMSicon2.png"
import DMSicon4 from "../images/DMSicon4.png"
import DMSguy from "../images/DMSguy.png"
const DMServices = () => {
    return (
        <div className="container">
            <div className="row DMServices ">

                <div className="col-md-12 text-center DMServicesheading">
                    <h2>Our Digital
                        <br />
                        Marketing Services
                    </h2>

                    <h3>Now let’s talk business.</h3>
                    <p>As a holistic internet marketing company, we offer a wide range of digital marketing solutions to help you achieve
                        your marketing goals. From taking care of your digital presence, running successful Google campaigns, offering best SEO services to amping your current content marketing, we do it all and more. </p>
                </div>

                <div className="row DMServicesContent">


                    <div className="col-md-4 ">

                        <div className="ms-2 d-flex DMServicesContentcol">
                            <div className="text-end">
                                <h3 >Social Media Marketing</h3>
                                <p >We develop a holistic social media
                                    plan for your business across all
                                    social platforms and make your
                                    voice heard in the digital crowd.</p>
                            </div>
                            <div>
                                <img src={DMSicon1} />
                            </div>

                        </div>

                        <div className=" mt-5  ms-2 d-flex DMServicesContentcol">
                            <div className="text-end">
                                <h3 >SEO Services</h3>
                                <p>Better SEO means you have to
                                    spend less on SEM. This is the
                                    SEO philosophy embedded in
                                    our efforts.</p>
                            </div>
                            <div>
                                <img src={DMSicon3} />
                            </div>

                        </div>





                    </div>

                    <div className="col-md-4 text-center">
<img src={DMSguy}/>

                    </div>

                    <div className=" col-md-4">
                        <div className="  d-flex d-flex ms-2 d-flex DMServicesContentcol">
                            <div className="text-right">
                                <h3>Google Paid Ads</h3>
                                <p>We are Google ads certified and have
                                    the expertise to run successful paid advertising campaigns on Google to bring your target results.</p>
                            </div>
                            <div>
                                <img src={DMSicon2} />
                            </div>

                        </div>

                        <div className="mt-5 d-flex d-flex ms-2 d-flex DMServicesContentcol">
                            <div className="text-right">
                                <h3>Content Marketing
                                </h3>
                                <p>We provide content that is
                                    strictly based on user intent. As
                                    part of content marketing strategy our team writes, edits, develops and promotes content that is search engine friendly.</p>
                            </div>
                            <div>
                                <img src={DMSicon4} />
                            </div>

                        </div>


                    </div>

                </div>
                <div className="  DMSbtnsection text-center">

       <button type="button" className="btn btn-blinked me-5 ">Get Blinked</button>
  
       
<button type="button" className="btn btnplans ">View Plans</button>



</div>
            </div>

        </div>
    )
}

export default DMServices
