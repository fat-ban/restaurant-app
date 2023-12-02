import { BsFillTelephoneFill } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa";


//components
import gettousBg from "../../assets/gettous-bg.jpg"
import ButtonSect from "../ButtonSect/ButtonSect"
import Schedule from "../Schedule/Schedule";
//import Promotion from "../Promotion/Promotion"
import "./GetTous.css"

import { listedates } from "../../DataImg";


const GetTous = () => {
  return (
    <section
      className="gettous-section w-100 text-white py-5"
      style={{
        backgroundImage: `url(${gettousBg})`,
        //height: "100vh",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*<Promotion/>*/}
      <div className='container' >
        <div className='row mt-4 mb-3'>
        <div
              className="col pb-5  d-flex justify-content-center align-items-center"
              style={{ zIndex:"1" }}
            >
              <div className="line-title-get mx-3"></div>
              <h2 className=" main-title-get text-white text-capitalize" 
              style={{ fontSize: "4rem", 
              fontWeight: "600", lineHeight:"1.5",zIndex:"1"}}>How to get to us</h2>
              <div className="line-title-get mx-3"></div>
            </div>
        </div>

      
      <div className='row '>
        <div className='col text-view'>
          <h2 className="fs-4 mb-4 text-uppercase" >RESERVATIOn</h2>
          <p className="lh-lg">We only accept reservation before 17:00 Tables held for 30 minutes only from reservation time.</p>
          <p className="lh-lg">
            <span>Dress code applies </span>: Smart Casual, no singlets, flips flops, sport shorts. Reservations are required</p>
            <ButtonSect textBtn="reserve table" colorBtn="rgb(255, 212, 76)"/>
        </div>
        <div className='col text-view'>
          <h1 className="fs-4 mb-4 text-uppercase">CONTACT INFO</h1>
          <ul className="">
            <li className="list-getto list-group-item d-flex justify-content-between align-items-center">
            <FaLocationArrow  className='icon-getto text-white'/>

              <div className="d-flex  flex-column my-3">

                <span className="fw-bold" style={{fontSize:"14px"}}>Recibo Restaurant</span> 
                <span className="" style={{fontSize:"14px"}}>Recibo, 99 Knightsbridge, London</span>
              </div>
            
            </li>
           
            <li className="list-getto list-group-item d-flex justify-content-between align-items-center">
            <BsFillTelephoneFill className='icon-getto text-white '/>
            <span className="" style={{fontSize:"14px"}}>+44-30-3544-7658</span>
              </li>
            <li className="my-1 list-group-item d-flex justify-content-between align-items-center">
            <span className="" style={{fontSize:"14px"}}>
              +44-30-3874-7658
              </span>
              </li>
            <li className="my-3 list-group-item d-flex justify-content-between align-items-center">
            <span className="" style={{fontSize:"14px"}}>
              reservation@reciborestaurant.com
              </span>
              </li>
          </ul>
        </div>
        <div className='col text-view'>
        <h1 className="fs-4 mb-4 text-uppercase">OPENING HOUrS</h1>
        <ul className="">
          {listedates.map((item,index)=>{
            return(
              <Schedule day={item.day} time={item.time} key={index}/>
            )
          })}
         
          </ul>
        </div>
      </div>
      </div>
    </section>
  )
}

export default GetTous