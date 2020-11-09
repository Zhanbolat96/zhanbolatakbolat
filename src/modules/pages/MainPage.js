import React from 'react';
import { Link } from "react-router-dom";
import FoundationLogo from '../../assets/icons/NNFoundation.svg';
import ElUmitiLogo from '../../assets/icons/ElUmiti.svg';
import phoneLogo from "../../assets/icons/phone.svg";
import eyeLogo from "../../assets/icons/eye.svg";
import QabiletLogo from '../../assets/icons/QabiletLogo.svg';
import MynBalaLogo from '../../assets/icons/MynBala.svg';
import BirgeOky from '../../assets/icons/BirgeOqy.svg';
import ElbasyMedalLogo from '../../assets/icons/ElbasyMedal.svg';
import InstagramLogo from "../../assets/icons/instagram.svg";
import FacebookLogo from "../../assets/icons/facebook.svg";
import YouTubeLogo from "../../assets/icons/youtube.svg";
import VKLogo from "../../assets/icons/vk.svg";
import './styles.css';

const MainPage = () => {
  return (
    <>
      <div className="main_page">
        <div className="main_page_header">
          <img className="foundation-logo" src={FoundationLogo} alt="foundation-logo"/>
          <img className="el-umiti_logo" src={ElUmitiLogo} alt="el-umiti"/>
          <div className="header_info_block">
            <img src={phoneLogo} alt="phone-logo"/>
            <p className="phone_number">7170</p>
            <img className="eye_logo" src={eyeLogo} alt="eye-logo"/>
            <p className="header_languages">РУС</p>
          </div>
        </div>
        <p className="main_page_content">
          Инициатива El Úmiti - это единая система проектов, направленных на развитие будущего поколения
          лидеров и профессионалов страны. Она позволяет получить качественные знания и открывает мир возможностей
          для самореализации
        </p>
        <p className="main_page_title">Академия Елбасы</p>
        <div className="main_page_links">
          <Link
            className="main_page_link"
            to="/about-project"
          >
            Об инициативе EL ÚMITI
          </Link>
          <Link
            className="main_page_link"
            to="/about-academy"
          >
            Об Академии Елбасы
          </Link>
          <Link
            className="main_page_link"
            to="/educators"
          >
            Педагогам
          </Link>
          <Link
            className="main_page_link"
            to="/parents"
          >
            Родителям
          </Link>
          <Link
            className="main_page_link"
            to="/young"
          >
            Молодежь 10-29 лет
          </Link>
        </div>
        <div className="main_page_footer">
          <div className="main_page_footer_block">
            <img className="main_page_project-logo" src={QabiletLogo} alt="project-logo"/>
            <p className="main_page_project_text">узнайте свои <br/> сильные стороны</p>
          </div>
          <div className="main_page_footer_block">
            <img className="main_page_project-logo" src={MynBalaLogo} alt="project-logo"/>
            <p className="main_page_project_text">получите путевку в ведущие <br/> школы страны</p>
          </div>
          <div className="main_page_footer_block">
            <img className="main_page_project-logo" src={BirgeOky} alt="project-logo"/>
            <p className="main_page_project_text">прокачайте цифровые навыки и <br/> обучайтесь онлайн</p>
          </div>
          <div className="main_page_footer_block">
            <img className="main_page_project-logo" src={ElbasyMedalLogo} alt="project-logo"/>
            <p className="main_page_project_text">присоединяйтесь к самому <br/> масштабному challenge страны</p>
          </div>
        </div>
        <div className="main_page_footer_info">
          <div className="agreement">
            <p className="user_agreement">Пользовательское соглашение</p>
            <p className="faq">FAQ</p>
          </div>
          <div className="footer_block-item_contacts">
            <img className="footer_block-media" src={InstagramLogo} alt="social-media-logo"/>
            <img className="footer_block-media" src={FacebookLogo} alt="social-media-logo"/>
            <img className="footer_block-media" src={YouTubeLogo} alt="social-media-logo"/>
            <img className="footer_block-media" src={VKLogo} alt="social-media-logo"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;