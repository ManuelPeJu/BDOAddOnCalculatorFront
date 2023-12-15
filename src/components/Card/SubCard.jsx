import React from 'react'

const SubCard = (id, name, imageUrl) => {
  return (
    <div key={id} id={id}>
        <img src={imageUrl} alt="img not found" />
        <h4>{name}</h4>
    </div>
  )
}

export default SubCard