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
            headline: 'Ready to go meals',
            subtext: 'Prepped daily',
            image: convenianceFoodImage
        },
        {
            headline: 'Variety of dietary categories available',
            subtext: 'Check restaurant menu',
            image: shopping_cart_image
        },
        {
            headline: 'Bakery Goods 🍩 ',
            subtext: 'From participating locations',
            image: donutsImage
        },
        {
            headline: 'Coming to a city near you',
            subtext: 'New locations coming soon',
            image: unitedStatedMap
        }
    ];

    const carouselOptionsArray = carouselOptions.map((option, index) => {
        return (
            <div key={index} className='ad-container' >
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
        <Carousel speed={1000} cellSpacing={30} autoplay="true" autoplayInterval={3700} wrapAround="true" style={{borderRadius:"15px"}}>
            {carouselOptionsArray}
        </Carousel>
    </div>
  )
}

export default CarouselComp