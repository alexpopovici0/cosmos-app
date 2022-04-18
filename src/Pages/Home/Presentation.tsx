import React, { FC } from "react";
import { Container } from "react-bootstrap";
import Suicase from "../../Assets/Images/Main/suitcase.png";
import RocketShip from "../../Assets/Images/Main/rocketship.png";
import Leafs from "../../Assets/Images/Main/leafs.png";
import Arrow from "../../Assets/Images/Carusel/arrow.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Services/Store/store";

const order = [Suicase, Arrow, RocketShip, Arrow, Leafs, Arrow];

const Presentation: FC = () => {
  const mobile = useSelector((state: RootState) => state.mobile);
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        justifyContent: "space-between",
        marginBottom: "70px",
      }}
    >
      {order.map((image, index) => {
        const size = { height: "100px", transform: "" };
        if (image === Arrow) {
          size.height = "30px";
          size.transform = mobile ? "rotate(270deg)" : "scaleX(-1)";
        }

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={size}
              src={image}
              key={`presentation-${index}`}
              alt={`presentation-${index}`}
            />
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxHeight: "120px",
            width: "294px",
            backgroundColor: "#272B35",
            border: "1px solid #181D26",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              fontSize: "52px",
              fontWeight: "bold",
            }}
          >
            ENJOY
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              fontSize: "22px",
              position: "relative",
              bottom: "20px",
            }}
          >
            A NEW WORLD!
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Presentation;
