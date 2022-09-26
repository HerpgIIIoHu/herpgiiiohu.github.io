import React from 'react'

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width="40px" height="40px" src="img/logo.png"/>
          <div className="headerInfo">
            <h3>by Konstantinchik</h3>
            <p>Store best sneakers</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li onClick={props.onClickCart} className="cu-p">
            <img className="mr-30" src="img/cart.svg" />
            <span className="mr-30">
              0 руб.
            </span>
          </li>
          <li>
            <img className="mr-30 cu-p" src="img/likes.svg"/>
            <img className='cu-p' src="img/user.svg"/>
          </li>
        </ul>
      </header>
  )
}

export default Header