import React, { FC } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "../Services/Store/store";

const CoreRoutes: FC = () => {
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
