import React from "react";
import styles from './Card.module.scss'


function Card({ id, objects, title, price, onClickPlus, onFavorite, imgUrl, onDelFav, removeCart, favorited=false, favoritesItems }) {
    //useState()--------------------------------------------------------------------------------------
    
    const [isImg, setImg] = React.useState(false);
    const [isFavorits, setIsFavorits] = React.useState(favorited);
    const onPlus = () => {
        setImg(!isImg);
        if (!isImg) {
            onClickPlus();
        } else {
            console.log(`Delete check Cart ${id}`);
            removeCart(id);
        }
        
        //------------------------------------------------------------------------------
    }
    
    const addFavorite = () => {
        setIsFavorits(!isFavorits);
        onFavorite();
    }

    return(
        <div className={styles.card}>
    <div className="favorite">
        <img className="aLikes" src={isFavorits ? "img/liked.svg" : "img/unliked.png"} onClick={addFavorite} alt="favorits" />
        </div>
          <center><img width="133px" height="112px" src={imgUrl} alt="logotype sneaker" /></center>
          <div className="width">
          <h5>{title}</h5>
          <div className='item_text d-flex justify-between align-center'>
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
                <img className={styles.btnPlus} onClick={onPlus} src={isImg ? ("img/check.jpg") : ("img/plus.jpg")} alt="added sneakers" />
        </div>
    </div>
</div>
    );
}

export default Card;