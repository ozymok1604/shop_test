import { ADD_PRODUCT, GET_PRODUCT, OPEN_MODAL } from "../actionTypes";

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    product,
  };
};

export const openAddingModal = (isOpenAddingModal) => {
  return {
    type: OPEN_MODAL,
    isOpenAddingModal,
  };
};

export const addProduct = (addedProduct) => {
  return {
    type: ADD_PRODUCT,
    addedProduct,
  };
};
