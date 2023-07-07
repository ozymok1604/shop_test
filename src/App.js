import { ProductsListView } from "./Pages/ProductListView/ProductListView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ShopContext } from "./context";

import { useProductsFetch } from "./effects/useProductsFetch";

import { Provider } from "react-redux";

import store from "./store/store";

import "./App.css";
import { ProductView } from "./Pages/ProductView";

function App() {
  const products = useProductsFetch();

  return (
    <Provider store={store}>
      <ShopContext.Provider value={{ products }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<ProductsListView />} />
            <Route path="/product" exact element={<ProductView />} />
          </Routes>
        </BrowserRouter>
      </ShopContext.Provider>
    </Provider>
  );
}

export default App;
