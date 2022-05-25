import React from 'react';
import FbDietary from './FbDietary';
import FbSort from './FbSort';

function FilterBar() {
  return (
    <div className='filterBar-container'>
        <FbSort/>
        <FbDietary/>
    </div>
  )
}

export default FilterBar