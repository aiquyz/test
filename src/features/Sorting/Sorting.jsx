import { useState } from "react";
import styles from "./Sorting.module.scss";

export const Sorting = ({
  openFilters,
  onChangeOpenFilters,
  value,
  onChange,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.btns__wrapper}>
        <button
          className={styles.low__price__btn}
          onClick={() => {
            onChange((value) => (value === "asc" ? null : "asc"));
          }}
          style={value === "asc" ? { borderColor: "#0D6EFD" } : {}}
        >
          Price: Low to High
          <img src="/images/lowToHigh.svg" />
        </button>

        <button
          className={styles.high__price__btn}
          onClick={() => {
            onChange((value) => (value === "desc" ? null : "desc"));
          }}
          style={value === "desc" ? { borderColor: "#0D6EFD" } : {}}
        >
          Price: High to Low
          <img src="/images/highToLow.svg" />
        </button>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={() => {
            onChangeOpenFilters(!openFilters);
          }}
        >
          <img
            src={
              openFilters ? "/images/filter-icon.svg" : "/images/cross-icon.svg"
            }
          />
        </button>
      </div>
    </div>
  );
};
