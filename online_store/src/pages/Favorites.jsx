import React from 'react'
import Card from '../components/Card/Card';
import { Link } from "react-router-dom";

const Favorites = ({
  favorits,
  onRemoveFavorite,
  onAddToFavorite,
  setFavorits
}) => {
  const add = (obj) => {
    setFavorits((prev) => prev.filter(item => item.id !== obj.id));
    onAddToFavorite(obj);
  }
  return (
    <div className="content p-40 ">
        <div className="align-center">
          <h1>
            {
            favorits.length ? 
            "Мои закладки" : 
            <div style={{"height": "550px"}} className='justify-center d-flex align-center flex noFavorite'>
              <center>
                <img width={70} height={70} src='img/smile.png' alt='smile'/>
              <h1>Закладок нет :(</h1>
              <p>
              Вы ничего не добавляли в закладки
              </p>
              <Link to="/">
              <button className='green-btn back'>
                  <img src='img/strelka.svg' alt='Arrow'/>
                  Вернуться назад
                </button>
              </Link>
              </center>
              
            </div>
            }
          </h1>
        </div>
        
        <div className="cards d-flex flex-wrap">
          {favorits.map((obj) =>
              <Card
              id={obj.id}
              objects={obj}
              onDelFav = {() => onRemoveFavorite(obj.id)}
              key={obj.imgUrl}
              title={obj.name}
              price={obj.price}
              imgUrl={obj.imgUrl}
              favorited={true}
              onFavorite={() => add(obj)}/>
              
          )}
        </div>
      </div>
  )
}

export default Favorites;