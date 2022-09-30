import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./components/context/context";
import Orders from "./pages/Orders";

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
  const [isOrderComolete, setIsOrderComplete] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [cartOpened, setCart] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState("");

  const [favorits, setFavorits] = React.useState([]);

  const searchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  //Server
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
    setIsLoading(false);
    async function getter() {
      try {
        const cartResponse = await axios.get(
          "https://632f7355b56bd6ac45b0344e.mockapi.io/cart"
        );
        const favoriteResponse = await axios.get(
          "https://632f7355b56bd6ac45b0344e.mockapi.io/favorite"
        );
        const itemsResponse = await axios.get(
          "https://632f7355b56bd6ac45b0344e.mockapi.io/ok"
        );
        setCartItems(cartResponse.data);
        setFavorits(favoriteResponse.data);
        setItems(itemsResponse.data);
        setIsLoading(true);
      } catch (error) {
        console.error(error, "useEffect fn(Getter)");
      }
    }
    getter();
  }, []);

  const onAddCard = async (obj) => {
    let item;
    try {
      if ((item = cartItems.find((item) => obj.imgUrl === item.imgUrl))) {
        setCartItems((prev) =>
          cartItems.filter((itm) => itm.imgUrl !== obj.imgUrl)
        );
        await axios.delete(
          `https://632f7355b56bd6ac45b0344e.mockapi.io/cart/${item.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        if (cartItems.length === 0) {
          obj.id = 1;
          await axios.post(
            "https://632f7355b56bd6ac45b0344e.mockapi.io/cart",
            obj
          );
        } else {
          const len = cartItems.length + 1;
          obj.id = len;
          await axios.post(
            "https://632f7355b56bd6ac45b0344e.mockapi.io/cart",
            obj
          );
        }
      }
    } catch (error) {
      console.error(error, " onAddCart");
    }
  };

  const onRemove = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      await axios.delete(
        `https://632f7355b56bd6ac45b0344e.mockapi.io/cart/${id}`
      );
    } catch (error) {
      console.error(error, "onRemove");
    }
  };

  const onRemoveFavorite = (id) => {
    try {
      axios.delete(
        `https://632f7355b56bd6ac45b0344e.mockapi.io/favorite/${id}`
      );
    } catch (error) {
      console.error("onRemoveFavorite", error);
    }
  };

  const onAddToFavorite = (obj) => {
    let itm;
    try {
      if ((itm = favorits.find((item) => obj.imgUrl === item.imgUrl))) {
        setFavorits((prev) =>
          favorits.filter((it) => it.imgUrl !== obj.imgUrl)
        );
        axios.delete(
          `https://632f7355b56bd6ac45b0344e.mockapi.io/favorite/${itm.id}`
        );
        setItems((prev) => [...prev]);
      } else {
        axios
          .post("https://632f7355b56bd6ac45b0344e.mockapi.io/favorite", obj)
          .then((data) => setFavorits((prev) => [...prev, data.data]))
          .catch((rej) => alert("Не удалось добавить в избранное"));
        setItems((prev) => [...prev]);
      }
    } catch (error) {
      console.error("onAddToFav", error);
    }
  };

  const clearInsert = () => {
    setSearchValue("");
  };
  //Открытие корзины
  const clickedCard = () => {
    setCart(true);
    document.body.style.overflow = "hidden";
  };
  //Закрытие корзины
  const closingCard = () => {
    setCart(false);
    setIsOrderComplete(false);
    document.body.style.overflow = "visible";
  };

  const isAddedCard = (imgUrl) => {
    return cartItems.some((itm) => itm.imgUrl === imgUrl);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorits,
        isAddedCard,
        closingCard,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Header onClickCart={clickedCard} />

        <Drawer
          isOrderComolete={isOrderComolete}
          setIsOrderComplete={setIsOrderComplete}
          onRemoveItem={onRemove}
          items={cartItems}
          onClickClose={closingCard}
          cartItem={onAddCard}
          opened={cartOpened}
        />

        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                onRemoveFavorite={onRemoveFavorite}
                onAddToFavorite={onAddToFavorite}
                setFavorits={setFavorits}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                isLoading={isLoading}
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
            }
          />
          <Route
            path="/orders"
            element={<Orders onAddToFavorite={onAddToFavorite} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
