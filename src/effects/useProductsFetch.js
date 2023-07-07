import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { BASE_URL } from "../constants";

const useProductsFetch = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios(`${BASE_URL}products`);
      setProducts(response.data.products.slice(0, 10));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  const postProduct = async () => {
    try {
      const response = await axios.post(`${BASE_URL}products/add`);
      setProducts(response.data.products.slice(0, 10));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export { useProductsFetch };
