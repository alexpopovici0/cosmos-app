import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";
import Carusel from "../../Components/Carusel";

const CoreHome: FC<PropsTheme> = ({ theme }) => {
  return (
    <div style={{ color: theme.font }}>
      <Carusel theme={theme} />
    </div>
  );
};

export default CoreHome;
