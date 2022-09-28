import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function  Slider() {
  return (
    <Carousel >
        <Carousel.Item>
          <div className='divSlider'>
            <img className='next' src='img/next.svg' alt='nextSlide' />
            <img className='prev' src='img/prev.png' alt='prevSlide' />
            <img className='adidas' src='img/adidas.png' alt='logo' />
            <img className='frog' src='img/slider.png' alt='font' />
            <img className='slider' src='img/slider-img.png' alt='fontImg' />
            <Carousel.Caption>
              <div className='hki'>
                <h1 style={{"color": "#8BB43C"}}>Stan Smith,</h1>
                <h1 style={{"color": "#000000"}}>Forever!</h1>
                <button className='green-btn'>
                  Купить
                </button>
              </div>
                
            </Carousel.Caption>
          </div>
            
        </Carousel.Item>
        <Carousel.Item>
          <div className='divSlider'>
            <img className='next' src='img/next.svg' alt='nextSlide' />
            <img className='prev' src='img/prev.png' alt='prevSlide' />
            <img className='adidas' src='img/adidas.png' alt='logo' />
            <img className='frog' src='img/slider.png' alt='font' />
            <img className='slider' src='img/slider-img.png' alt='fontImg' />
            <Carousel.Caption>
              <div className='hki'>
                <h1 style={{"color": "#8BB43C"}}>Stan Smith,</h1>
                <h1 style={{"color": "#000000"}}>Forever2!</h1>
                <button className='green-btn'>
                  Купить
                </button>
              </div>
                
                
            </Carousel.Caption>
          </div>
            
        </Carousel.Item>
        <Carousel.Item>
          <div className='divSlider'>
            <img className='next' src='img/next.svg' alt='nextSlide' />
            <img className='prev' src='img/prev.png' alt='prevSlide' />
            <img className='adidas' src='img/adidas.png' alt='logo' />
            <img className='frog' src='img/slider.png' alt='font' />
            <img className='slider' src='img/slider-img.png' alt='fontImg' />
            <Carousel.Caption>
              <div className='hki'>
                <h1 style={{"color": "#8BB43C"}}>Stan Smith,</h1>
                <h1 style={{"color": "#000000"}}>Forever3!</h1>
                <button className='green-btn'>
                  Купить
                </button>
              </div>
                
                
            </Carousel.Caption>
          </div>
            
        </Carousel.Item>
    </Carousel>
  )
}

export default Slider