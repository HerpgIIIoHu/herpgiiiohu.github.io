import React from "react";
import Card from "../components/Card/Card";
import Slider from "../components/Slider/Slider";

const Home = ({
  searchValue,
  clearInsert,
  searchInput,
  items,
  onRemove,
  onRemoveFavorite,
  onAddCard,
  onAddToFavorite,
  favorits,
  isLoading,
}) => {
  const arrLoaded = [...Array(8)];
  const renderItems = () => {
    if (isLoading) {
      return items
        .filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((obj, index) => (
          <Card
            items={items}
            id={obj.id}
            loading={false}
            removeCart={() => onRemove(obj.id)}
            objects={obj}
            onDelFav={() => onRemoveFavorite(obj.id)}
            key={obj.imgUrl}
            favorited={favorits.some((itm) => itm.imgUrl === obj.imgUrl)}
            title={obj.name}
            price={obj.price}
            imgUrl={obj.imgUrl}
            onClickPlus={() => onAddCard(obj)}
            onFavorite={() => onAddToFavorite(obj)}
          />
        ));
    } else {
      return arrLoaded.map((obj, index) => <Card key={index} loading={true} />);
    }
  };

  return (
    <div className="content p-40 ">
      <Slider />
      <div className="d-flex align-center justify-between">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search d-flex">
          <img src="img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={clearInsert}
              className="clearInput cu-p"
              width="12px"
              height="12px"
              src="img/closes.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={searchInput}
            value={searchValue}
            placeholder="Поиск..."
          ></input>
        </div>
      </div>

      <div className="cards d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
