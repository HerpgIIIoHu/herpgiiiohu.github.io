import React from "react";
import { Link } from "react-router-dom";
import AppContext from "./context";

const Header = (props) => {
  const { cartItems } = React.useContext(AppContext);
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="headerLeft d-flex align-center cu-p">
          <img width="40px" height="40px" src="img/logo.png" alt="logotype" />
          <div className="headerInfo">
            <h3>by Konstantinchik</h3>
            <p>Store best sneakers</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight d-flex">
        <li onClick={props.onClickCart} className="cu-p">
          <img className="mr-30" src="img/cart.svg" alt="cart" />
          <span className="mr-30">
            {cartItems.reduce((sum, obj) => sum + Number(obj.price), 0)} руб.
          </span>
        </li>
        <li>
          <Link to="/favorites">
            <img className="mr-30 cu-p" src="img/likes.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <img className="cu-p" src="img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
