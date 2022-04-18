import React, { FC } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";
import Planet from "../../Assets/Images/Navigation/planet.png";
import Spaceship from "../../Assets/Images/Navigation/spaceship.png";
import Home from "../../Assets/Images/Navigation/home.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Services/Store/store";
import Cart from "../Cart";

const CoreNavbar: FC<PropsTheme> = ({ theme }) => {
  const mobile = useSelector((state: RootState) => state.mobile);

  const style = {
    backgroundColor: theme.primary,
  };
  const font = {
    color: theme.font,
  };

  const ICON_STYLE = { height: "21px", width: "21px", marginRight: "2px" };

  return (
    <Navbar expand="lg" style={style}>
      <Container>
        <Navbar.Toggle
          style={{ border: "none" }}
          aria-controls="basic-navbar-nav"
        >
          <i
            className="bi bi-list"
            style={{ color: theme.font, fontSize: "40px", border: "none" }}
          ></i>
        </Navbar.Toggle>
        <Navbar.Brand
          style={{ ...font, fontSize: "min(5vw,36px)" }}
          href="#home"
        >
          <b>C</b>O<b>SM</b>O<b>S</b>
        </Navbar.Brand>
        {mobile && <Cart />}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={font} href="#home">
              <img src={Home} style={ICON_STYLE} alt="Home" />
              Home
            </Nav.Link>
            <Nav.Link style={font} href="#destination">
              <img src={Planet} style={ICON_STYLE} alt="Planet" />
              Destination
            </Nav.Link>

            <Nav.Link style={font} href="#spaceship">
              <img src={Spaceship} style={ICON_STYLE} alt="Spaceship" />
              Spaceship
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {!mobile && <Cart />}
      </Container>
    </Navbar>
  );
};

export default CoreNavbar;
