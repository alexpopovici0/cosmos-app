import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { PropsTheme } from "../../Types/interfaces";

const CoreHome: FC<PropsTheme> = ({ theme }) => {
  const style = {
    font: theme.font,
  };

  return <Container style={{ color: style.font }}>this is home</Container>;
};

export default CoreHome;
