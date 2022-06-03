import React from 'react';
import "../Styles/FbDietary.css";
import vegetarianIcon from "../assets/vegetable.png";
import veganIcon from "../assets/vegan.png";
import halalIcon from "../assets/halal.png";
import allergyFriendlyIcon from "../assets/allergy.png";
import glutenFreeIcon from "../assets/glutenFree.png";

function FbDietary() {
  const dietOptions = [
    {
      diet: "Vegetarian",
      image: vegetarianIcon
    },
    {
      diet: "Vegan",
      image: veganIcon
    },
    {
      diet: "Halal",
      image: halalIcon
    },
    {
      diet: "Allergy Friendly",
      image: allergyFriendlyIcon
    },
    {
      diet: "Gluten-Free",
      image: glutenFreeIcon
    }
  ];

  const dietOptionsMap = dietOptions.map((option, index) => {
    return (
      <div key={index} className='button-container'>
        <button>
          <img className="button-image" src={option.image} alt="descr-icon"/>
          <div className='button-text'>{option.diet}</div>
        </button>
      </div>
    )
  })

  return (
    <div>{dietOptionsMap}<hr/></div>
  )
}

export default FbDietary