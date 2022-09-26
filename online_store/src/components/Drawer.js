import React from 'react'

const Drawer = ({ onClickClose, items = [], onRemoveItem }) => {
  
  return (
    <div className="overlay">
    <div className="drawer">
          <h2 className="d-flex justify-between">Корзина<img className="cu-p" onClick={onClickClose} width="32px" height="32px" src="img/close.svg" alt='closeCart' /></h2>
          
          {
            items.length > 0 ? (
              
              <div style={{"height": "80%"}} className=''>
                <div className="itemss ">
                {items.map((obj, index) => (
                    <div key={index} className="cartItem d-flex align-center">
                      <div className="logoCart">
                        <img width="70px" height="70px" src={obj.imgUrl} alt="snekersLogo" />
                      </div>
                      <div className="cart_text">
                        <p>{obj.name}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <div className="closeBtn">
                        <img onClick={() => onRemoveItem(obj.id)} width="32px" height="32px" src="img/close.svg" alt='delete sneaker' />
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
                <button className="green-btn" placeholder="Оформить заказ">Оформить заказ <img src="img/strelka.svg" alt='Pay Button' /></button>
              </div>
              </div>
                
              
            ) : (
              <div style={{"textAlign": "center"}} className='cartEmpty d-flex justify-center flex'>
                <center><img className='mb-20' src='./img/cart-empty.png' alt='cart-Empty'/>
                <h2>Корзина пустая</h2>
                <p className='opacity-10'>Добавте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={onClickClose} className='green-btn back'>
                  <img src='img/strelka.svg' alt='Arrow'/>
                  Вернуться назад
                </button>
                </center>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Drawer