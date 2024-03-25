import styles from "./header.module.scss";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <img className={styles.logo} src={logo} alt="Logo Compo" width={144} />
        <button className={styles.menuButton}>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuButtonText}>Меню</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
