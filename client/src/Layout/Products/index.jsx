import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { WishlistContext } from "../../Context/wishlistContext";
const Products = () => {
  const [product, setProduct] = useState("");
  async function axiosData() {
    const response = await axios.get("http://localhost:3000/produkt/");
    setProduct(response.data);
  }
  useEffect(() => {
    axiosData();
  }, []);
  const { HandleAddWishlist } = useContext(WishlistContext)
  const SortByPrice = () => {
    setProduct([...product].sort((a,b)=>a.price>b.price ? 1 : b.price > a.price ? -1 : 0))
    

  }
  const SortByName = () => {
    setProduct([...product].sort((a,b)=>a.name>b.name ? 1 : b.name > a.name ? -1 : 0))
    

  }
  
  return (
    <section id="Products">
      <div className="sortSection">
        <button onClick={SortByPrice}>SORT BY PRICE</button>
        <button onClick={SortByName}>SORT BY NAME ( A- Z )</button>

      </div>
      <div className="smokingCards">
        {product &&
          product.map((item) => (
            <div className="card">
              <div className="cardName">
                <p>{item.name}</p>
              </div>
              <div className="cardImg">
                <img src={item.image} alt="" />
              </div>
              <div className="cardInfo">
                <p>{item.info}</p>
              </div>
              <div className="cardPrice">
                <p>{item.price}₼</p>
              </div>
              <div className="buttons">
                <button className="addToWishlist" onClick={()=>HandleAddWishlist(item)}>Add to wishlist</button>
                <button className="addToBasket">Add to Card</button>
                <button className="Details">details</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
