import React from 'react'
import { a } from './store'
import { useParams } from 'react-router'
import './Disc.css'
const Disc = () => {
  const z = useParams()
  // console.log('Paramas value', z.id)
  const b = [...a, a]
  console.log(b[3])
  return (
    <article
      style={{
        display: 'flex',

        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'space-around',
      }}
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
      <div style={{ flex: '0.2' }}>
        <h1>Meow Meow Nigga</h1>
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
