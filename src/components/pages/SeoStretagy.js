import React from 'react'
import superman from "../images/superman.png"
import search from "../images/search.png"
const SeoStretagy = () => {
    return (
       <div className="container SeoStrategy">

           <div className="row ">

               <div className="col-md-6 SeoStrategyleft">
               <img src={superman} className="w-100" />
               </div>
              <div className="col-md-6  SeoStrategyright">


                  <h4>Comprehensive SEO Strategy</h4>
                  <h2>Get Qualified Organic Leads</h2>
                  <p>

                  <span className="marketingblink">Marketing Blink </span>can help you boost your end result with an SEO strategy tailored to your brand thanks to our SEO experts. With our search engine optimization services, you can start attracting more quality search traffic to your website right away. Get qualified organic leads on Keywords that matter the most to your business.
                  </p>

                   {/* tabssection
                 */}


<div className="row d-flex align-items-start align-items-center justify-content-center SeoStrategytabs ">
    <div className="col nav flex-column  mt-3 mb-3   nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

    <button  className="nav-link active " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">On-Page SEO</button>
    <button className="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Off-Page SEO</button>
    <button className="nav-link " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SEO Gap Analysis</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Keyword Research
</button>
    </div>
    <div className="col tabContent tab-content " id="v-pills-tabContent">
         {/* On-Page SEO */}

    <div className="  tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
        
   
            <div className="tabcard" >
              <div className="tabcardimg">  <img src={search} /></div>
          <div>
              <p className="card-text">From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
              </div>
            </div>
        
        </div>
      {/* On-Page SEO end */}
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <div className="tabcard" >
            <img src={search} />
              <p className="card-text">From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
         
            </div>
   </div>

   <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
   <div className="tabcard" >
            <img src={search} />
              <p className="card-text">From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
         
            </div>
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
        
    <div classNameName="  card ">

    <div className="tabcard" >
            <img src={search} />
              <p className="card-text">From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
         
            </div>
</div>

        
        </div>
     
    </div>
    
</div>
{/* 
<div className="d-flex align-items-start align-items-center justify-content-center SeoStrategytabs  ">
  <div className="nav flex-column  mt-3 mb-3   nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      
    <button  className="nav-link active " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">On-Page SEO</button>
    <button className="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Off-Page SEO</button>
    <button className="nav-link " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SEO Gap Analysis</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Keyword Research
</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">



    <div className=" tabcontent tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
     <div classNameName="  card ">

         <div className=" tabcontentcard card-body">

           <img src={search} style={{backgroundColor:"red", }}/>
           <p className="card-text">From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
         </div>
     </div>
     
     </div>
  


   <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
   <div classNameName="  card ">

<div className=" tabcontentcard card-body">

  <img src={search}/>
  <p>From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
</div>
</div>
   </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div classNameName="  card ">

<div className=" tabcontentcard card-body">

  <img src={search}/>
  <p>From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
</div>
</div>
        
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
        
    <div classNameName="  card ">

<div className=" tabcontentcard card-body">

  <img src={search}/>
  <p>From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
</div>
</div>
        
        </div>
   
  </div>
</div> */}
            
           <button className="btn w-50 mt-3 SeoStrategybtn">Request Free SEO Audit</button>
                  
                  
                  
                   </div>
                 
           </div>
       </div>
    )
}

export default SeoStretagy
