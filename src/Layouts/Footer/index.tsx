import React, { FC } from "react";
import { PropsTheme } from "../../Types/interfaces";
import { Container } from "react-bootstrap";

const CoreFooter: FC<PropsTheme> = ({ theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.primary,
        color: theme.font,
        width: "100vw",
        height: "294px",
      }}
    >
      <Container>
        <div>Copyright COSMOS 2022. All rights reserved.</div>
        <div>
          All data and company references are purely fictitious and shouldn’t be
          confused with real world entities or names.
        </div>
      </Container>
    </div>
  );
};

export default CoreFooter;
