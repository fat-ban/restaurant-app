import "./Ingredient.css";

//import { Container } from "react-bootstrap";
//icon

import serviceOne from "../../assets/service-1.png";
import serviceTwo from "../../assets/service-2.png";
import ButtonSect from "../ButtonSect/ButtonSect";
//import Promotion from "../Promotion/Promotion";

const Ingredient = () => {
  return (
    
      <section
      className="ingredient-sect  w-100  bg-white pb-3 "
      //style={{ height: "100vh" }}
    >
     
      <div className ="container ">
        <div className="row mb-5"> 
        
          <div className="col  ">
            <div className="row" style={{ marginTop: "100px" }}>
              <div className="col-lg-6 ">
                <div className="pt-2 mt-4 d-flex justify-content-center align-items-center">
                  <div className="card-group d-sm-flex justify-content-center align-items-center">
                    <div className="card m-2 border-0 card-ingred">
                       <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={serviceOne}
                        alt="circle1"
                        className="img-fluid rounded "
                      />
                    </div>
                      {/* hover card */}
                    <div className="card-ingred-hover rounded">
                        <h3 className="main-title-ing ">The Best Chef</h3>
                        <p
                          className="fs-6 my-3 px-4 text-center lh-base fw-400"
                        
                        >
                          Cras justo odio, dapibus ac facilisis in,
                          egestas eget quam. Sed posuere consectetur est at lobortis.
                          Nulla vita.
                        </p>
                     </div>
                    </div>
                     {/**end card hover text */}
                    
                    <div className="card m-2 border-0 card-pick">
                    <div className="d-flex justify-content-center align-items-center">

                      <img
                        src={serviceTwo}
                        className="card-img-top rounded"
                        alt="..."
                      />
                      </div>
                      {/* hover card */}
                    <div className="card-pick-hover rounded">
                        <h3 className="main-title-pick ">We Pick Carefully</h3>
                        <p
                          className=" fs-6 my-3 px-4 text-center lh-base fw-400"
                        
                        >
                          Cras justo odio, dapibus ac facilisis  in,egestas eget quam. Sed posuere consectetur est at lobortis.
                          Nulla vita.
                        </p>
                     </div> 
                     {/**end card hover text */}
                    </div>
                    

                  </div>
                </div>
              </div>
             
             
               <div className="col-lg-6">
                <div className="text-right  d-flex flex-column  justify-content-center align-items-center ">
                  <h1
                    className="main-title-ingred pb-3 text-center text-black text-capitalize"
                    style={{ fontSize: "4rem", 
              fontWeight: "300", lineHeight:"1.5",zIndex:"1"}}
                  >
                    Perfect Ingredients
                  </h1>
                  <h3 className="">THIS IS OUR SECRET</h3>
                  <hr
                    className="hr  mx-3 "
                    style={{ border: "1px solid #ffcc0d", width: "90px" }}
                  />
                  <p className=" mt-3 mx-4" style={{ fontSize: "18px" }}>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Sed posuere consectetur est at lobortis. Nulla vitae elit
                    libero, a pharetra augue. Donec sed odio dui.Integer posuere
                    erat a ante venenatis.
                  </p>
                  <ButtonSect textBtn="learn more" colorBtn="#000"/>
                    
                 
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      {/*footer*/}

     {/* <Promotion/>*/}
    </section>
  );
};

export default Ingredient;
