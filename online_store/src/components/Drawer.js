import React from 'react'
import Card from './Card'

const Drawer = () => {
  return (
    <div style={{display: 'none'}} className="overlay">
    <div className="drawer">
          <h2 className="d-flex justify-between">Корзина<a className="cu-p"><img width="32px" height="32px" src="img/close.svg" /></a></h2>
          <div className="itemss">
          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/2.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>


          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/4.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8499 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>

          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/2.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>


          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/4.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8499 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>

          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/2.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>


          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/4.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8499 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>

          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/2.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>


          <div className="cartItem d-flex align-center">
            <div className="logoCart">
              <img width="70px" height="70px" src="img/sneakers/4.jpg" />
            </div>
            
            <div className="cart_text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8499 руб.</b>
            </div>
            <div className="closeBtn">
              <a><img width="32px" height="32px" src="img/close.svg" /></a>
            </div>
          </div>

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