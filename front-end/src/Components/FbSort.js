import React from 'react';
import "../Styles/FbSort.css"

function FbSort() {
    const sortOptions = [
        "Most Popular",
        "Near You",
        "Top Rated"
    ];

    const sortOptionsMap = sortOptions.map((option) => {
        return (
            <div className='radio-container'>
                <input
                    type="radio"
                    value={option}
                    name="sort"
                 />{option}
            </div>
        )
    })

  return (
    <div>{sortOptionsMap}<hr/></div>
  )
}

export default FbSort