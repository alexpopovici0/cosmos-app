import React, { FC } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Checkout: FC = () => {
  const dispatch = useDispatch();

  const onclickHandle = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Container
      style={{
        padding: 0,
        marginBottom: "135px",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          backgroundColor: "#46C351",
          border: "none",
        }}
        onClick={onclickHandle}
      >
        Checkout
      </Button>
    </Container>
  );
};

export default Checkout;
