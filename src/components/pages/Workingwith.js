import React from 'react'
import google from "../images/google.png"
import fb from "../images/fb.png"
import instagram from "../images/instagram.png"
import pinterest from "../images/pinterest.png"
import youtube from "../images/youtube.png"
import heart from "../images/heart.png"
const Workingwith = () => {
    return (
        <div className="container workingwith">

            <div className="row  ">

                <div className="row workingwithtext">


                    <div className="col-md-12  text-center">

                        <h2>  Platforms We <span><img src={heart} /></span>  Working With</h2>
                    </div>
                </div>
                <div className="row  workingwithicons mt-4">
                <div className="col mt-2">
                    <img src={google} />
                </div>
                <div className="col mt-2">
                    <img src={fb} />
                </div>
                <div className="col mt-2">
                    <img src={instagram} />
                </div>
                <div className="col mt-2 mb-2 ">
                    <img src={youtube} />
                </div>
                <div className="col mt-2">
                    <img src={pinterest} />
                </div>
            </div>
            </div>

        </div>
    )
}

export default Workingwith
