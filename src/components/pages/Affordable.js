import React from 'react'
import SuperBlink from './AffordableTabs/SuperBlink'

const Affordable = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-12 text-center Affordableheading">


                    <h3>Affordable Plans</h3>
                    <p>We offer affordable digital marketing plans that don’t burn holes in your pocket.</p>
                </div>

                <div className="row">

                  
                    <ul className="Affordabletabs nav nav-justified nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">SMM</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SEO</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Super Blink</button>
                        </li>
                        <li className="nav-item" role="sem">
                            <button className="nav-link" id="pills-sem-tab" data-bs-toggle="pill" data-bs-target="#pills-sem" type="button" role="tab" aria-controls="pills-sem" aria-selected="false">SEM</button>
                        </li>
                        <li className="nav-item" role="content">
                            <button className="nav-link" id="pills-content-tab" data-bs-toggle="pill" data-bs-target="#pills-content" type="button" role="tab" aria-controls="pills-content" aria-selected="false">CONTENT</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            
                            
                            SMM
                            
                            
                            </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">SEO</div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            
                           <SuperBlink/>
                            
                            
                            </div>
                        <div className="tab-pane fade" id="pills-sem" role="tabpanel" aria-labelledby="pills-sem-tab">SEM</div>
                        <div className="tab-pane fade" id="pills-content" role="tabpanel" aria-labelledby="pills-content-tab">content</div>
                    </div>
               
                </div>
            </div>

        </div>
    )
}

export default Affordable
