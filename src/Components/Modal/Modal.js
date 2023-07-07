import { useDispatch } from "react-redux";

import { addProduct, openAddingModal } from "../../store/actions";

import { useState } from "react";

import styles from "./styles.module.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const onCancelClick = () => {
    dispatch(openAddingModal(false));
  };

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const onTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const onPriceInput = (e) => {
    setPrice(e.target.value);
  };

  const onCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  const onDescriptionInput = (e) => {
    setDescription(e.target.value);
  };

  const onImageSelect = (e) => {
    setImg(e.target.value);
  };

  const onConfirmClick = () => {
    dispatch(openAddingModal(false));
    dispatch(
      addProduct({
        title: title,
        price: price,
        category: category,
        description: description,
        images: [img],
      })
    );
  };

  const isDisabled =
    title && price && category && description && img ? true : false;

  return (
    <div className={styles.modal}>
      <div className={styles.flex_container}>
        <span>Title</span>
        <input onChange={onTitleInput} className={styles.input}></input>
        <span>Price</span>
        <input onChange={onPriceInput} className={styles.input}></input>
        <span>Category</span>

        <input onChange={onCategoryInput} className={styles.input}></input>
        <span>Description</span>
        <textarea
          onChange={onDescriptionInput}
          className={styles.description}
        ></textarea>
        <span>Image</span>
        <input
          onChange={onImageSelect}
          accept="image/png, image/jpeg"
          type="file"
        ></input>
      </div>
      <div className={styles.buttons}>
        <button onClick={onCancelClick} className={styles.cancel_button}>
          Cancel
        </button>
        <button
          style={{ backgroundColor: !isDisabled && "gray" }}
          disabled={!isDisabled}
          onClick={onConfirmClick}
          className={styles.confirm_button}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export { Modal };
