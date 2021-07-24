import React from 'react'
import './Registrations.css'
import { Button } from '@material-ui/core'
const Registration = () => {
  return (
    <div
      style={{
        color: 'black',
        textAlign: 'center',
        width: '50%',
        padding: '10px',
        margin: 'auto',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' />
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' />
        <label htmlFor='pass'>Password: </label>
        <input type='password' id='pass' />
        <Button variant='contained' className='button'>
          Register
        </Button>
      </form>
      <p>
        Already have an account? <a href='/'>Sign in</a>
      </p>
    </div>
  )
}

export default Registration
