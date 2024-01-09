import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);

    function HandleAddWishlist(item) {
        setWishlist([...wishlist, item]);
    }

    const data = { wishlist, setWishlist, HandleAddWishlist };

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistProvider;
