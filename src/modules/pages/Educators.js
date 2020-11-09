import React from 'react';
import LightLogo from '../../assets/icons/lightIcon.svg';
import './styles.css';

const Educators = () => {
  return (
    <div className="container">
      <div className="page">
        <p className="page_title">ПЕДАГОГАМ</p>

        <p className="page_content">
          В рамках реализации инициативы “El Úmiti” Академия Елбасы подготовила ряд возможностей для
          развития педагогических компетенций:
        </p>

        <p className="page_content-title">Создание интерактивных онлайн-уроков</p>
        <p className="page_content">
          Вы научитесь создавать авторские онлайн уроки. С их помощью вы можете сократить время на подготовку и
          проверку заданий, внедрить современные образовательные форматы в процесс обучения, сделать уроки
          интересными и динамичными.
        </p>

        <p className="page_content-title">Преподавание в онлайн школе</p>
        <p className="page_content">
          Вы повысите уровень цифровых навыков, получите методическую поддержку от прогрессивных педагогов и
          внедрите современные педагогические подходы в процесс обучения.
        </p>

        <p className="page_content-title">Сообщество ведущих педагогов</p>
        <p className="page_content">
          Мы формируем базу экспертов, которые знают, как сделать образование эффективным и могут поделиться
          знаниями с другими.
        </p>

        <p className="page_content-title">Дискуссионные площадки</p>
        <p className="page_content">
          Вы можете не только смотреть вебинары, участвовать в дискуссиях и перенимать опыт лучших мировых
          педагогов и экспертов, но и быть их авторами и ретранслировать свои идей.
        </p>

      </div>
      <div className="bg">
        <img src={LightLogo} alt="logo"/>
      </div>
    </div>
  );
}

export default Educators;


