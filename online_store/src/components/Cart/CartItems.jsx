import React from "react";
import CartPrice from "./CartPrice";
import axios from "axios";
import AppContext from "../context";

const CartItems = ({ items, onRemoveItem, setOrderId, setIsOrderComplete }) => {
  const [isLoad, setIsLoad] = React.useState(false);
  const { setCartItems, cartItems } = React.useContext(AppContext);
  const onClickOrder = async () => {
    try {
      setIsLoad(true);
      const { data } = await axios.post(
        "https://632f7355b56bd6ac45b0344e.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(item);
        await axios.delete(
          `https://632f7355b56bd6ac45b0344e.mockapi.io/cart/${Number(item.id)}`
        );
      }
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("Не удылось создать заказ");
    }
    setIsLoad(false);
  };
  return (
    <div style={{ height: "80%" }} className="">
      <div className="itemss ">
        {items.map((obj, index) => (
          <div key={index} className="cartItem d-flex align-center">
            <div className="logoCart">
              <img
                width="70px"
                height="70px"
                src={obj.imgUrl}
                alt="snekersLogo"
              />
            </div>
            <div className="cart_text">
              <p>{obj.name}</p>
              <b>{obj.price} руб.</b>
            </div>
            <div className="closeBtn">
              <img
                onClick={() => onRemoveItem(obj.id)}
                width="32px"
                height="32px"
                src="img/close.svg"
                alt="delete sneaker"
              />
            </div>
          </div>
        ))}
      </div>
      <CartPrice onClickOrder={onClickOrder} isLoad={isLoad} />
    </div>
  );
};

export default CartItems;
