import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Drawer from './components/Drawer';
import axios from 'axios'
import Home from './pages/Home';
import Favorites from './pages/Favorites';


// const sneackMockAPI = [
//   {
//    "key": 1,
//    "id": 1,
//    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//    "price": "12999",
//    "imgUrl": "img/sneakers/nike1.jpg"
//   },
//   {
//    "key": 2,
//    "id": 2,
//    "name": "Мужские Кроссовки Nike Air Max 270",
//    "price": "12999",
//    "imgUrl": "img/sneakers/2.jpg"
//   },
//   {
//    "key": 3,
//    "id": 3,
//    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//    "price": "8499",
//    "imgUrl": "img/sneakers/3.jpg"
//   },
//   {
//    "key": 4,
//    "id": 4,
//    "name": "Кроссовки Puma X Aka Boku Future Rider",
//    "price": "8999",
//    "imgUrl": "img/sneakers/4.jpg"
//   },
//   {
//    "key": 5,
//    "id": 5,
//    "name": "Мужские Кроссовки Under Armour Curry 8",
//    "price": 15199,
//    "imgUrl": "img/sneakers/5.jpg"
//   },
//   {
//    "key": 6,
//    "id": 6,
//    "name": "Мужские Кроссовки Nike Kyrie 7",
//    "price": 11299,
//    "imgUrl": "img/sneakers/6.jpg"
//   },
//   {
//    "key": 7,
//    "id": 7,
//    "name": "Мужские Кроссовки Jordan Air Jordan 11",
//    "price": 10799,
//    "imgUrl": "img/sneakers/7.jpg"
//   },
//   {
//    "key": 8,
//    "id": 8,
//    "name": "Мужские Кроссовки Nike LeBron XVIII",
//    "price": 16499,
//    "imgUrl": "img/sneakers/8.jpg"
//   }
//  ]

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

  React.useEffect(() => {
    console.log("update");
  }, [cartItems]);

// -----------------------------------Забираем данные с сервера
  React.useEffect(() => {
    // const fetch =   fetch("https://632f7355b56bd6ac45b0344e.mockapi.io/ok")
    // .then((res) => {
    // return res.json();
    // })
    // .then((json) => {
    //   setItems(json);
    // });

    // axios.put('https://632f7355b56bd6ac45b0344e.mockapi.io/marinka/1', {
    //   "id": 1,
    //   "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    //   "price": 2,
    //   "imgUrl": "img/sneakers/nike1.jpg",
    //   "favorite": false
    //  })
    // .then(res => {
    //   console.log(res.data);
    // })
    
    axios.get('https://632f7355b56bd6ac45b0344e.mockapi.io/cart')
    .then(res => {
      setCartItems(res.data);
      axios.get('https://632f7355b56bd6ac45b0344e.mockapi.io/favorite')
      .then(res => {
        setFavorits(res.data);
        axios.get('https://632f7355b56bd6ac45b0344e.mockapi.io/ok')
        .then(res => {
          setItems(res.data);
        })
      })
    })
  }, []);

  

  const onAddCard = async (obj) => {
    let item;
    if (item = cartItems.find((item) => obj.imgUrl === item.imgUrl)) {
      console.log(item);
      setCartItems(prev => cartItems.filter((itm) => itm.imgUrl !== obj.imgUrl));
      axios.delete(`https://632f7355b56bd6ac45b0344e.mockapi.io/cart/${item.id}`);
      console.log(`Favorits ${obj.id} delete`);
    } else {
      const { data } = await axios.post('https://632f7355b56bd6ac45b0344e.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, data]);
      console.log(`Added obj to Cart id ${obj.id}`);
    }
    // checked(obj);
  }

  const onRemove = (id) => {
    axios.delete(`https://632f7355b56bd6ac45b0344e.mockapi.io/cart/${id}`);
    console.log(`Cart id ${id} delete`);
    setCartItems((prev) => prev.filter(item => item.id !== id));

  }

  const onRemoveFavorite = (id) => {
    console.log(id);
    axios.delete(`https://632f7355b56bd6ac45b0344e.mockapi.io/favorite/${id}`);
    console.log(`Favorits ${id} delete`);
  }

  const onAddToFavorite = (obj) => {
    console.log(obj);
    if (favorits.find((item) => obj.id === item.id)) {
      axios.delete(`https://632f7355b56bd6ac45b0344e.mockapi.io/favorite/${obj.id}`);
      console.log(`Favorits ${obj.id} delete`);
    } else {
      console.log(`Added obj to Favorite ${obj}`);
      axios.post('https://632f7355b56bd6ac45b0344e.mockapi.io/favorite', obj)
      .then(data => setFavorits((prev) => [...prev, data.data]))
      .catch(rej => alert("Не удалось добавить в избранное"))
    }
    
  }
  
  const clearInsert = () => {
    setSearchValue('');
  }

  return (
    <div className="wrapper clear">
      <Header onClickCart={() => setCart(true)}/>
      {cartO ? <Drawer onRemoveItem={onRemove} items={cartItems} onClickClose={() => setCart(false)} cartItem={onAddCard}/> : null}
      <Routes>
      <Route path='/favorites'element={
      <Favorites
        favorits={favorits}
        onRemoveFavorite={onRemoveFavorite}
        onAddToFavorite={onAddToFavorite}
        setFavorits={setFavorits}
      />
      } />
      </Routes>
      <Routes>
          <Route path='/'element={
          <Home
          favorits={favorits}
          cartItems={cartItems}
          searchValue={searchValue}
          clearInsert={clearInsert}
          searchInput={searchInput}
          items={items}
          onRemove={onRemove}
          onAddCard={onAddCard}
          onAddToFavorite={onAddToFavorite}
          favoritesItems={favorits}
          />
          } />             
      </Routes>
    </div>
  );
}

export default App;
