import React from "react";
import Carousel from "react-bootstrap/Carousel";

import styles from "./Slider.module.scss";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles.divSlider}>
          <img className={styles.next} src="img/next.svg" alt="nextSlide" />
          <img className={styles.prev} src="img/prev.png" alt="prevSlide" />
          <img className={styles.adidas} src="img/adidas.png" alt="logo" />
          <img className="frog" src="img/slider.png" alt="font" />
          <img
            className={styles.slider}
            src="img/slider-img.png"
            alt="fontImg"
          />
          <Carousel.Caption>
            <div className={styles.hki}>
              <h1 style={{ color: "#8BB43C" }}>Stan Smith,</h1>
              <h1 style={{ color: "#000000" }}>Forever1!</h1>
              <button className="green-btn">Купить</button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.divSlider}>
          <img className={styles.next} src="img/next.svg" alt="nextSlide" />
          <img className={styles.prev} src="img/prev.png" alt="prevSlide" />
          <img className={styles.adidas} src="img/adidas.png" alt="logo" />
          <img className="frog" src="img/slider.png" alt="font" />
          <img
            className={styles.slider}
            src="img/slider-img.png"
            alt="fontImg"
          />
          <Carousel.Caption>
            <div className={styles.hki}>
              <h1 style={{ color: "#8BB43C" }}>Stan Smith,</h1>
              <h1 style={{ color: "#000000" }}>Forever2!</h1>
              <button className="green-btn">Купить</button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.divSlider}>
          <img className={styles.next} src="img/next.svg" alt="nextSlide" />
          <img className={styles.prev} src="img/prev.png" alt="prevSlide" />
          <img className={styles.adidas} src="img/adidas.png" alt="logo" />
          <img className="frog" src="img/slider.png" alt="font" />
          <img
            className={styles.slider}
            src="img/slider-img.png"
            alt="fontImg"
          />
          <Carousel.Caption>
            <div className={styles.hki}>
              <h1 style={{ color: "#8BB43C" }}>Stan Smith,</h1>
              <h1 style={{ color: "#000000" }}>Forever3!</h1>
              <button className="green-btn">Купить</button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
