import { useState } from "react";
import styles from "./Filters.module.scss";
import Range from "shared/components/Range";

import { initialProducts } from "initialProducts";

const Filters = ({
  openFilters,
  priceRange,
  onChangePriceRange,
  brands,
  onChangeBrands,
}) => {
  const [toggleBrandFilter, setToggleBrandFilter] = useState(false);
  const [togglePriceFilter, setTogglePriceFilters] = useState(false);

  return (
    <div className={openFilters ? styles.hide : styles["side-bar"]}>
      <div className={styles["filter-block"]}>
        <div className={styles.filtersHeader}>
          <h6>Brands</h6>
          <button
            className={styles.toggle__filters}
            onClick={() => {
              setToggleBrandFilter(!toggleBrandFilter);
            }}
          >
            <img
              style={{ rotate: toggleBrandFilter ? "180deg" : "" }}
              src="/images/filter-hide-icon.svg"
            />
          </button>
        </div>
        <div className={!toggleBrandFilter ? styles.hide : styles.brands}>
          {[...new Set(initialProducts.map(({ brand }) => brand))].map(
            (brand) => (
              <div>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked === true) {
                      onChangeBrands([...brands, brand]);
                    } else {
                      onChangeBrands(
                        brands.filter((el) => {
                          return brand !== el;
                        })
                      );
                    }
                  }}
                  checked={brands.includes(brand)}
                />
                <label>{brand}</label>
              </div>
            )
          )}
        </div>
      </div>

      <div className={styles["filter-block"]}>
        <div className={styles.filtersHeader}>
          <h6>Price range</h6>
          <button
            className={styles.toggle__filters}
            onClick={() => {
              setTogglePriceFilters(!togglePriceFilter);
            }}
          >
            <img
              style={{ rotate: togglePriceFilter ? "180deg" : "" }}
              src="/images/filter-hide-icon.svg"
            />
          </button>
        </div>
        <div
          className={
            !togglePriceFilter ? styles.hide : styles.displayFlexColumn
          }
        >
          <div>
            <Range values={priceRange} onChange={onChangePriceRange} />
          </div>
          <div className={styles.price__inputs}>
            <div className={styles.price__input}>
              <span>Min</span>
              <input
                value={priceRange[0]}
                onChange={(event) => {
                  onChangePriceRange([event.target.value, priceRange[1]]);
                }}
              />
            </div>
            <div className={styles.price__input}>
              <span>Max</span>
              <input
                value={priceRange[1]}
                onChange={(event) => {
                  onChangePriceRange([priceRange[0], event.target.value]);
                }}
              />
            </div>
          </div>
          <button className={styles.apply__btn}>Apply</button>
        </div>
        <button className={styles.reset__btn}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filters;
