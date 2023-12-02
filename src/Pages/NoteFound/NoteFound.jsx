import {Link} from "react-router-dom"
import testimonialbg from "../../assets/testimonialbg.jpg"

import './NoteFound.css'

const NoteFound = () => {
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
          
          <h1 className=" main-title-blog text-white text-capitalize mt-5" style={{ fontSize: "6rem", fontWeight: "800", lineHeight:"1.5"}}>404</h1>
          
        </div>

        
      </div>
    </div>
    </div>
    <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="main-title-notfound text-dark text-capitalize mt-5" style={{ fontSize: "6rem", fontWeight: "800", lineHeight:"1.5"}}>That page cannot be found </p>
            <Link to="/" className="main-title-notfound goback-text text-decoration-none ">Go Back</Link>
          </div>
        </div>

      </div>
      </div>
   
    
   
  )
}

export default NoteFound