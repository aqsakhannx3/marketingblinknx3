import React from 'react'
import Particles from "react-tsparticles"
import ParticleConfig from './ParticleConfig'
const ParticlesEx = () => {
    return (
        <div >
          
            {/* <Particles
            
            params={{
                particles: {
                    shape: {
                        type: 'images',
                     
                        image: [ 
                            {src: 'https://img.icons8.com/ios/50/000000/snow.png', height: "1000px", width: "100px"},
                            {src: 'https://img.icons8.com/ios/50/000000/snow-storm--v2.png', height: 20, width: 20},
                          ,
                        ]
                    }
                }
            }} 
            
            /> */}

{/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}

    <Particles params={ParticleConfig}></Particles>
        </div>
    )
}

export default ParticlesEx
