import React, { FC, useState, useEffect, useRef } from "react";
import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";
import { api } from "../../Middleware/api_test";
import { CarouselRef } from "react-bootstrap/esm/Carousel";
import arrow from "../../Assets/Images/Carusel/arrow.png";
import { RootState } from "../../Services/Store/store";
import { useSelector, useDispatch } from "react-redux";

const CoreCarusel: FC<PropsTheme> = ({ theme }) => {
  const style = {
    border: "1px solid #181D26",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const dispatch = useDispatch();
  const controls = useSelector((state: RootState) => state.carusel);
  const cart = useSelector((state: RootState) => state.cart);
  const [slide, setSlide] = useState(0);
  const [info, setInfo] = useState(api.products[0]);
  const ref = useRef<CarouselRef>(null);
  const [priceFontSize, setPriceFontSize] = useState("30px");

  useEffect(() => {
    resizeText(info.price);
  }, [info]);

  useEffect(() => {
    setInfo(api.products[slide]);
  }, [slide]);

  const nextSlideHandle = () => {
    ref.current?.next();
  };

  const prevSlideHandle = () => {
    ref.current?.prev();
  };

  const purchaseHandle = () => {
    let quantity = 0;
    cart.forEach((value) => {
      if (value.id === info.id) {
        quantity = value.quantity;
      }
    });
    if (quantity > 0) {
      dispatch({
        type: "UPDATE_QUANTITY_CART",
        value: {
          id: info.id,
          name: info.name,
          quantity: quantity + 1,
        },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        value: { id: info.id, name: info.name, quantity: 1, icon: info.image },
      });
    }
  };

  const BUTTON_STYLE = {
    Button: {
      border: "1px solid #181D26",
      backgroundColor: "#272B35",
      width: "53px",
      height: "50px",
    },
  };

  const resizeText = (text: string) => {
    const height = document.getElementById("price-row")?.offsetHeight;
    if (height != null && height > 46) {
      setPriceFontSize("20px");
    } else {
      setPriceFontSize("30px");
    }
  };

  const slideListener = (eventKey: number, event: Object | null) => {
    setSlide(eventKey);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!controls && (
        <Button style={BUTTON_STYLE.Button} onClick={prevSlideHandle}>
          <img style={{ height: "30px" }} src={arrow} alt="arrow" />
        </Button>
      )}
      <Container
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <Row style={style} lg={2} sm={1} md={1} xs={1}>
          <Col style={{ margin: 0, padding: 0 }} lg={9}>
            <Carousel
              ref={ref}
              activeIndex={slide}
              indicators={false}
              controls={controls}
              onSelect={slideListener}
            >
              {api.products.map((value) => (
                <Carousel.Item>
                  <div
                    style={{ position: "absolute", top: "5%", left: "2.5%" }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <b
                        style={{
                          textTransform: "uppercase",
                        }}
                      >
                        {value.name}
                      </b>
                      <br />
                      {value.system}
                      <br />
                      Distance:{value.system}
                      <br />
                      AUPopulation:{value.aupopulation}
                    </div>
                  </div>
                  <img
                    className="d-block w-100"
                    key={value.name}
                    style={{ aspectRatio: "16/9" }}
                    src={value.image}
                    alt="Slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col
            style={{
              backgroundColor: "#2D333D",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            lg={3}
          >
            <Row>
              <p style={{ fontSize: "30px" }}>
                <b>{info.name.substring(0, 1)}</b>
                {info.name.substring(1, info.name.length)}
              </p>
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
              xl={2}
              lg={1}
              sm={2}
              md={2}
              xs={1}
            >
              <Col sm={8} md={8} xl={8}>
                <Row
                  id="price-row"
                  style={{
                    fontSize: priceFontSize,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowWrap: "normal",
                    minHeight: "45px",
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
                md={4}
                xl={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ backgroundColor: "#46C351", border: "none" }}
                  onClick={purchaseHandle}
                >
                  Purchase
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {!controls && (
        <Button style={BUTTON_STYLE.Button} onClick={nextSlideHandle}>
          <img
            src={arrow}
            style={{ transform: "scaleX(-1)", height: "30px" }}
            alt="arrow"
          />
        </Button>
      )}
    </div>
  );
};

export default CoreCarusel;
