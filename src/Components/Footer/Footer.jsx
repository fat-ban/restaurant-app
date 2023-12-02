//icons
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaLocationArrow,FaLinkedinIn,FaPinterestP,FaTwitter,FaLink } from "react-icons/fa";
import { IoMdPhonePortrait,IoIosArrowForward  } from "react-icons/io"
import { SlEnvolopeLetter } from "react-icons/sl"


//images
import food1 from '../../assets/food1.jpg'

//style 
import './Footer.css' 



const Footer = () => {
  return (
    <section className='footer-section w-100 bg-dark py-5'>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col text-view">

          <h2 className="title-phone fs-4 mb-4 text-capitalize ms-4 mb-4 text-white">about us</h2>
        <ul className="text-secondary mt-5">
            <li className="list-getto list-group-item  d-flex justify-content-between align-items-center">
            <FaLocationArrow  className='icon-getto text-white mt-2 '/>

              
                <span className="ms-2" style={{fontSize:"14px"}}>Recibo, 99 Knightsbridge, London</span>
          
            
            </li>
           
            <li className="list-getto list-group-item ">
            <BsFillTelephoneFill className='icon-getto text-white mt-2 '/>

            <span className="ms-2" style={{fontSize:"14px",display:"inline-block"}}>+44-30-3544-7658</span>
              </li>
            <li className="my-1 list-group-item d-flex justify-content-between align-items-center">
            <IoMdPhonePortrait className='icon-getto text-white mt-2 ' />
            <span className="ms-2" style={{fontSize:"14px"}}>
              +44-30-3874-7658
              </span>
              </li>
            <li className="my-3 list-group-item d-flex justify-content-between align-items-center">
            <SlEnvolopeLetter className='icon-getto text-white mt-2 '/>
            <span className="ms-2" style={{fontSize:"14px"}}>
              reservation@reciborestaurant.com
              </span>
              </li>
              <li className="my-3 list-group-item d-flex justify-content-between align-items-center">
              <FaLink className='icon-getto text-white mt-2 me-2'/>
            <span className="ms-2" style={{fontSize:"14px"}}>
            http://reciborestaurantthemes.com              </span>
              </li>
              
          </ul>
          </div>
          
          <div className="col text-view">

          <h2 className="title-phone fs-4 mb-4 text-capitalize ms-4 mb-4 text-white">recent posts</h2>
        <ul className=" list-group-flush mt-5">
             <li className="list-getto-recent   list-group-item d-flex justify-content-start align-items-center">
                 <IoIosArrowForward className='icon-getto mt-2 text-white '/>
                 <span className="liste-footer border-bottom border-secondary pb-3" style={{fontSize:"14px",display:"inline-block"}}>
                  Sem Porta Mollis Parturient</span>
              </li>
           
            <li className="list-getto-recent  list-group-item d-flex justify-content-start align-items-center ">
                 <IoIosArrowForward  className='icon-getto  text-white mt-4 '/>
                 <span className="liste-footer border-bottom border-secondary py-3" style={{fontSize:"14px",display:"inline-block"}}>
                 
                  Nullam Lorem Mattis Purus</span>
            </li>
            <li className="list-getto-recent list-group-item d-flex justify-content-start align-items-center">
                <IoIosArrowForward  className='icon-getto  text-white mt-4'/>
               <span className="liste-footer py-3 border-bottom border-secondary " style={{fontSize:"14px",display:"inline-block"}}>
                
                Nibh Sem Sit Ullamcorper</span>
              </li>
              <li className="list-getto-recent  list-group-item d-flex justify-content-start align-items-center ">
            <IoIosArrowForward  className='icon-getto  text-white mt-4'/>
            <span className="liste-footer py-3 border-bottom border-secondary" style={{fontSize:"14px",display:"inline-block"}}>
              
              Donec luctus imperdiet</span>
              </li>
             
          </ul>
          </div>
      
          <div className="col-lg-6 text-view">
          <h2 className="title-phone fs-4 mb-4 text-capitalize mb-4 text-white">Award Winning</h2>
          
          <div className="row">
            
            <div className="col ">
              
              <div className=" w-100 my-4" 
              //style={{height:"250px"}}
              style={{
                 height: "100px",
                 backgroundImage: `url(${food1})`,
         //height:"100vh",
                 backgroundPosition: "center center",
                 backgroundSize: "contain",
                 backgroundRepeat: "no-repeat",
                 overflow: "hidden",
               }}
              >
              {/*<img src={food1} alt=".." className="w-100 h-100" style={{objectFit:"contain"}}/>*/}
            </div>
          
            </div>
            
          </div>
          <div className="row">
          <div className="col ">
            <div className="container">
          <span className="text-secondary" style={{fontSize:"14px"}}>
          Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.
          </span>
          </div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
      <div className="copyright w-100  py-2" >
        <div className="container">
          <div className="row">
          

            <div className="col d-flex">
            <p className="mx-2"><FaFacebookF className=" icon-social" size={12} style={{opacity:'0.5'}}/></p>
            <p className="mx-2"><FaTwitter className=" icon-social" size={12} style={{opacity:'0.5'}}/></p>
            <p className="mx-2"><FaLinkedinIn className=" icon-social" size={12} style={{opacity:'0.5'}}/></p>
            <p className="mx-2"><FaGooglePlusG className=" icon-social" size={12} style={{opacity:'0.5'}}/></p>
            <p className="mx-2"><FaPinterestP className=" icon-social" size={12} style={{opacity:'0.5'}}/></p>
           
            </div>
            <div className="col d-flex justify-content-end">
              <p className="text-light" style={{fontSize:"12px",opacity:'0.5'}}>Copyright 2019 max-themes. All Right Revered.</p>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Footer