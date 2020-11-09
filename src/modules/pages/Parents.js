import React from 'react';
import Projects from "./components/Projects";
import LightLogo from '../../assets/icons/lightIcon.svg';
import QabiletLogo from '../../assets/icons/QabiletLogo.svg';
import BirgeOqy from '../../assets/icons/BirgeOqy.svg';
import MynBalaLogo from '../../assets/icons/MynBala.svg';
import ElbasyMedalLogo from '../../assets/icons/ElbasyMedal.svg';
import './styles.css';

const Parents = () => {
  return (
    <div className="container">
      <div className="page">
        <p className="page_title">РОДИТЕЛЯМ</p>

        <p className="page_content">
          Академия Елбасы запустила несколько образовательных проектов для всестороннего и гармоничного
          развития будущих лидеров.
        </p>

        <p className="page_content-title">Цель:</p>
        <p className="page_content_list">
          • Предоставить равные возможности для молодежи Казахстана
        </p>
        <p className="page_content_list">
          • Обеспечить успешную навигацию во взрослую жизнь
        </p>
        <p className="page_content_list">
          • Сформировать устойчивые привычки к саморазвитию, выработать чувство дисциплины и ответственности
        </p>
        <p className="page_content_list">
          • Поднять уровень вовлеченности в жизнь общества и страны.
        </p>

        <p className="page_content-title_projects">ПРОЕКТЫ</p>
        <div className="projects">
          <Projects
            title="QABILET – служба диагностики способностей и профессиональной ориентации детей"
            content="Вы получите рекомендации по развитию ребёнка, дальнейшему обучению и поможете сделать
          осознанный выбор профессии."
            variant={false}
            href="/about-project"
            logo={QabiletLogo}
          />
          <Projects
            title="Онлайн школа «Birge oqý»"
            content="В онлайн школе лучшие педагоги страны проводят дистанционные уроки для учеников 6 и 7 классов сельских школ.
          Обучение проводится по адаптированной программе для обучающихся, с целью восполнения пробелов в предметных знаниях."
            variant
            href="/about-project"
            logo={BirgeOqy}
          />
          <Projects
            title='Национальная Олимпиада "Myń Bala"'
            content="Олимпиада Myń bala призвана ежегодно выявлять 1000 наиболее способных учащихся 5 и 6 классов
          из сельской местности, чтобы дать им возможность обучения в ведущих школах страны"
            variant
            href="/about-project"
            logo={MynBalaLogo}
          />
          <Projects
            title="Медаль Елбасы – программа развития для амбициозных казахстанцев"
            content="В проект приглашаются люди в возрасте от 14 до 29 лет, вне зависимости от места проживания,
          учебы и социального статуса. Участникам необходимо выбрать уровень – золото, серебро или бронза и начать
          развитие по 7 направлениям. Обладатели Медали Елбасы имеют преимущество при присуждении образовательных
          грантов в установленном законом порядке"
            variant
            href="/about-project"
            logo={ElbasyMedalLogo}
          />
        </div>

      </div>
      <div className="bg">
        <img src={LightLogo} alt="logo"/>
      </div>
    </div>
  );
}

export default Parents;


