import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.btns__wrapper}>
        <button className={styles.low__price__btn}>
          Price: Low to High
          <img src="/images/higeToLow.svg" />
        </button>
        <button className={styles.high__price__btn}>
          Price: High to Low
          <img src="/images/higeToLow.svg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
