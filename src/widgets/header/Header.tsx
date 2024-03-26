import styles from "./header.module.scss";

import logo from "../../assets/logo.svg";

import avatar from "../../assets/Avatar.png";

const linkList = [
  { id: 1, name: "Мои заказы", link: "##" },
  { id: 2, name: "Сотрудники", link: "##" },
  { id: 3, name: "Шаблоны заказов", link: "##" },
  { id: 4, name: "Обращения", link: "##" },
];

const Header = () => {
  return (
    <>
      <div className={styles.headerTop}>
        <a href="##" className={styles.logoLink}>
          <img
            className={styles.logo}
            src={logo}
            alt="Logo Compo"
            width={144}
          />
        </a>
        <button className={styles.menuButton}>
          <span className={styles.menuIcon}></span>
          <span className={`${styles.menuButtonText} lightText`}>Меню</span>
        </button>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите запрос"
          />
          <div className={styles.inputButtonsContainer}>
            <button
              className={`${styles.inputButton} ${styles.inputButtonCancel}`}
            ></button>
            <button
              className={`${styles.inputButton} ${styles.inputButtonSearch}`}
            ></button>
          </div>
        </div>
        <div className={styles.bell}></div>
        <div className={styles.divider}></div>
        <div className={styles.like}></div>
        <button className={styles.cart}>
          <span className={styles.cartIcon}></span>
          <span className={`${styles.cartPrice} blueText`}>144 235₽</span>
        </button>
        <div className={styles.user}>
          <img
            src={avatar}
            alt="Ермаков Е."
            width={32}
            className={styles.avatar}
          />
          <p className={styles.name}>Ермаков Е.</p>
          <button className={styles.userButton}></button>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <ul className={styles.linkList}>
          {linkList.map((link) => (
            <li className={styles.linkItem} key={link.id}>
              <a className={styles.link} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.other}>
          <button className={styles.managerButton}>
            <span className={styles.messageIcon}></span>
            <span className={`${styles.managerButtonText} blueText`}>
              Ваш менеджер
            </span>
          </button>
          <a href="##" className={styles.sales}>
            <span className={styles.salesIcon}></span>
            <span className={`${styles.salesText} blueText`}>Акции</span>
          </a>
          <a href="##" className={`${styles.blog} blueText`}>
            Блог
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
