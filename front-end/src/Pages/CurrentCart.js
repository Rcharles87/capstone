import React from 'react'
import Cart from '../Components/Cart'

function CurrentCart({carts, setCarts}) {
  return (
    <div className='c.container'>
        <Cart carts={carts} setCarts={setCarts}/>
    </div>
  )
}

export default CurrentCart