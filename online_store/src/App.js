function App() {
  return (

    <div className="wrapper clear">

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



      <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width="40px" height="40px" src="img/logo.png"/>
          <div className="headerInfo">
            <h3>by Konstantinchik</h3>
            <p>Store best sneakers</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="">
            <img className="mr-30" src="img/cart.svg" />
            <span className="mr-30">
              1205 руб.
            </span>
          </li>
          <li>
            <img className="mr-30" src="img/likes.svg"/>
            <img src="img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="img/search.svg"/>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="d-flex justify-between">
        <div className="card">
          <div className="favorite">
            <a href="#" className="aLikes"></a>
          </div>
          <center><img width="133px" height="112px" src="img/sneakers/nike1.jpg" /></center>
          <div className="width">
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="item_text d-flex justify-between align-center">
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button><img width="11px" height="11px" src="img/plus.svg" /></button>
          </div>
          </div>
        </div>

        <div className="card">
          <div className="favorite">
            <a href="#" className="aLikes"></a>
          </div>
          <center><img width="133px" height="112px" src="img/sneakers/2.jpg" /></center>
          <div className="width">
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="item_text d-flex justify-between align-center">
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button><img width="11px" height="11px" src="img/plus.svg" /></button>
          </div>
          </div>
        </div>

        <div className="card">
          <div className="favorite">
            <a href="#" className="aLikes"></a>
          </div>
          <center><img width="133px" height="112px" src="img/sneakers/3.jpg" /></center>
          <div className="width">
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="item_text d-flex justify-between align-center">
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>8499 руб.</b>
            </div>
            <button><img width="11px" height="11px" src="img/plus.svg" /></button>
          </div>
          </div>
        </div>

        <div className="card">
          <div className="favorite">
            <a href="#" className="aLikes"></a>
          </div>
          <center><img width="133px" height="112px" src="img/sneakers/4.jpg" /></center>
          <div className="width">
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="item_text d-flex justify-between align-center">
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>8999 руб.</b>
            </div>
            <button><img width="11px" height="11px" src="img/plus.svg" alt="img"/></button>
          </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
