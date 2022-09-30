import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

// const MyLoader = (props) => (

// )

// export default MyLoader

function Card({
  objects,
  title,
  price,
  onClickPlus,
  onFavorite,
  imgUrl,
  favorited,
  added,
  loading,
}) {
  const { isAddedCard } = React.useContext(AppContext);
  
  const [isImg, setImg] = React.useState(added);

  const [isFavorits, setIsFavorits] = React.useState(favorited);

  const onPlus = () => {
    setImg(!isImg);
    onClickPlus();
  };

  const addFavorite = () => {
    setIsFavorits(!isFavorits);
    onFavorite();
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={1}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="30" y="30" rx="10" ry="10" width="150" height="90" />
          <rect x="30" y="130" rx="10" ry="10" width="150" height="15" />
          <rect x="30" y="150" rx="10" ry="10" width="90" height="15" />
          <rect x="30" y="170" rx="10" ry="10" width="80" height="24" />
          <rect x="141" y="165" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="favorite">
            <img
              className="aLikes"
              src={isFavorits ? "img/liked.svg" : "img/unliked.png"}
              onClick={addFavorite}
              alt="favorits"
            />
          </div>
          <center>
            <img
              style={{ marginBottom: "14px" }}
              width="150px"
              height="112px"
              src={imgUrl}
              alt="logotype sneaker"
            />
          </center>
          <div className="width">
            <h5 style={{ marginBottom: "14px" }}>{title}</h5>
            <div className="item_text d-flex justify-between align-center">
              <div className="item_price d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <img
                className={styles.btnPlus}
                onClick={onPlus}
                src={isAddedCard(imgUrl) ? "img/check.jpg" : "img/plus.jpg"}
                alt="added sneakers"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
