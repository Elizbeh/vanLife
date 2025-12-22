import React from 'react'

function VanCard({imageUrl, name, price, type}) {
  return (
    <div className='card'>
        <img className='card-img' src={imageUrl} alt="" />
          <div className='card-info'>
            <h2 className='name'>{name}</h2>
            <div className='price'>   
            <h3 >
                ${price}
                <span className='day'>
                    /day
                </span>
            </h3>
            </div>
          </div>
          <p className={`type ${type}`}>{type}</p>
        </div>
  )
}

export default VanCard