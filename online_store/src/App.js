
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';


function App() {
  return (

    <div className="wrapper clear">
      
      <Header/>
      <Drawer/>

      <div className="content p-40 ">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="img/search.svg"/>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="d-flex justify-between">

        <Card/>

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
