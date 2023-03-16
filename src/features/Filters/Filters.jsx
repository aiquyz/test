import { useState } from "react";
import styles from "./Filters.module.scss";
import Range from "shared/components/Range";

import { products } from "products";

const Filters = () => {
  const [values, setValues] = useState([25, 75]);

  return (
    <div className={styles["side-bar"]}>
      <hr />
      <div className={styles.filter__block}>
        <h6>Brands</h6>
        <div className={styles.brands}>
          {[...new Set(products.map(({ brand }) => brand))].map((brand) => (
            <div className={styles.product__wrapper}>
              <input type="checkbox"/>
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div className={styles.price}>
        <h6>Price range</h6>
        <div>
          <Range values={values} onChange={setValues} />
        </div>
        <div className={styles.prise__inputs}>
          <div>
            <span>Min</span>
            <input
              value={values[0]}
              onChange={(event) => {
                setValues([event.target.value, values[1]]);
              }}
            />
          </div>
          <div>
            <span>Max</span>
            <input
              value={values[1]}
              onChange={(event) => {
                setValues([values[0], event.target.value]);
              }}
            />
          </div>
        </div>
        <button className={styles.apply__btn}>Apply</button>
        <button className={styles.reset__btn}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filters;
