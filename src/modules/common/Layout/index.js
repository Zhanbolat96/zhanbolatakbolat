import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import "./styles.css";
import Burger from "../BurgerMenu";

const Layout = ({ children, variant }) => {
  if (variant) {
    return (
      <div className="layout-container-main">
        {children}
      </div>
    )
  }
  return (
    <>
      <Header />
      <div className="layout-container">
        <div className="main-container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
