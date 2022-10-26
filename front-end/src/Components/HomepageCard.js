import React from 'react'
import Button from './shared/Button'
import './homePageCard.scss'

function HomePageCard() {
  return (
    <div className='card'>
      
    <div className='card__container'>
        <h4 className='card__title'>WHY WE'RE HERE</h4>
        <p className='card__text'>Our mission? To make sure good food gets eaten, not wasted. Every day, delicious, fresh food goes to waste at cafés, restaurants, hotels, shops and manufacturers - just because it hasn’t sold in time. The Too Good To Go app lets customers buy and collect Surprise Bags of food - at a great price - directly from businesses.</p>
        <div className='card__buttonContainer'>
            <Button name='get the app' size='large' />
        </div>
    </div>
  </div>
  )
}

export default HomePageCard