import React from "react";
import Info from "./Info";
import axios from "axios";
import CartItems from "./CartItems";

const Drawer = ({ onClickClose, items = [], onRemoveItem }) => {
  const [isOrderComolete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          Корзина
          <img
            className="cu-p"
            onClick={onClickClose}
            width="32px"
            height="32px"
            src="img/close.svg"
            alt="closeCart"
          />
        </h2>
        {items.length > 0 ? (
          <CartItems
            setOrderId={setOrderId}
            setIsOrderComplete={setIsOrderComplete}
            items={items}
            onRemoveItem={onRemoveItem}
          />
        ) : (
          <Info
            image={isOrderComolete ? "./img/order.jpg" : "./img/cart-empty.png"}
            description={
              isOrderComolete
                ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке`
                : "Добавте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            title={isOrderComolete ? "Заказ оформлен!" : "Корзина пустая"}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
