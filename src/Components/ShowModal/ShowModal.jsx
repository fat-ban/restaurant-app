import { Button, Modal } from "react-bootstrap";

import "./ShowModal.css";
//import ButtonSect from "../ButtonSect/ButtonSect"

const ShowModal = ({ show, setShow, setClickRecipe, clickRecipe }) => {
  console.log(clickRecipe);

  const handleClose = () => {
    setShow(false);
    setClickRecipe("");
  };
  //const onHide =() => setShow(false)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-recipe"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="row">
            <div className="col-6">
              <img
                src={clickRecipe.strMealThumb}
                className="img-fluid"
                alt="..."
                width={80}
                height={80}
              />
            </div>
            <div
              className="col-6 text-uppercase fs-3 fw-bold"
              style={{ fontFamily: "sans-serif", letterSpacing: "1.5px" }}
            >
              <h3>{clickRecipe.strMeal}</h3>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{clickRecipe.strCategory}</h4>
        <p>{clickRecipe.strInstructions}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowModal;
