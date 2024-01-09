import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../Context/wishlistContext";
import "./index.scss";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <div className="smokingCards">
        {wishlist &&
          wishlist.map((item) => (
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
            </div>
          ))}
      </div>
    </>
  );
};

export default Wishlist;
