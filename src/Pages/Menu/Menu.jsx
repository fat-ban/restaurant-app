import { useEffect, useState } from "react"

import "./Menu.css"
import testimonialbg from "../../assets/testimonialbg.jpg"

//import ButtonSect from "../../Components/ButtonSect/ButtonSect"
import { BASE_URL } from "../../API/FetchData"
import ShowModal from "../../Components/ShowModal/ShowModal"


//import { arrayGallery } from "../../DataImg"

const Menu = () => {

  useEffect(() => {
  
    window.scroll(0,0)
  }, [])

  const [nameMeal, setNameMeal] = useState([])
  const [searchRecipe, setSearchRecipe] = useState("")
  const [show, setShow] = useState(false);
  const [clickRecipe, setClickRecipe] = useState("")

  
  //search food
const fetchSearchByNameMeal = async(evt) =>{
  if(evt.key== "Enter")
  {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${searchRecipe}`);
    const data = await res.json();
  setNameMeal(data.meals)
  console.log(data.meals)
  } catch (error) {
    console.log(error)
  }
}
}

 const handleClickeRecipe = (id) => {
  console.log(id);
  setShow(true)
  const itemClick = nameMeal.filter((item)=>id=== item.idMeal)
  setClickRecipe(itemClick[0])
 }
 
 console.log(clickRecipe) 
  return (
    <div className='bg-white menu-page ' >
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
              className="col pb-5  d-flex flex-column justify-content-center align-items-center"
              style={{ zIndex:"1" }}
            >
              
              <h1 className=" main-title-menu text-white text-capitalize mt-5 fs-sm-3 fs-lg-6" style={{  fontWeight: "800", lineHeight:"1.5"}}>Search your Food Recipe</h1>
              <div className="input-group form-search d-flex justify-content-center align-items-center ">
            
              <input type="text" className="input-search mt-3 py-4 border-0 rounded-pill form-control fs-6 text-center" 
              placeholder="Enter Your Recipe and press Enter"
              aria-describedby="basic-addon1"
               value={searchRecipe}
               onChange={(e)=>setSearchRecipe(e.target.value)}
              onKeyPress={fetchSearchByNameMeal}
              />
               </div>
            </div>
            
          </div>
        </div>
        </div>
        <div className="container">
            <div className="row mt-5">
         
          {(nameMeal == null) ? (
            <p className="main-title-menu text-darck text-capitalize mt-5 text-center" style={{fontSize:"8rem" , fontWeight: "800", lineHeight:"1.5"}}>Not found</p>
          ):(
            
          nameMeal ? (nameMeal.map((item,index)=>{
            return(
              
              <div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" key={index}>
              <div className="thumbnail">
                <div className="img-container">
                   <img src={item.strMealThumb} className="image" alt="..." />
                   <div className="overlay">
                    <div className="caption"> 
                    <p className="text-uppercase fs-6 fw-bold text-white" style={{fontFamily:"sans-serif",letterSpacing:"1.5px"}}>
                      {item.strMeal}</p>
                    
                    <p className="seemore pt-2" onClick={()=> handleClickeRecipe(item.idMeal)}> Show more</p>
                    
                    </div>
                   </div>
                </div>
              </div>
               
          </div>
            )
          })):(
            <p className="main-title-menu text-darck text-capitalize mt-5 text-center" style={{fontSize:"8rem" , fontWeight: "800", lineHeight:"1.5"}}>Loading Page...</p>

          ))}
          </div>
        </div>

           
          {/**call modal */}
          <ShowModal 
             show={show}
             setShow={setShow}
             clickRecipe={clickRecipe}
             setClickRecipe={setClickRecipe}
             
             
          />
  
    </div>
    
     
  )
}

export default Menu