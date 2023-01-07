import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/productId/ProductInfo";
import SimilarProducts from "../components/productId/SimilarProducts";

const ProductId = () => {
  //Estado para guardar las categorias
  const [categories, setCategories] = useState();
  //Estado para guardar el producto
  const [product, setProduct] = useState();
  //Obtenemos el id del producto
  const { id } = useParams();
  //Obtenemos el producto
  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`;
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main>
      <ProductInfo product={product} />
      <SimilarProducts product={product} categories={categories} />
    </main>
  );
};

export default ProductId;
