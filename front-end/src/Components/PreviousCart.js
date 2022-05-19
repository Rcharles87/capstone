import React from 'react'

function PreviousCart({orderContents}) {

    let cartDetail = []
    
    for (let contents of orderContents){
        
        const cart = contents.map((detail)=>{
            console.log(detail)
            cartDetail.push(
                <div className="blah">  
                    {detail.name}
                    {detail.quantity}
                </div>
            )
        })
        
    }

  return (
    <div>{cartDetail}</div>
  )
}

export default PreviousCart