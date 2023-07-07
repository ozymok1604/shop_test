import { useDispatch } from "react-redux";

import { getProduct } from "../../store/actions";

import styles from "./styles.module.scss";

const Product = ({ data }) => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(getProduct(data));
  };

  return (
    <div onClick={onHandleClick} className={styles.product_card}>
      <img className={styles.image} src={data?.images[0]} />
      <div className={styles.title}>{data?.title}</div>
      <div className={styles.price}>{data?.price + " USD"}</div>
    </div>
  );
};

export { Product };
