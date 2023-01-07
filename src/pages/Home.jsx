import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/home/Categories";
import ProductCard from "../components/home/ProductCard";
import { getAllProducts } from "../store/slices/products.slice";

const Home = () => {
  //Estado para la categoria seleccionada
  const [category, setCategory] = useState("");
  //Estado para el nombre del producto
  const [nameProduct, setNameProduct] = useState("");
  //Estado para los productos filtrados
  const [filterProducts, setFilterProducts] = useState([]);
  //Obtenemos los productos del store
  const products = useSelector((state) => state.products);
  //Obtenemos el dispatch
  const dispatch = useDispatch();
  //Handle para el submit del formulario de busqueda de productos por nombre
  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.nameProduct.value;
    setNameProduct(newName);
  };
  //Obtenemos los productos
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  //Filtramos los productos
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
  //Filtramos los productos por nombre y categoria
  useEffect(() => {
    const newProducts = products.filter(
      (product) =>
        product.title.includes(nameProduct) &&
        (product.category.id === category || category === "")
    );
    setFilterProducts(newProducts);
  }, [nameProduct, category]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <input id="nameProduct" type="text" placeholder="What're ya buyin?" />
          <button>
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <Categories setCategory={setCategory} />
      <section>
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
