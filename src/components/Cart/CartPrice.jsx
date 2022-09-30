import React from "react";
import AppContext from "../context/context";

const CartPrice = ({ isLoad, onClickOrder }) => {
  const { cartItems } = React.useContext(AppContext);
  return (
    <div className="price">
      <ul>
        <li className="d-flex justify-between">
          <span>Итого:</span>
          <b>
            {cartItems.reduce((sum, obj) => sum + Number(obj.price), 0)} руб.
          </b>
        </li>
        <li className="d-flex justify-between">
          <span>Налог 5%:</span>
          <b>
            {Math.floor(
              cartItems.reduce((sum, obj) => sum + Number(obj.price), 0) / 100
            ) * 5}{" "}
            руб.
          </b>
        </li>
      </ul>
      <button
        disabled={isLoad}
        onClick={onClickOrder}
        className="green-btn"
        placeholder="Оформить заказ"
      >
        Оформить заказ <img src="img/strelka.svg" alt="Pay Button" />
      </button>
    </div>
  );
};

export default CartPrice;
