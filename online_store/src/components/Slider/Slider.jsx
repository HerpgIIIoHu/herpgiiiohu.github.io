import React from "react";
import Carousel from "react-bootstrap/Carousel";

import styles from "./Slider.module.scss";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles.divSlider}>
          <img
            className={styles.slider}
            src="img/sliders.png"
            alt="fontImg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.divSlider}>
          <img
            className={styles.slider}
            src="img/sliders.png"
            alt="fontImg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.divSlider}>
          <img
            className={styles.slider}
            src="img/sliders.png"
            alt="fontImg"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
