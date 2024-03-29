import styles from "./footer.module.scss";

import logo from "../../assets/logo.svg";

import logoGray from "../../assets/logo_gray.svg";

const footerCatalog = [
  {
    id: 1,
    title: "Женщинам",
    list: [
      { id: 1, title: "Одежда", link: "##" },
      { id: 2, title: "Обувь", link: "##" },
      { id: 3, title: "Аксессуары", link: "##" },
      { id: 4, title: "Белье", link: "##" },
      { id: 5, title: "Bra fitting", link: "##" },
    ],
  },
  {
    id: 2,
    title: "Мужчинам",
    list: [
      { id: 1, title: "Одежда", link: "##" },
      { id: 2, title: "Обувь", link: "##" },
      { id: 3, title: "Аксессуары", link: "##" },
      { id: 4, title: "Белье", link: "##" },
    ],
  },
  {
    id: 3,
    title: "Детям",
    list: [
      { id: 1, title: "Одежда", link: "##" },
      { id: 2, title: "Обувь", link: "##" },
      { id: 3, title: "Аксессуары", link: "##" },
      { id: 4, title: "Белье", link: "##" },
      { id: 5, title: "Игрушки", link: "##" },
      { id: 6, title: "Малыши", link: "##" },
    ],
  },
  {
    id: 4,
    title: "Виды спорта",
    list: [
      { id: 1, title: "Велоспорт", link: "##" },
      { id: 2, title: "Туризм", link: "##" },
      { id: 3, title: "Тренажеры и фитнес", link: "##" },
      { id: 4, title: "Командные виды спорта", link: "##" },
      { id: 5, title: "Самокаты", link: "##" },
    ],
  },
];

const links = [
  {
    id: 1,
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_6_4467" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6295 13.3338H4.3702C4.1662 13.3338 4.0002 13.1844 4.0002 13.0004V3.00044C4.0002 2.81644 4.1662 2.6671 4.3702 2.6671H7.33354V5.43377C7.33354 6.48177 8.14487 7.33377 9.14287 7.33377H12.0002V13.0004C12.0002 13.1844 11.8335 13.3338 11.6295 13.3338ZM11.7662 6.00044H9.14287C8.8802 6.00044 8.66687 5.74644 8.66687 5.43377V2.6671H8.74154L11.7662 6.00044ZM13.1602 5.55244L9.53087 1.55244C9.40487 1.4131 9.22554 1.33377 9.03687 1.33377H4.3702C3.43087 1.33377 2.66687 2.08177 2.66687 3.00044V13.0004C2.66687 13.9191 3.43087 14.6671 4.3702 14.6671H11.6295C12.5689 14.6671 13.3335 13.9191 13.3335 13.0004V6.00044C13.3335 5.83444 13.2715 5.6751 13.1602 5.55244Z" fill="#071435"/>
  </mask>
  <g mask="url(#mask0_6_4467)">
  <rect width="16" height="16" transform="translate(0 0.000427246)" fill="#77829E"/>
  </g>
  </svg>`,
    text: "PDF  презентация",
    link: "##",
  },
  { id: 2, icon: "", text: "Видео инструкция ", link: "##" },
  { id: 3, icon: "", text: "FAQ", link: "##" },
  { id: 4, icon: "", text: "Мы на YouTube", link: "##" },
  { id: 5, icon: "", text: "Политика конфиденциальности ", link: "##" },
  { id: 6, icon: "", text: "Лицензионное соглашение", link: "##" },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="horizontalDivider"></div>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <a href="##" className={styles.footerLogoLink}>
            <img src={logo} alt="Логотип Compo" className={styles.logo} />
          </a>
          <div className={styles.phoneContainer}>
            <a href="tel:+78008419595" className="h5">
              8 800 841-95-95
            </a>
            <p className={styles.footerTopLeftText}>Служба поддержки</p>
          </div>
          <div className={styles.mailContainer}>
            <a href="mailto:support@sport.ru" className="h5">
              support@sport.ru
            </a>
            <p className={styles.footerTopLeftText}>Служба поддержки</p>
          </div>
        </div>
        <div className={styles.footerTopRight}>
          <ul className={styles.footerTopRightList}>
            <li className={styles.footerTopRightItem}>
              <a href="##" className={`${styles.footerTopRightItem} h5`}>
                Вакансии
              </a>
            </li>
            <li className={styles.footerTopRightItem}>
              <a href="##" className={`${styles.footerTopRightItem} h5`}>
                Блог
              </a>
            </li>
            <li className={styles.footerTopRightItem}>
              <a href="##" className={`${styles.footerTopRightItem} h5`}>
                Акции
              </a>
            </li>
            <li className={styles.footerTopRightItem}>
              <a
                className={`${styles.footerTopRightItem} ${styles.footerTopRightLastItem}`}
                href="##"
              >
                Предложить идею
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="horizontalDivider"></div>
      <ul className={styles.catalogLinksContainer}>
        {footerCatalog.map((item) => (
          <li key={item.id} className={styles.footerCatalogItem}>
            <p className={styles.footerCatalogTitle}>{item.title}</p>
            <ul className={styles.catalogItemList}>
              {item.list.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className={styles.footerCatalogLink}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="horizontalDivider"></div>
      <div className={styles.footerBottom}>
        <ul className={styles.linksList}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link} className={styles.link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.politics}>
          Настоящая Политика обработки персональных данных разработана в
          соответствии с Конституцией Российской Федерации, Трудовым кодексом
          Российской Федерации, Гражданским кодексом Российской Федерации,
          Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
          информационных технологиях и о защите информации",
        </p>
        <div className={styles.company}>
          <img
            src={logoGray}
            alt="Логотип Compo"
            className={styles.companyLogo}
          />
          <p className={`${styles.companyName} h6`}>Разработка платформы</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
