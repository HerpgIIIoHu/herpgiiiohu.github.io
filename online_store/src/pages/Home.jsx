import React from 'react'
import Card from '../components/Card/Card'

const Home = ({
  searchValue,
  clearInsert,
  searchInput,
  items,
  onRemove,
  onRemoveFavorite,
  onAddCard,
  onAddToFavorite 
}) => {
  return (
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
              id={obj.id}
              removeCart={onRemove}
              objects={obj}
              onDelFav = {() => onRemoveFavorite(obj.id)}
              key={obj.imgUrl}
              title={obj.name}
              price={obj.price}
              imgUrl={obj.imgUrl} 
              onClickPlus={() => onAddCard(obj)}
              onFavorite={() => onAddToFavorite(obj)}/>
          )}

        </div>
      </div>
  )
}

export default Home