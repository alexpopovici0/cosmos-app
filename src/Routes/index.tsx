import React, { FC, useEffect } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Services/Store/store";
import mobile_actions from "../Services/Store/Actions/mobile";
import carusel_actions from "../Services/Store/Actions/carusel";

const CoreRoutes: FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const resizeListener = () => {
    const width = window.innerWidth;

    if (width < 992) {
      dispatch(mobile_actions.true);
    } else if (width > 992) {
      dispatch(mobile_actions.false);
    }

    if (width < 1300) {
      dispatch(carusel_actions.true);
    } else if (width > 1300) {
      dispatch(carusel_actions.false);
    }
  };

  useEffect(() => {
    resizeListener();
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  window.addEventListener("resize", () => {
    clearTimeout();
    setTimeout(resizeListener, 100);
  });

  const theme = useSelector((state: RootState) => state.theme);

  document.getElementsByTagName("body")[0].style.backgroundColor =
    theme.secondary;

  return (
    <BrowserRouter>
      <Header theme={theme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
      </Routes>
      <Footer theme={theme} />
    </BrowserRouter>
  );
};

export default CoreRoutes;
