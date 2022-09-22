import React from 'react'

const Header = () => {
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
          <li className="">
            <img className="mr-30" src="img/cart.svg" />
            <span className="mr-30">
              1205 руб.
            </span>
          </li>
          <li>
            <img className="mr-30" src="img/likes.svg"/>
            <img src="img/user.svg"/>
          </li>
        </ul>
      </header>
  )
}

export default Header