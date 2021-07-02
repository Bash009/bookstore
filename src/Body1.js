import React from 'react'
import { a } from './store'
const Body1 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {a.map(({ name, image, price, emoji }) => (
        <div
          style={{
            objectFit: 'contain',
            padding: '10px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <img src={image} alt='' />

          <p style={{ color: 'white', fontWeight: '800' }}>{name}</p>
          <span>
            <p>{price}</p>
            <p>{emoji}</p>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Body1
