import React from 'react';
//components
import FbDietary from './FbDietary';
import FbSort from './FbSort';
//css file
import "../Styles/FilterBar.css"

function FilterBar() {
  return (
    <div className='filterBar-container'>
        <FbSort/>
        <FbDietary/>
    </div>
  )
}

export default FilterBar