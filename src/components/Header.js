import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };

  const orderPage = (e) => {
    if (!user) {
      history.push("/login");
    } else {
      history.push("/orders");
    }
  };

  return (
    <div className="header">
      {/* This Link tab is to make amazon logo clickable to navigate to home page*/}
      <Link to="/">
        {/* Logo */}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Logo */}

      {/* Search Bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Search Icon */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* header menus */}
      <div className="header__nav">
        {/* if no user then only navigate to /login */}
        <Link to={!user && "/login"}>
          {/* see in the top for this function */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {/* if no user then 'Guest', or user's email */}
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link onClick={orderPage}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        {/* This Link tag is to make basket icon clickable to navigate to checkout page*/}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
