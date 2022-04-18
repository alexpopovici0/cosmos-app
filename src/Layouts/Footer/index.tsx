import React, { FC } from "react";
import { PropsTheme } from "../../Types/interfaces";
import { Container } from "react-bootstrap";

const CoreFooter: FC<PropsTheme> = ({ theme }) => {
  const style = {
    backgroundColor: theme.primary,
    color: theme.font,
    height: "294px",
  };

  return (
    <div style={{ ...style }}>
      <Container>
        <br />
        <br />
        <div style={{ maxWidth: "348px", fontSize: "12.5px" }}>
          Copyright COSMOS 2022. All rights reserved.
        </div>
        <br />
        <div style={{ maxWidth: "348px", fontSize: "12.5px" }}>
          All data and company references are purely fictitious and shouldn’t be
          confused with real world entities or names.
        </div>
      </Container>
    </div>
  );
};

export default CoreFooter;
