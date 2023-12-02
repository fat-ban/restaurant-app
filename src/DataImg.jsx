
//image slider
import sliderOne from './assets/slider-1.png';
import slidertwo from './assets/slider-2.png';
import sliderThree from './assets/slider-3.png';

/////
import recomImg1 from "./assets/recslid1.png";
import recomImg2 from "./assets/recslid2.png";
import recomImg3 from "./assets/recslid3.png";
import recomImg4 from "./assets/recslid4.png";
import recomImg5 from "./assets/recslid5.png";
import recomImg6 from "./assets/recslid6.png";
import recomImg7 from "./assets/recslid7.png";
/****GALLERY */
import recslid2 from "./assets/recslid2.png";
import recslid3 from "./assets/recslid3.png";
import gallery3 from "./assets/gallery3.png";
import gallery4 from "./assets/gallery4.png";
//import gallery5 from "../assets/gallery5.png";
import recslid5 from "./assets/recslid5.png";

/****TESTimonial */
import tes1 from "./assets/TES1.jpg";
import tes2 from "./assets/TES2.jpg";
import tes3 from "./assets/TES3.jpg";


export const arrayMeals = [
  { url: recomImg2,
    title:"TIRAMISU",
    description:"Espresso Coffee, Eggs, Cocoa",
  price:"$3.9",
  },
  { url: recomImg1,
    title:"RAINBOW MACAROON",
    description:"Macaroon, Berries, Cream",
    price:"$10",
  },
  { url: recomImg5,
    title:"AUSTRALIAN RIBEYE",
    description:"Chips, Beef, Salad",
    price:"$42", 
  },
  { url: recomImg7,
    title:"OAT CEREAL",
    description:"Oat, Banana, Cereal",
    price:"$2", 
  },
  { url: recomImg3 ,
    title:"JOHNNY WAFFLES",
    description:"Raspberries, Blueberry, Waffle, Vanilla",
    price:"$3"
  },
  { url: recomImg4,
    title:"MIXED FRUITS",
    description:"Raspberries, Blueberry, Honey",
    price:"$6,6", 
  },
  { url: recomImg6,
    title:"CUPCAKE WITH BERRIES",
    description:"Raspberries, Blueberry, Honey",
    price:"$5",
  },
 
];

export const arrayGallery = [
    { url: recslid2 },
    { url: recslid3 },
    { url: gallery3 },
    { url: gallery4 },
   
    { url: recslid5 },
    { url: recomImg6 },
 
   
  ];

  export const listedates =[
    {
      day:"Monday",
      time:"10:00 AM - 9:00 PM"
    },
    {
      day:"Tuesday",
      time:"CLOSED"
    },
    {
      day:"Wednesday",
      time:"10:00 AM - 9:00 PM"
    },
    {
      day:"Thursday",
      time:"10:00 AM - 9:00 PM"
    },
    {
      day:"Friday10",
      time:"10:00 AM - 9:00 PM"
    },
    {
      day:"Saturday",
      time:"09:00 AM - 11:00 PM"
    },
    {
      day:"Sunday",
      time:"09:00 AM - 11:00 PM"
    },
  ]
  export const testimonialPhoto = [
    { 
      url: tes1,
      name:"John Doe, Travelle" 
      
     },
    { 
      url: tes2,
     name:"Susan Smith, Journalist"
    },
    { 
      url: tes3,
      name:"Susan Smith, Journalist"
    },
    
  ];
  ////array slid
  export const imagesSlide = [{
    urlImg : sliderOne,
    onTitle:"taste of recibo",
    mainTitle:"started since",
    subTitle:"1938"
  },
  
  {
    urlImg : slidertwo,
    onTitle:"art of cooking",
    mainTitle:"all about passion",
    subTitle:"and love"
  }
  ,
  
  {
    urlImg : sliderThree,
    onTitle:"welcome to",
    mainTitle:"recibo",
    subTitle:"restaurant"
  }
  ]