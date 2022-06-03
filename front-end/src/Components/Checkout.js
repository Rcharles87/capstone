import React from 'react'
import "../Styles/checkout.css"

function CheckOut({carts, handleCheckout}) {

    let total = carts.map((cart)=>{
        // return (
        //     cart.map((item)=>{
        //         console.log(item)
        //     })
        // )
        // console.log(cart.items[0].quantity)
    })

    // console.log(carts)
  return (
    <div className='checkout-container'>
        <h1>Order Summery</h1>
        <hr />

        <p>Total number of meals: </p>
        <p>Kinds of meals: </p>
        <button onClick={handleCheckout}>Checkout</button>

    </div>
  )
}

export default CheckOut