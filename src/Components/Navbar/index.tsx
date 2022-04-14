import React, { FC, useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";
import Cart from "../../Assets/Images/Navigation/cart.png";
import Planet from "../../Assets/Images/Navigation/planet.png";
import Spaceship from "../../Assets/Images/Navigation/spaceship.png";
import Home from "../../Assets/Images/Navigation/home.png";

const CoreNavbar: FC<PropsTheme> = ({ theme }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const changeSwitchHandle = (event: React.FormEvent<HTMLInputElement>) => {
    setIsSwitchOn(!isSwitchOn);
  };

  const style = {
    backgroundColor: theme.primary,
  };
  const font = {
    color: theme.font,
  };

  useEffect(() => {
    console.log(isSwitchOn);
  }, [isSwitchOn]);

  return (
    <Navbar expand="lg" style={style}>
      <Container>
        <Navbar.Brand style={{ ...font, fontWeight: "bold" }} href="#home">
          COSMOS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={font} href="#home">
              <img src={Home} alt="Home" />
              Home
            </Nav.Link>
            <Nav.Link style={font} href="#link">
              <img src={Planet} alt="Planet" />
              Destination
            </Nav.Link>

            <Nav.Link style={font} href="#link">
              <img src={Spaceship} alt="Planet" />
              Spaceship
            </Nav.Link>

            <Nav.Link style={font} href="#link">
              <img src={Cart} alt="Planet" />0
            </Nav.Link>

            <Form.Check
              type="switch"
              checked={isSwitchOn}
              onChange={changeSwitchHandle}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CoreNavbar;
