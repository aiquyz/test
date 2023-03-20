import React from "react";
import { useParams } from "react-router";

const ProductPage = ({ products }) => {
  let { productId } = useParams();
  console.log(products);
  console.log(productId);
  const product = products.find(({ id }) => id === Number(productId));
  console.log(product);

  return <div>Page1</div>;
};

export default ProductPage;
