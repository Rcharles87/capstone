import React from 'react';
import convenianceFoodImage from "../assets/convenianceFoodImage.jpeg";
import shopping_cart_image from "../assets/shopping_cart_image.jpeg";
import unitedStatedMap from "../assets/unitedStatesMap.png";
import donutsImage from "../assets/donutsImage.png";
import "../Styles/Carousel.css";
import Carousel from 'nuka-carousel';

function CarouselComp() {
    const carouselOptions = [
        {
            headline: 'Conveniantly coming to a conveniance store near you',
            subtext: 'Conveniant Enough?🤔',
            image: convenianceFoodImage
        },
        {
            headline: 'Inflation got you down 😩 😰 👊 ?',
            subtext: 'Groceries coming up!🤯',
            image: shopping_cart_image
        },
        {
            headline: 'Coming to a state near you 😎',
            subtext: 'Expanding Soon 🤞',
            image: unitedStatedMap
        },
        {
            headline: 'Donut 🍩 Kill my vibe',
            subtext: 'kill a box of donuts instead',
            image: donutsImage
        }
    ];

    const carouselOptionsArray = carouselOptions.map((option) => {
        return (
            <div className='ad-container'>
                <div className='adText-container'>
                    <h2>
                        {option.headline}
                    </h2>
                    <h4>
                        {option.subtext}
                    </h4>
                </div>
                <div className='adImage-container'>
                    <img src={option.image} alt="carousel-pic"/>
                </div>
            </div>
        )
    })
  return (
    <div>
        <Carousel>
            {carouselOptionsArray}
        </Carousel>
    </div>
  )
}

export default CarouselComp