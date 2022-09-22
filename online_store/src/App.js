function App() {
  return (
    <div className="wrapper clear">
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
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between">
        <div className="card">
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
          <center><img width="133px" height="112px" src="img/sneakers/4.jpg" /></center>
          <div className="width">
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="item_text d-flex justify-between align-center">
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>8999 руб.</b>
            </div>
            <button><img width="11px" height="11px" src="img/plus.svg" /></button>
          </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
