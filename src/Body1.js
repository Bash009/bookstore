import React from 'react'
import { a } from './store'
// import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Disc from './Disc'
const Body1 = () => {
  const handleClick = (e) => <Disc id={e.target.id} />

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {a.map(({ id, name, image, price, emoji }) => (
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <div
            style={{
              objectFit: 'contain',
              padding: '10px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={image} alt='' id={id} onClick={handleClick} />

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
        </Link>
      ))}
    </div>
  )
}

export default Body1
