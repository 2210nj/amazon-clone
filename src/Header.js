import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="amazon_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLine1">Hello {user ? user.email : "Guest"}</span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLine2 header__basketCount">
            {cart?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
