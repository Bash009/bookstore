import React from 'react'
import { Button } from '@material-ui/core'
import './Button1.css'

const Button1 = ({ Icon, title }) => {
  return (
    <div className='btn-1'>
      <Button variant='outlined' color='primary' className='btn'>
        <Icon className='icons' />
        {title}
      </Button>
    </div>
  )
}

export default Button1
