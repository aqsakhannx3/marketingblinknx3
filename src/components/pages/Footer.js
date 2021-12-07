import React from 'react'
import marketingblink from "../images/marketingblink.png"
import fb from "../images/fbicon.png"
import googleicon from "../images/googleicon.png"
import twittericon from "../images/twittericon.png"
import instagramicon from "../images/instagramicon.png"
import visaicon from "../images/visaicon.png"
import mastercardicon from "../images/mastercardicon.png"
import footericon3 from "../images/footericon3.png"
import footericon4 from "../images/footericon4.png"
import footericon5 from "../images/footericon5.png"
import footericon6 from "../images/footericon6.png"
import footericon7 from "../images/footericon7.png"
import footericon8 from "../images/footericon8.png"
import googlepartner from "../images/googlepartner.png"
import dmimage from "../images/dmimage.png"
import chaticon from "../images/chaticon.png"
import footermixicon from "../images/footermixicon.png"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="container Footer">

            <div className="row gx-5 align-items-center">


                <div className="col-md-4 Footerleft ">

                    <img src={marketingblink} />
                </div>
                <div className="col-md-4 Footermiddle">
                    <ul>

                        <li>CONTACT DETAILS</li>
                        <li>+1-646-880-3043</li>
                        <li>Email Us</li>
                        <li>222 Broadway, 19th Flr,
                        New York, NY 10038</li>
                    </ul>
                    {/* <p>CONTACT DETAILS</p>
                    <p>+1-646-880-3043</p>
                    <p>Email Us</p>
                    <p>
                        222 Broadway, 19th Flr,
                        New York, NY 10038</p> */}





                </div>
                <div className="col-md-4 footericons">

                      <div className="d-flex " >
                      <div >  <img src={fb} className="me-2" /></div>
                      <div> <img src={googleicon} className="me-2" /></div>
                      <div><img src={twittericon} className="me-2" /></div>
                      <div> <img src={instagramicon} className="me-2" /></div>
                          
                      </div>
                    {/* <div className="mt-3 d-flex" >

                        <img src={fb} className="me-1" />
                        <img src={googleicon} className="me-1" />

                        <img src={twittericon} className="me-1" />

                        <img src={instagramicon} className="me-1" />


                    </div> */}
                    <div className="mt-3 d-flex">
                     <img src={footermixicon}/>
                        {/* <img src={visaicon} className="me-2" />
                        <img src={mastercardicon} className="me-2" />

                        <img src={footericon3} className="me-2" />

                        <img src={footericon4} className="me-2" /> */}


                    </div>
                    {/* <div className="mt-2 d-flex">

                        <img src={footericon5} className="me-2" />
                        <img src={footericon6} className="me-2" />

                        <img src={footericon7} className="me-2" />

                        <img src={footericon8} className="me-2" />


                    </div> */}
                </div>
            </div>

            <div className="row gx-5 footerlinks">

                <div className="col">

                    <p>SEO Services</p>
                    <div>
                        <Link to="/">SEO Packages</Link>
                    </div>
                    <div>
                        <Link to="/">Link Building Services</Link>
                    </div>
                    <div>
                        <Link to="/">Small Business SEO</Link>
                    </div>
                    <div>
                        <Link to="/" >Local SEO</Link>
                    </div>
                    <div>
                        <Link to="/">eCommerce SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Website SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Enterprise SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Nationwide SEO</Link>
                    </div>
                    <div>
                        <Link to="/">International SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Outsourcing SEO Services</Link>
                    </div>



                    <div>
                        <Link to="/">White Label SEO Services</Link>
                    </div>
                    <div>
                        <Link to="/">Guaranteed SEO Services</Link>
                    </div>
                    <div>
                        <Link to="/">SEO Keywords Research</Link>
                    </div>
                    <div>
                        <Link to="/">SEO Competitor Analysis</Link>
                    </div>
                    <div>
                        <Link to="/">SEO Audit & Assessment</Link>

                    </div>
                    <div>
                        <Link to="/">Backlink Audit</Link>
                    </div>
                    <div>
                        <Link to="/">Digital Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">SEGMB Optimization</Link>
                    </div>
                    <div>
                        <Link to="/">Citation Building</Link>

                    </div>
                </div>

                {/* col2 */}
                <div className="col" >

                    <p>PPC SERVICES
                    </p>
                    <div>
                        <Link to="/">PPC Audit</Link>
                    </div>
                    <div>
                        <Link to="/">PPC Audits</Link>
                    </div>
                    <div>
                        <Link to="/">Campaign optimization</Link>
                    </div>
                    <div>
                        <Link to="/" >AdWords PPC Account Setup</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Ad copies development</Link>
                    </div>
                    <div>
                        <Link to="/">Lead Generation</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Paid Advertising</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Facebook Advertising</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Instagram Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">YouTube Advertising</Link>
                    </div>



                    <div>
                        <Link to="/">
                            LinkedIn Marketing</Link>
                    </div>
                    <div>
                        <Link to="/"></Link>
                    </div>
                    <div>
                        <Link to="/">Twitter Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Pinterest Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">Yelp Marketing</Link>

                    </div>
                    <div>
                        <Link to="/">
                            Amazon Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">Digital Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">eBay Marketing</Link>
                    </div>

                </div>
                {/* col2end */}


                {/* col3 */}
                <div className="col" >

                    <p>CONTENT MARKETING</p>
                    <div>
                        <Link to="/">Product Descriptions
                        </Link>
                    </div>
                    <div>
                        <Link to="/">Service Pages</Link>
                    </div>
                    <div>
                        <Link to="/">Campaign optimization</Link>
                    </div>
                    <div>
                        <Link to="/" >
                            Regional Pages</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Web Copy Writing</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Blog Writing</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Guest Blogging</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Email Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Business Plan</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Article Writing</Link>
                    </div>



                    <div>
                        <Link to="/">

                            Infographic Design</Link>
                    </div>
                    <div>
                        <Link to="/">Video</Link>
                    </div>

                    <p style={{marginTop:"30px"}}>SOCIAL MEDIA SERVICES</p>
                    <div>
                        <Link to="/">Influencer Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Community Management</Link>
                    </div>
                    <p style={{marginTop:"30px"}}>REPUTATION MANAGEMENT
                    </p>
                    <div>
                        <Link to="/">Personal Reputation</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Business Reputation</Link>
                    </div>


                </div>
                {/* col3end */}

                {/* col4 */}
                <div className="col" >

                    <p>DESIGN & DEVELOPMENT
                    </p>
                    <div>
                        <Link to="/">Web Design Packages
                        </Link>
                    </div>
                    <div>
                        <Link to="/">B2B Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">B2C Web Design</Link>
                    </div>
                    <div>
                        <Link to="/" >
                            Ecommerce Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">
                            WordPress Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Shopify Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Responsive Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Landing Pages Design</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Custom Logo Design</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Website Maintenance</Link>
                    </div>



                    <div>
                        <Link to="/">

                            Website Hosting</Link>
                    </div>


                    <p style={{marginTop:"30px"}}>INDUSTRIES</p>
                    <div>
                        <Link to="/">Chiropractors</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Dentist</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Doctors</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Healthcare</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Hotels</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Lawyers</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Real Estate</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Restaurants</Link>
                    </div>

                    <div>
                        <Link to="/">


                            Roofers</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Travel/Tourism</Link>
                    </div>




                </div>
                {/* col4end */}

                {/* col5 */}
                <div className="col" >

                    <p>MARKETING BLINK
                    </p>
                    <div>
                        <Link to="/">About
                        </Link>
                    </div>
                    <div>
                        <Link to="/">Blog</Link>
                    </div>
                    <div>
                        <Link to="/">Client Login</Link>
                    </div>
                    <div>
                        <Link to="/" >
                        Contact Us</Link>
                    </div>
                    <div>
                       <img/>
                    </div>
                  
                    
                    
                   



                  


                    <p>LOCATIONS</p>
                    <div>
                        <Link to="/">New York
</Link>
                    </div>
                    <div>
                        <Link to="/">
                        Seattle</Link>
                    </div>
                    <div>
                        <Link to="/">
                        Orlando</Link>
                    </div>
                    <div>
                        <Link to="/">
                        San Diego</Link>
                    </div>
                    <div>
                        <Link to="/">

                        Washington DC</Link>
                    </div>
                  
                    
                   <div style={{marginTop:"52px"}}>
                       <img src={googlepartner}/>
                   </div>
                   <div style={{marginTop:"28px"}}>
                       <img src={dmimage}/>
                   </div>

                   




                </div>
                {/* col5end */}
            </div>
            <div className="row mt-3"  >
                <div className="col-md-12 text-end footerbtn">

                  <button className="btn"  style={{width:"287.64px",borderRadius:"21.27px"}}>50% off* on your new order<img className="ms-2" src={chaticon}/></button>
                </div>
            </div>
            <div className="row footerend">
                <div className="col-md-12 text-center" style={{marginTop:"32px"}}>

                    <p>hello Copyright © 2021 Marketing Blink. All rights reserved. <Link to="/"> Privacy Policy</Link> and <Link to="/">Conditions of Use</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
