import React from 'react'
import Cart from '../Components/Cart'

function CurrentCart({carts, setCarts, setCheckedOut}) {
  return (
    <div className='c.container'>
        <Cart carts={carts} setCarts={setCarts} setCheckedOut={setCheckedOut}/>
    </div>
  )
}

export default CurrentCart