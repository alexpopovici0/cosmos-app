import React, { FC } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Services/Store/store";

const Checkout: FC = () => {
  const dispatch = useDispatch();

  const onclickHandle = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const mobile = useSelector((state: RootState) => state.mobile);

  const center = mobile && {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Container
      style={{
        padding: 0,
        marginBottom: "135px",
        marginTop: "20px",
        ...center,
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
