import React from "react";
import AppContext from "./context";

const Info = ({ image, title, description }) => {
  const { closingCard } = React.useContext(AppContext);
  return (
    <div
      style={{ textAlign: "center" }}
      className="cartEmpty d-flex justify-center flex"
    >
      <center>
        <img className="mb-20" src={image} alt="cart-Empty" />
        <h2>{title}</h2>
        <p className="opacity-10">{description}</p>
        <button onClick={closingCard} className="green-btn back">
          <img src="img/strelka.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </center>
    </div>
  );
};

export default Info;
