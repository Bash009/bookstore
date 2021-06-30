import React from 'react'
import { Button } from '@material-ui/core'
import './Button1.css'
import Icon from '@material-ui/core/Icon'

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
