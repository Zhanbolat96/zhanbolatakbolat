import React from 'react';
import { Link } from "react-router-dom";
import InstagramLogo from '../../../assets/icons/instagram.svg';
import FacebookLogo from '../../../assets/icons/facebook.svg';
import YouTubeLogo from '../../../assets/icons/youtube.svg';
import VKLogo from '../../../assets/icons/vk.svg';
import PhoneLogo from '../../../assets/icons/phone.svg';
import PlaceLogo from '../../../assets/icons/placement.svg';
import './styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="footer_block-title">Главная</p>
        <div className="footer_block-items">
          <Link className="footer_block-item" to="/about-project">Об инициативе</Link>
          <Link className="footer_block-item" to="/about-academy">Об академии</Link>
          <Link className="footer_block-item" to="/educators">Педагогам</Link>
          <Link className="footer_block-item" to="/parents">Родителям</Link>
          <Link className="footer_block-item" to="/young">Молодежь 10-29 лет</Link>
        </div>
      </div>
      <div>
        <p className="footer_block-title">Дополнительно</p>
        <div className="footer_block-items">
          <p className="footer_block-item">Политика модерации</p>
          <p className="footer_block-item">Пользовательское соглашение</p>
          <p className="footer_block-item">Партнеры</p>
          <p className="footer_block-item">FAQ</p>
        </div>
      </div>
      <div>
        <p className="footer_block-title">Наши проекты</p>
        <div className="footer_block-items">
          <p className="footer_block-item">Онлайн школа «Birge Oqý» Академии Елбасы</p>
          <p className="footer_block-item">
            17 региональных Центров выявления и поддержки одаренных детей и талантливой молодежи (Служба «Qabilet»)
          </p>
          <p className="footer_block-item">Национальная олимпиада «Myń Bala»</p>
        </div>
      </div>
      <div>
        <p className="footer_block-title">Контакты</p>
        <div className="footer_block-items">
          <div className="footer_block-item_contacts">
            <img className="footer_block-media" src={InstagramLogo} alt="social-media-logo"/>
            <img className="footer_block-media" src={FacebookLogo} alt="social-media-logo"/>
            <img className="footer_block-media" src={YouTubeLogo} alt="social-media-logo"/>
            <img className="footer_block-media" src={VKLogo} alt="social-media-logo"/>
          </div>
          <div className="footer_block-item_contacts">
            <img
              className="footer_block-item_phone-logo"
              src={PhoneLogo}
              alt="phone-logo"
            />
            Сall – центр 7170
          </div>
          <div className="footer_block-item_contacts">
            <img
              className="footer_block-item_phone-logo"
              src={PlaceLogo}
              alt="place-logo"
            />
            г. Нур-Султан, Мәңгілік Ел проспект, 55/13
          </div>
          <p className="footer_block-item_contacts">All Right Reserved - 2020</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;