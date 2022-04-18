import React, { FC } from "react";
import { Container } from "react-bootstrap";
import Suicase from "../../Assets/Images/Main/suitcase.png";
import RocketShip from "../../Assets/Images/Main/rocketship.png";
import Leafs from "../../Assets/Images/Main/leafs.png";
import Arrow from "../../Assets/Images/Carusel/arrow.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Services/Store/store";

const ORDER = [
  { icon: Suicase, name: "pack" },
  { icon: Arrow },
  { icon: RocketShip, name: "fly" },
  { icon: Arrow },
  { icon: Leafs, name: "live" },
  { icon: Arrow },
];

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
      {ORDER.map((image, index) => {
        const size = { height: "100px", transform: "" };
        if (image.icon === Arrow) {
          size.height = "30px";
          size.transform = mobile ? "rotate(270deg)" : "scaleX(-1)";
        }

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={size}
              src={image.icon}
              key={`presentation-${index}`}
              alt={`presentation-${index}`}
            />
            {image.name && (
              <div style={{ fontSize: "24px" }}>
                <b>{image.name.substring(0, 1)}</b>
                {image.name.substring(1, image.name.length)}
              </div>
            )}
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
