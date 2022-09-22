import React from "react";
function Card() {
    return(
        <div className="card">
    <div className="favorite">
        <a href="#" className="aLikes"></a>
        </div>
          <center><img width="133px" height="112px" src="img/sneakers/nike1.jpg" /></center>
          <div className="width">
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="item_text d-flex justify-between align-center">
            <div className="item_price d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button><img width="11px" height="11px" src="img/plus.svg" /></button>
        </div>
    </div>
</div>
    );
}

export default Card;