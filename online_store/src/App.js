import React from 'react';
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';
import axios from 'axios';


// const sneakers = [
//  {
//   name: "Мужские Кроссовки Nike Blazer Mid Suede",
//   price: "12999",
//   imgUrl: "img/sneakers/nike1.jpg"
//  },
//  {
//   name: "Мужские Кроссовки Nike Air Max 270",
//   price: "12999",
//   imgUrl: "img/sneakers/2.jpg"
//  },
//  {
//   name: "Мужские Кроссовки Nike Blazer Mid Suede",
//   price: "8499",
//   imgUrl: "img/sneakers/3.jpg"
//  },
//  {
//   name: "Кроссовки Puma X Aka Boku Future Rider",
//   price: "8999",
//   imgUrl: "img/sneakers/4.jpg"
//  },
//  {
//   name: "Мужские Кроссовки Under Armour Curry 8",
//   price: 15199,
//   imgUrl: "img/sneakers/5.jpg"
//  },
//  {
//   name: "Мужские Кроссовки Nike Kyrie 7",
//   price: 11299,
//   imgUrl: "img/sneakers/6.jpg"
//  },
//  {
//   name: "Мужские Кроссовки Jordan Air Jordan 11",
//   price: 10799,
//   imgUrl: "img/sneakers/7.jpg"
//  },
//  {
//   name: "Мужские Кроссовки Nike LeBron XVIII",
//   price: 16499,
//   imgUrl: "img/sneakers/8.jpg"
//  }
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartO, setCart] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorits, setFavorits] = React.useState([]);
  

  const searchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }

// -----------------------------------Забираем данные с сервера
  React.useEffect(() => {
    //   fetch("https://632f7355b56bd6ac45b0344e.mockapi.io/ok")
    // .then((res) => {
    // return res.json();
    // })
    // .then((json) => {
    //   setItems(json);
    // });

    axios.get('https://632f7355b56bd6ac45b0344e.mockapi.io/ok')
    .then(res => {
      setItems(res.data);
    })
    axios.get('https://632f7355b56bd6ac45b0344e.mockapi.io/cart')
    .then(res => {
      setCartItems(res.data);
    })

  }, []);

  

//        Удаление и добавление элемента в корзину----------------------------------------
  const onAddCard = (obj) => {
      axios.post('https://632f7355b56bd6ac45b0344e.mockapi.io/cart', obj).then(data => setCartItems((prev) => [...prev, data.data]))
  }

  const onRemove = (id) => {
    console.log(id);
    axios.delete(`https://632f7355b56bd6ac45b0344e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://632f7355b56bd6ac45b0344e.mockapi.io/favorite', obj).then(data => setFavorits((prev) => [...prev, data.data]))
  }

  const clearInsert = () => {
    setSearchValue('');
  }
//-------------------------------------------------------------------------


  return (
    <div className="wrapper clear">
      {cartO ? <Drawer onRemoveItem={onRemove} items={cartItems} onClickClose={() => setCart(false)} cartItem={onAddCard}/> : null}

      <Header onClickCart={() => setCart(true)}/>
      
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search d-flex">
            <img src="img/search.svg" alt='search'/>
            {searchValue && <img onClick={clearInsert} className="clearInput cu-p" width="12px" height="12px" src="img/closes.svg" alt='Clear' />}
            <input onChange={searchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards d-flex flex-wrap">

          {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj) =>
              <Card
              key={obj.imgUrl}
              title={obj.name}
              price={obj.price}
              imgUrl={obj.imgUrl} 
              onClickPlus={() => onAddCard(obj)}
              onFavorite={() => onAddToFavorite(obj)}/>
          )}

        </div>
      </div>
      
    </div>
  );
}

export default App;
