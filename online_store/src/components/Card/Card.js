import React from "react";
import styles from './Card.module.scss'


function Card({ title, price, onClickPlus, onFavorite, imgUrl }) {
    //useState()--------------------------------------------------------------------------------------

    const [isImg, setImg] = React.useState(false);
    const [isFavorits, setIsFavorits] = React.useState(false);
    const onPlus = () => {
        onClickPlus();
        setImg(!isImg);
        //------------------------------------------------------------------------------
    }

    const addFavorite = () => {
        setIsFavorits(!isFavorits);
        
    }

    return(
        <div className={styles.card}>
    <div className="favorite">
        <img className="aLikes" src={isFavorits ? "img/liked.svg" : "img/unliked.png"} onClick={addFavorite} />
        </div>
          <center><img width="133px" height="112px" src={imgUrl} /></center>
          <div className="width">
          <h5>{title}</h5>
          <div className='item_text d-flex justify-between align-center'>
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
                <img className={styles.btnPlus} onClick={onPlus} src={isImg ? ("img/check.jpg") : ("img/plus.jpg")} />
        </div>
    </div>
</div>
    );
}

export default Card;