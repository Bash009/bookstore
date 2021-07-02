import React from 'react'
import { a } from './store'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Disc from './Disc'
const Body1 = () => {
  return (
    <Link to='/topic' style={{ textDecoration: 'none' }}>
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

            <span
              style={{
                color: 'whitesmoke',
              }}
            >
              <p style={{ color: 'white', fontWeight: '800' }}>{name}</p>
              <p>{price} ₹</p>
              <p>{emoji}</p>
            </span>
          </div>
        ))}
      </div>
    </Link>
  )
}

export default Body1
