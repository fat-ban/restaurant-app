//import { Button } from "react-bootstrap"
import "./ButtonSect.css"



const ButtonSect = ({textBtn,colorBtn , handleBtn}) => {
  return (
    <button
                    //type="button"
                    //className=" btn-text  px-4 py-3 mt-3"
                    className=" btn-text  mt-3"
                    style={{color:`${colorBtn}`}}
                    onClick={handleBtn}
                  >
                    {textBtn}
    </button>
          
        
)}

export default ButtonSect