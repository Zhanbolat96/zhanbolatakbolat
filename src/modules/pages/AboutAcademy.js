import React from 'react';
import LightLogo from "../../assets/icons/lightIcon.svg";
import './styles.css';

const AboutAcademy = () => {
  return (
    <div className="container">
      <div className="page">
        <p className="page_title">ОБ АКАДЕМИИ ЕЛБАСЫ</p>

        <p className="page_quotes">
          “Мы - конкретная, точечная помощь в развитии отдельных талантов и, в то же время, мы – система
          тотального содействия в развитии всех высокопотенциальных граждан Республики Казахстан.”
        </p>

        <p className="page_content">
          Корпоративный фонд «Академия Елбасы» является организацией, которая в сотрудничестве с партнерами и
          заинтересованными сторонами координирует реализацию проектов в рамках инициативы «El Úmiti»,
          направленных на развитие человеческого капитала на благо Казахстана.
        </p>

        <p className="page_content-title">Видение Академии Елбасы</p>
        <p className="page_content">
          Академия интегрирует в единую систему проекты, направленные на развитие будущего поколения лидеров и
          профессионалов страны. Академия активно инициирует разработку новых проектов, направленных на развитие
          социально-ответственных, способных и мотивированных к самосовершенствованию граждан страны.
        </p>

        <p className="page_content-title">Для этого Академия:</p>
        <p className="page_content_list">
          • Привлекает лучших экспертов и специалистов в развитии способностей людей
        </p>
        <p className="page_content_list">
          • Объединяет и активно взаимодействует с партнерами, занимающимися развитием способностей и потенциала людей
        </p>
        <p className="page_content_list">
          • Оказывает поддержку и создает условия для развития тем гражданам, которые обладают высокими
          способностями и готовы вносить свой вклад в развитие страны
        </p>
        <p className="page_content_list">
          • Постоянно изучает потребности общества и государства
        </p>

      </div>
      <div className="bg">
        <img src={LightLogo} alt="logo"/>
      </div>
    </div>
  );
}

export default AboutAcademy;