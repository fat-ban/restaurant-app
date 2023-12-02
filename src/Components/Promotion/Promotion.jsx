import { FaBullhorn } from "react-icons/fa";

import './Promotion.css'

const Promotion = () => {
  return (
    <section className='promotion w-100 h-auto' 
    //style={{height:'20vh'}}
    >
        
       
        <div className="container py-3">
          
          
          
          <div className="row  d-flex ">
            
              <div className=" col py-4 d-flex flex-lg-row flex-md-column justify-content-center align-items-center">
              <FaBullhorn className=" text-black fw-400" size="70px" />
                <div className=" mx-4 d-flex flex-column justify-content-center align-items-center">
                   <h3 className="main-title-footer  text-center fs-sm-4">
                  Special Promotion For This Month!
                </h3>
                <p
                  className="text-center  fs-6"
                  style={{  fontFamily: "Open Sans" }}
                >
                  Come with more than 8 people get 20% off. Bring all your
                  friends here!
                </p> 
                </div>
                
              </div>
            </div>
         </div>
        
        
    </section>
  )
}

export default Promotion