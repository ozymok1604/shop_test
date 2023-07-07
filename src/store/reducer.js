import {
  ADD_PRODUCT,
  DELETE_ITEM,
  GET_PRODUCT,
  OPEN_MODAL,
} from "../actionTypes";

const initialState = {
  product: {},
  addedProduct: {},
  isOpenAddingModal: false,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: (state.product = action.product),
      };

    case OPEN_MODAL:
      return {
        ...state,
        isOpenAddingModal: (state.isOpenAddingModal = action.isOpenAddingModal),
      };

    case ADD_PRODUCT:
      const products = JSON.parse(localStorage.getItem("products"));

      const newProducts = [...products, action.addedProduct];

      localStorage.setItem("products", JSON.stringify(newProducts));
      return {
        ...state,
        addedProduct: (state.addedProduct = action.addedProduct),
      };
    default:
      return state;
  }
};
