import React, { FC, useRef, useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import imgCart from "../../Assets/Images/Navigation/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Services/Store/store";
import { getImage } from "../../Middleware/api_test";
import { PropsState } from "../../Types/interfaces";

const Cart: FC = () => {
  const theme = useSelector((value: RootState) => value.theme);
  const cart = useSelector((value: RootState) => value.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(0);

  useEffect(() => {
    let temp = 0;
    if (cart.length > 0) {
      cart.forEach((value) => {
        temp += value.quantity;
      });
    }
    setProducts(temp);
  }, [cart]);

  const removeProductHandle = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", value: id });
  };

  const totalSum = () => {
    let temp = 0;

    cart.forEach((element) => {
      temp = temp + element.quantity * element.price;
    });
    return temp;
  };

  const MODAL_STYLE = {
    backgroundColor: "#2D333D",
    border: "none",
    color: theme.font,
  };

  const COL_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const changeQuantity = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: PropsState
  ) => {
    dispatch({
      type: "UPDATE_QUANTITY_CART",
      value: { ...value, quantity: parseInt(e.target.value) },
    });
  };

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        ref={target}
        variant="cart"
        style={{
          background: "transparent",
          border: "none",
        }}
        onClick={() => setShow(!show)}
      >
        {products > 0 && (
          <div
            style={{
              position: "absolute",
              backgroundColor: "red",
              borderRadius: "20px",
              width: "13px",
              height: "13px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {products}
          </div>
        )}
        <img
          src={imgCart}
          style={{ height: "21px", width: "21px" }}
          alt="Cart"
        />
      </Button>

      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(!show)}
      >
        <Modal.Header closeButton style={MODAL_STYLE}>
          <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={MODAL_STYLE}>
          {cart.length > 0 ? (
            cart.map((value) => (
              <Row style={{ marginBottom: "10px" }}>
                <Col style={COL_STYLE}>
                  <img
                    src={getImage(value.id)}
                    style={{ maxHeight: "50px" }}
                    alt="icon"
                  />
                </Col>
                <Col style={COL_STYLE}>{value.name}</Col>

                <Col style={COL_STYLE}>
                  <Form.Control
                    type="number"
                    min="0"
                    value={value.quantity}
                    onChange={(e) => changeQuantity(e, value)}
                  />
                </Col>
                <Col style={COL_STYLE}>
                  <Button
                    onClick={() => removeProductHandle(value.id)}
                    variant="danger"
                  >
                    X
                  </Button>
                </Col>
              </Row>
            ))
          ) : (
            <h4>Cart is empty</h4>
          )}
        </Modal.Body>
        <Modal.Footer style={MODAL_STYLE}>
          {cart.length > 0 && (
            <>
              <div style={{ fontSize: "30px" }}>Total: {totalSum()} €</div>
              <Button
                style={{ backgroundColor: "#46C351", border: "none" }}
                onClick={() => {
                  setShow(!show);
                  dispatch({ type: "CLEAR_CART" });
                }}
              >
                Checkout
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
