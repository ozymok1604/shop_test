import React, { useContext } from "react";

import { ShopContext } from "../../context";

import { Product } from "../../Components/Product";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { openAddingModal } from "../../store/actions";

import { Modal } from "../../Components/Modal";

import styles from "./styles.module.scss";

const ProductsListView = () => {
  const { products } = useContext(ShopContext);
  {
    localStorage.getItem("products") != "[]"
      ? console.log("full")
      : localStorage.setItem("products", JSON.stringify(products));
  }
  const dispatch = useDispatch();
  const isOpenAddingModal = useSelector((state) => state.isOpenAddingModal);

  const onAddProductClick = () => {
    dispatch(openAddingModal(true));
  };

  const localProducts = JSON.parse(localStorage.getItem("products"));

  return (
    <div className={styles.main}>
      {isOpenAddingModal && <Modal />}
      <div className={styles.header}>Shop Test</div>
      <button onClick={onAddProductClick} className={styles.add_button}>
        Add product
      </button>

      <div className={styles.container}>
        {localProducts.map((product) => {
          return (
            <Link to="/product">
              <Product data={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { ProductsListView };
