import React, { FC, useState, useEffect } from "react";
import { Carousel, Row, Col, Button, Container } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";
import { api } from "../../Middleware/api_test";

const CoreCarusel: FC<PropsTheme> = ({ theme }) => {
  const style = {
    border: "1px solid #181D26",
    borderRadius: "10px",
    overflow: "hidden",
  };
  const [controls, setControls] = useState(false);
  const [slide, setSlide] = useState(0);
  const [info, setInfo] = useState(api.products[0]);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setControls(true);
    } else if (window.innerWidth > 1200) {
      setControls(false);
    }
  });

  useEffect(() => {
    setInfo(api.products[slide]);
  }, [slide]);

  const nextSlideHandle = () => {
    if (slide + 1 === api.products.length) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const prevSlideHandle = () => {
    if (slide - 1 < 0) {
      setSlide(api.products.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1200) {
      setControls(true);
    } else if (window.innerWidth > 1200) {
      setControls(false);
    }
  });

  const button_style = {
    Col: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Button: {
      border: "1px solid #181D26",
      fontSize: "63.07px",
      backgroundColor: "#272B35",
    },
  };

  const slideListener = (eventKey: number, event: Object | null) => {
    setSlide(eventKey);
  };

  return (
    <Container style={{ marginTop: "60px", marginBottom: "60px" }}>
      <Row>
        {!controls && (
          <Col style={button_style.Col}>
            <Button style={button_style.Button} onClick={prevSlideHandle}>
              {"<"}
            </Button>
          </Col>
        )}
        <Col sm={!controls ? 10 : 12}>
          <Row style={style} sm={2} xs={1}>
            <Col style={{ margin: 0, padding: 0 }} sm={8}>
              <Carousel
                activeIndex={slide}
                indicators={false}
                controls={controls}
                onSelect={slideListener}
              >
                {api.products.map((value) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={value.image}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col style={{ backgroundColor: "#2D333D" }} sm={4}>
              <Row>
                <p style={{ fontSize: "29.71px" }}>{info.name}</p>
              </Row>
              <Row>
                {info.description.map((value) => (
                  <p>{value}</p>
                ))}
              </Row>
              <Row
                style={{
                  margin: "0 0 16px 0",

                  backgroundColor: "#272B35",
                  border: "1px solid #181D26",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Col sm={8}>
                  <Row
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {info.price}
                  </Row>
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {info.type}
                  </Row>
                </Col>
                <Col
                  sm={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button>Purchase</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {!controls && (
          <Col style={button_style.Col}>
            <Button style={button_style.Button} onClick={nextSlideHandle}>
              {">"}
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CoreCarusel;
