import React from "react";
import { useNavigate } from "react-router-dom";
import productsSlice from "../../store/slices/products.slice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  //Funcion para navegar a la pagina del producto
  const handleClickProduct = () => {
    navigate(`/products/${product.id}`);
  };

  //Funcion para agregar al carrito que evita que se propague el evento
  const handleClickAddCart = (e) => {
    e.stopPropagation();
    console.log("Add to cart");
  };

  return (
    <article onClick={handleClickProduct}>
      <header>
        <img src={product.productImgs[0]} alt="" />
      </header>
      <div>
        <h3>{product.title}</h3>
        <h4>Price</h4>
        <span>{product.price}</span>
        <button onClick={handleClickAddCart}>
          <i className="bx bx-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
