import React from "react";

const ProductInfo = ({ product }) => {
  //Estado para guardar la cantidad
  const [quantity, setQuantity] = React.useState(1);
  //Funciones para aumentar y disminuir la cantidad del producto
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <article>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <div>
          <h3>Price</h3>
          <span>{product?.price}</span>
        </div>
        <div>
          <h3>Quantity</h3>
          <div>
            <div onClick={handleMinus}>-</div>
            <div>{quantity}</div>
            <div onClick={handlePlus}>+</div>
          </div>
        </div>
        <button>
          Add to cart
          <i className="bx bx-cart"></i>
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
