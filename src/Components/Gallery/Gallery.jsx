import "./Gallery.css";

import { arrayGallery } from "../../DataImg"
import { Link } from "react-router-dom";
//import recommendsImg from "../../assets/recommendsImg.png"
const Gallery = () => {


  return (
    <section
      className="gallery-section w-100 bg-white  py-5"
      //style={{height: "130vh"}}
    >
      {/*<Promotion/>*/}
      <div className="container">
        <div className="row mt-4 mb-3">
          <div
            className="col pb-5  d-flex justify-content-center align-items-center"
            style={{ zIndex: "1" }}
          >
            <div className="line-title-gallery mx-3"></div>
            <h1
              className=" main-title-gallery text-dark"
              style={{
                fontSize: "4rem",
                fontWeight: "600",
                lineHeight: "1.5",
                zIndex: "1",
              }}
            >
              Gallery
            </h1>
            <div className="line-title-gallery mx-3"></div>
          </div>
        </div>
        <div className="row ">
          
           
             
            
          
          
              {arrayGallery.map((item,index)=>{
                return(
                  
                  <div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" key={index}>
                  <div className="thumbnail">
                    <div className="img-container">
                       <img src={item.url} className="image" alt="..." />
                       <div className="overlay">
                        <p className="caption" > <Link to="/menu" className="main-title-gallery  text-decoration-none ">See more</Link></p>
                       </div>
                    </div>
                  </div>
              </div>
                )
              })}
              </div>
              
          
          </div>
    </section>
  );
};

export default Gallery;
