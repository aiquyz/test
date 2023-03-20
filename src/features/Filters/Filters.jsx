import { useState } from "react";
import styles from "./Filters.module.scss";
import Range from "shared/components/Range";

<<<<<<< HEAD
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
=======
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
>>>>>>> 3dc796852617115159451466aadaa6bc7c6391fd
        <button className={styles.reset__btn}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filters;
