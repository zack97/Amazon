import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTow">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTow">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTow">Prime</span>
        </div>

        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-optionLineTwo header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
