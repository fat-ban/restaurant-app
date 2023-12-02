
//image
import { imagesSlide } from '../../DataImg';
import iconMeal1 from '../../assets/icon-1.png'
import iconMeal2 from '../../assets/icon-2.png'
//import {Carousel} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

//icons
import {MdOutlineArrowForwardIos} from 'react-icons/md';
import {MdOutlineArrowBackIos} from 'react-icons/md';
import "./Header.css"





const Header = () => {

  
  return (
    <section className='header overflow-hidden'>
      
     {/*<Contact/> */}
     { /*<NavBar/>*/}
    {/*<h1 className='onTitle'>hello</h1>*/}
    <Swiper
       
       modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y,EffectFade]}
       spaceBetween={0}
       slidesPerView={1}
       centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
       }}
       loop={true}
       effect="fade"
      
   className="swiper-slide"
    >
      <div className='contact-div container '>

{/*<Contact/>*/}
      </div>
    {imagesSlide.map((itemSlide,index)=>{
      return(
       
      <SwiperSlide  key={index} className=" w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#ff5733' }}>
       <div className='img-slide w-100 d-flex  justify-content-center align-items-center'
       style={{
          backgroundImage :`url(${itemSlide.urlImg})`, height:"120vh",
          backgroundPosition:"center center", backgroundSize:"cover",backgroundRepeat:"no-repeat"
        }}>
       {/* <img src={itemSlide.urlImg} alt="slidimg"  className="w-100  h-100"/>*/}
       
       
        <div className='text-slid  d-flex flex-column justify-content-center align-items-center'>
       
       <h1 className='onTitle title-font d-flex text-capitalize fst-italic fs-sm-4' >
       {itemSlide.onTitle}</h1> 
   
        <h1 className='mainTitle title-font fst-italic text-capitalize fs-sm-5 '>{itemSlide.mainTitle}</h1>
        <h1 className='subTitle title-font text-capitalize fst-italic fs-md-4 '>{itemSlide.subTitle}</h1>
     
       </div>
        </div>
        </SwiperSlide>
       
       
        )
      })}
      <div className='button-next-slide '>
         <MdOutlineArrowForwardIos style={{fontSize:"65px"}}/>
      </div>
      <div className='button-prev-slide '>
        
        <MdOutlineArrowBackIos style={{fontSize:"65px"}}/>
      </div>
       </Swiper>
  
  </section>
  )
}

export default Header;