import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);
    for (const id in storedCart) {
      //   console.log(products);
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      //   console.log(addedProduct);
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newArr = [...cart, product];
    setCart(newArr);
    addToDb(product.id);
  };

  return (
    <div className="shopping-container">
      <div className="products-container">
        {products.map((product) => (
          // console.log(product)
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
