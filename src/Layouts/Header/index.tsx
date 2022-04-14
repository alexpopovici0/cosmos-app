import React, { FC } from "react";
import Navbar from "../../Components/Navbar";
import { PropsTheme } from "../../Types/interfaces";

const CoreHeader: FC<PropsTheme> = ({ theme }) => {
  return <Navbar theme={theme} />;
};

export default CoreHeader;
