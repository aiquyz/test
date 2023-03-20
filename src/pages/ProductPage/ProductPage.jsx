import React from "react";
import { useParams } from "react-router";
import { ShoppingCartIcon } from 'shared/icons';

import styles from "./ProductPage.module.scss";

const ProductPage = ({ products }) => {
  let { productId } = useParams();

  const product = products.find(({ id }) => id === Number(productId));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginInline: "130px",
      }}
    >
      <div className={styles.main}>
        <img className={styles.main__img} src={product.src} />
        <div className={styles.main__text}>
          <h2>{product.name}</h2>
          <strong>${product.price}</strong>
          <button>
            <ShoppingCartIcon />
            Buy
          </button>
          <div className={styles.text__block}>
            <div>
              <span>Category:</span>
              <p>{product.category}</p>
            </div>
          </div>
          <div className={styles.text__block}>
            <div>
              <span>Type:</span>
              <p>{product.type}</p>
            </div>
            <div>
              <span>Material:</span>
              <p>{product.material}</p>
            </div>
            <div>
              <span>Design:</span>
              <p>{product.design}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
