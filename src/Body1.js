import React from 'react'
import { a } from './store'
// import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Body1 = () => {
  // const handleClick = (e) => <Disc id={e.target.id} />
  const { id } = useParams()
  console.log(id, 'Hi!')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {a.map(({ id, name, image, price, emoji }) => (
        <Link to={`/Disc/${id}`} style={{ textDecoration: 'none' }} key={id}>
          <div
            style={{
              objectFit: 'contain',
              padding: '10px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={image} alt='' id={id} />

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
