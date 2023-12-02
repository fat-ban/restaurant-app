import { useState } from "react";

import "./NavBar.css";

import { Container, Navbar, Nav} from "react-bootstrap";

import { AiOutlineMenu } from "react-icons/ai";
//react-router
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

const NavBar = () => {

  const [color, setColor] = useState(false);


  //controle screen
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <Navbar
        expand="md"
        className=" navbar-rest   fixed-top py-4 px-5"
        style={
          !color
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "#000" }
        }
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="auto"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon text-white z-index">
              <AiOutlineMenu />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" className=" text-uppercase  fw-bold  fs-6">
              <NavLink
             to="/"
               className="link-navabar main-text-link text-white text-decoration-none pb-2"
               style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
  }}
>
 Home
</NavLink>{" "}
              </Nav.Link>
              <Nav.Link
                href="#features"
                className=" text-uppercase  fw-bold fs-6 mx-2"
                //onClick={handleClickNavbar}
              >
                <NavLink
                  to="/menu"
                  className="link-navabar text-link text-decoration-none  mx-2 pb-2"
                >
                  menu
                </NavLink>
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className=" text-uppercase  fw-bold  fs-6 me-2"
              >
                <NavLink
                  to="/chefs"
                  className="link-navabar text-link text-decoration-none  me-2 pb-2"
                >
                  chefs
                </NavLink>
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="text-uppercase  fw-bold fs-6 me-2"
              >
                <NavLink
                  to="/reservation"
                  className="link-navabar text-link text-decoration-none  me-2 pb-2"
                >
                  reservation
                </NavLink>
              </Nav.Link>

              <Nav.Link
                href="#pricing"
                className=" text-uppercase  fw-bold fs-6 me-2"
              >
                <NavLink
                  to="/blog"
                  className="link-navabar text-link text-decoration-none  me-2 pb-2"
                >
                  blog
                </NavLink>
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className=" text-uppercase  fw-bold fs-6 "
              >
                <NavLink
                  to="/contacts"
                  className="link-navabar text-link text-decoration-none pb-2"
                >
                  contacts
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>

     

     
    </>
  );
};

export default NavBar;
