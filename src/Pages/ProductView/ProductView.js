import React from "react";

import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

const ProductView = () => {
  const product = useSelector((state) => state.product);
  window.scrollTo(0, 0);
  return (
    <div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.row_container}>
        <div className={styles.flex_container}>
          <img className={styles.image} src={product.images[0]} />

          <div className={styles.price}>
            {"Price: " + product.price + " USD"}
          </div>
        </div>
        <div className={styles.flex_container}>
          <div className={styles.text}>{"Brand:" + product.brand}</div>
          <div className={styles.text}>{"Rating:" + product.rating}</div>
          <div className={styles.text}>{"Category:" + product.category}</div>
          <div className={styles.description}>{product.description} </div>
        </div>
      </div>
    </div>
  );
};

export { ProductView };
