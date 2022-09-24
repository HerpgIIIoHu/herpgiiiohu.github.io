import React from 'react'
import Card from './Card/Card'

const Drawer = ({ onClickClose, items = [] }) => {
  return (
    <div className="overlay">
    <div className="drawer">
          <h2 className="d-flex justify-between">Корзина<a className="cu-p"><img onClick={onClickClose} width="32px" height="32px" src="img/close.svg" /></a></h2>
          <div className="itemss">
            {items.map((obj) => (
                <div className="cartItem d-flex align-center">
                  <div className="logoCart">
                    <img width="70px" height="70px" src={obj.imgUrl} />
                  </div>
                  <div className="cart_text">
                    <p>{obj.name}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <div className="closeBtn">
                    <a><img width="32px" height="32px" src="img/close.svg" /></a>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="price">
            <ul>
              <li className="d-flex justify-between">
                <span>Итого:</span>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex justify-between">
                <span>Налог 5%:</span>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="green-btn" placeholder="Оформить заказ">Оформить заказ <img src="img/strelka.svg" /></button>
          </div>
        </div>
        </div>
  )
}

export default Drawer