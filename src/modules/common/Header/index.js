import React from 'react';
import { NavLink, Link } from "react-router-dom";
import headerLogo from '../../../assets/icons/headerLogo.svg';
import phoneLogo from '../../../assets/icons/phone.svg';
import eyeLogo from '../../../assets/icons/eye.svg';
import mobileheaderLogo from '../../../assets/mobileIcons/headerLogo.svg'
import './styles.css';
import Burger from "../BurgerMenu";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={headerLogo} alt="header-logo"/>
        </Link>
        <div className="header_links">
          <NavLink
            className="header_link"
            activeClassName="header_link-active"
            to="/about-project"
          >
            Об инициативе EL ÚMITI
          </NavLink>
          <NavLink
            className="header_link"
            activeClassName="header_link-active"
            to="/about-academy"
          >
            Об Академии Елбасы
          </NavLink>
          <NavLink
            className="header_link"
            activeClassName="header_link-active"
            to="/educators"
          >
            Педагогам
          </NavLink>
          <NavLink
            className="header_link"
            activeClassName="header_link-active"
            to="/parents"
          >
            Родителям
          </NavLink>
          <NavLink
            className="header_link"
            activeClassName="header_link-active"
            to="/young"
          >
            Молодежь 10-29 лет
          </NavLink>
        </div>
        <div className="header_info">
          <img src={phoneLogo} alt="phone-logo"/>
          <p className="phone_number">7170</p>
          <img className="eye_logo" src={eyeLogo} alt="eye-logo"/>
          <p className="header_languages">РУС</p>
        </div>
      </div>
      <div className="mobile_container">
        <img src={mobileheaderLogo} alt="mobile-header"/>
        <Burger />
      </div>
    </div>
  );
}

export default Header;