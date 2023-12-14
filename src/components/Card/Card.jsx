import React from 'react'

const Card = ({id, imageUrl, name}) => {

  return (
    <div className='card' id={id}>
        
            <img src={imageUrl} alt="image not found" width="40px" height="40px" />
            <h4>{name}</h4>
        
    </div>
  )
}

export default Card