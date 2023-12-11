import { useEffect,useState } from 'react';

import './Home.css';



import Header from '../../Components/Header/Header';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Recommends from '../../Components/Recommends/Recommends';
import Ingredient from '../../Components/Ingredient/Ingredient';

import Promotion from '../../Components/Promotion/Promotion';
import Gallery from '../../Components/Gallery/Gallery';
import GetTous from '../../Components/GetTous/GetTous';
import Testimonial from '../../Components/Testimonial/Testimonial';

//icon
import { FaArrowUp } from "react-icons/fa6";

const Home = ({mealsCategories}) => {
  const [scrollTop, setScrollTop] = useState(false)


   const goTopHandler = ()=>{
     window.scroll(0,0)
   }
    useEffect(() => {
     goTopHandler()
    }, [])

    const showScrollBtn =()=>{
      if(window.scrollY >= 90){
    
        setScrollTop(true)
      }else{
        setScrollTop(false)
      }
    }

    window.addEventListener("scroll", showScrollBtn)
    console.log(scrollTop)

    const handleClickScroll=()=>{
     
        goTopHandler()
  }
 
  return (
    <div className='home-page'>
     
        <Header/>
        <AboutUs/>
        <Recommends 
         mealsCategories={mealsCategories}
        />
        <Ingredient/>
        <Promotion/>
        <GetTous/>
        <Gallery/>
        <Testimonial/>
        <span className={scrollTop ? 'btn-top btn-top-show' : 'btn-top btn-top-notshow'}
        onClick={handleClickScroll}
        >
          <FaArrowUp />
       
        </span>
      
    </div>
  )
}

export default Home;
