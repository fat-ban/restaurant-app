import "./AboutUs.css";
import { Container } from "react-bootstrap";

import foodCircle5 from "../../assets/food-circle-5.png";
import foodCircle6 from "../../assets/food-circle-6.png";

const AboutUs = () => {
  return (
    <section
      className="aboutus-sect w-100 h-100 bg-white pb-5 "
      //style={{height:"100vh"}}
    >
      <Container>
        <div
          className="row pt-5"
          //style={{marginTop:"200px",marginBottom:"30px"}}
        >
          <div className="col-lg-6 ">
            <div className="text-left px-5 d-flex flex-column  justify-content-center align-items-center mb-3">
              <h1
                className="fs-sm-3 fs-lg-5 text-capitalize text-dark"
                style={{
                  fontSize: "4rem",
                  fontWeight: "300",
                  lineHeight: "1.5",
                }}
              >
                Little About Us
              </h1>
              <h3 className="">THE HISTORY OF US</h3>
              <hr
                className="hr  mx-3 "
                style={{ border: "1px solid #ffcc0d", width: "90px" }}
              />
              <p className="fs-6 my-4">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
                posuere consectetur est at lobortis. Nulla vitae elit libero, a
                pharetra augue. Donec sed odio dui.Integer posuere erat a ante
                venenatis.
              </p>
              <button
                type="button"
                className=" btn-text  px-4 py-3 mt-3"
                style={{}}
              >
                learn more
              </button>
            </div>
          </div>
          <div className=" col-lg-6">
            <div className="card-group mb-2 pt-5 mt-4 bg-">
              <div className="card-about card border-0 m-2 rounded-circle m-3">
                <img src={foodCircle5} alt="circle1" className="card-img-top" />
              </div>
              <div className="card-about card border-0 m-2 rounded-circle m-3">
                <img src={foodCircle6} alt="circle2" className="card-img-top" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
