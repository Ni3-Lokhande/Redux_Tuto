import React from "react";
import './Header.css';

const Header = (props) => {
    console.warn("header",props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="badge">{props.data.length}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" />
      </div>
    </div>
  );
};

export default Header;
