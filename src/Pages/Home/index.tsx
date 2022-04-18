import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";
import Carusel from "../../Components/Carusel";
import Description from "./Description";
import Presentation from "./Presentation";
import Checkout from "../../Components/Checkout";

const CoreHome: FC<PropsTheme> = ({ theme }) => {
  return (
    <div style={{ color: theme.font }}>
      <Carusel theme={theme} />
      <Presentation />
      <Description />
      <Checkout />
    </div>
  );
};

export default CoreHome;
