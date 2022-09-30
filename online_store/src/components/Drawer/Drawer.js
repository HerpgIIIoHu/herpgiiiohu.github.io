import React from "react";

import Info from "../Cart/Info";
import CartItems from "../Cart/CartItems";

import styles from './Drawer.module.scss'

const Drawer = ({ onClickClose, items = [], onRemoveItem, opened, isOrderComolete, setIsOrderComplete }) => {
  
  const [orderId, setOrderId] = React.useState(null);
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : null}`}>
      <div className={`${styles.drawer} `}>
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
