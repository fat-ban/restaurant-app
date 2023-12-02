import { useEffect } from "react"
import testimonialbg from "../../assets/testimonialbg.jpg"

import './Chefs.css'

const Chefs = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  
  return (
    <div className='bg-white menu-page ' style={{height:"100vh"}}>
        <div className='menu-page-img w-100' style={{
            height: "50vh",
        backgroundImage: `url(${testimonialbg})`,
        //height:"100vh",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
        }}>
        

        <div className="container  py-5">
          <div className="row mt-5  " >
            <div
              className="col pb-5  d-flex justify-content-center align-items-center"
              style={{ zIndex:"1" }}
            >
              
              <h1 className=" main-title-chefs text-white text-capitalize mt-5" style={{ fontSize: "6rem", fontWeight: "800", lineHeight:"1.5"}}>Meet The Team</h1>
              
            </div>
            
          </div>
        </div>
        </div>
        </div>
  )
}

export default Chefs