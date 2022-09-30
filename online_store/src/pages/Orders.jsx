import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import AppContext from "../components/context";

const Orders = ({ onAddToFavorite }) => {
  const [orders, setOrders] = React.useState([]);
  const { favorits } = React.useContext(AppContext);
  React.useEffect(() => {
    async function order() {
      const { data } = await axios.get(
        "https://632f7355b56bd6ac45b0344e.mockapi.io/orders"
      );
      setOrders(data);
      console.log(data);
    }
    order();
  }, []);
  return (
    <div className="content p-40 ">
      <div className="align-center">
        <h1>
          {orders.length ? (
            "Мои заказы"
          ) : (
            <div
              style={{ height: "550px" }}
              className="justify-center d-flex align-center flex noFavorite"
            >
              <center>
                <img width={70} height={70} src="img/smile.png" alt="smile" />
                <h1>Заказов нет :(</h1>
                <p>Вы еще ничего не заказывали</p>
                <Link to="/">
                  <button className="green-btn back">
                    <img src="img/strelka.svg" alt="Arrow" />
                    Вернуться назад
                  </button>
                </Link>
              </center>
            </div>
          )}
        </h1>
      </div>

      <div className="cards d-flex flex-wrap">
        {orders.map((item) =>
          item.items.map((obj, index) => (
            <Card
              id={obj.id}
              objects={obj}
              title={obj.name}
              price={obj.price}
              imgUrl={obj.imgUrl}
              favorited={favorits.find((items) => items.imgUrl === obj.imgUrl)}
              onFavorite={() => onAddToFavorite(obj)}
              key={index}
            />
          )
          )
        )}
      </div>
    </div>
  );
};

export default Orders;
