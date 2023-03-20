import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
<<<<<<< HEAD
import ProductPage from "pages/ProductPage/ProductPage";
import { useState } from "react";

import { initialProducts } from "initialProducts";
=======
import ProductPage from "pages/ProductPage";
import { useState } from "react";

import { products as initialProducts } from "products";
>>>>>>> 3dc796852617115159451466aadaa6bc7c6391fd

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} setProducts={setProducts} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductPage products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
