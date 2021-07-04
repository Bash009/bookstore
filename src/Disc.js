import React from 'react'
import { a } from './store'
import { useParams } from 'react-router'
import './Disc.css'
import { useState } from 'react'
const Disc = () => {
  const z = useParams()
  // console.log('Paramas value', z.id)
  const b = [...a, a]
  console.log(b[3])

  const [pp, setPP] = useState(0)
  return (
    <article
      style={{
        display: 'flex',

        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'space-around',
        height: '100%',
        flexWrap: 'wrap',
        marginBottom: '14%',
      }}
      className='overlay'
    >
      <img
        src={b[z.id - 1].image}
        alt=''
        style={{
          flex: '0.2',
          marginTop: '20px',
          marginLeft: '20px',
        }}
      />
      <div style={{ flex: '0.6', marginLeft: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>{b[z.id - 1].name}</h1>
        <h3 style={{ fontWeight: 'bold' }}>Plot</h3>
        <p style={{ width: '80%' }}>{b[z.id - 1].text}</p>
        <p>
          {b[z.id - 1].emoji} {Math.floor(Math.random() * 1000 + 1000)} Reviews
        </p>
        <p>₹ {b[z.id - 1].price}</p>
      </div>
      <div
        style={{
          flex: '0.2',
          height: '50%',
          flexDirection: 'column',
          backgroundColor: 'gray',
          opacity: '0.7',
          marginRight: '20px',
          borderRadius: '15px',
        }}
      >
        <span style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <p style={{ fontWeight: 'bold' }}>Status:</p>
          <p>In Stock</p>
        </span>
        <span style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <p style={{ fontWeight: 'bold' }}>&nbsp;&nbsp; Quantity:</p>
          <input
            type='text'
            style={{ width: '20%', height: '10%', marginTop: '18px' }}
            onChange={(e) => {
              console.log(e.target.value)
              setPP(e.target.value)
            }}
            placeholder='1'
          ></input>
          {/* <span style={{ display: 'flex', flexDirection: 'column' }}>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
          </span> */}
        </span>
        <span style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <p style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;Total Price:</p>
          <p>₹ {(parseFloat(b[z.id - 1].price) * pp).toFixed(2)}</p>
        </span>
      </div>
    </article>
  )
}

export default Disc

// {
//   a.map(({ name, image, price, emoji, text, id }) => (
//     <article>
//       <div>
//         <img src={image} alt='' style={{ width: '100%', height: 'auto' }} />
//       </div>
//     </article>
//   ))
// }
