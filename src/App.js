import './App.css'
import Button1 from './Button1'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Disc from './Disc'
import Registration from './Registration'

import Body1 from './Body1'
import './body.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='nav'>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Horror Movies</h3>
          </Link>

          <div style={{ display: 'flex' }}>
            <Link to='/Cart' style={{ textDecoration: 'none' }}>
              <Button1 Icon={ShoppingCartIcon} title='Cart' />
            </Link>
            <Link to='/Profile' style={{ textDecoration: 'none' }}>
              <Button1 Icon={AccountCircleIcon} title='Profile' />
            </Link>
            <Link to='/Logout' style={{ textDecoration: 'none' }}>
              <Button1 Icon={ExitToAppIcon} title='Logout' />
            </Link>
          </div>
        </div>

        <div className='body1'>
          <Route path='/' component={Body1} exact />
        </div>
        <div className='body1'>
          <Route path='/Disc/:id' component={Disc} />
        </div>
        <div
          className='body1'
          style={{
            textAlign: 'center',
            width: '50%',
            padding: '10px',
            margin: 'auto',
            backgroundColor: 'gray',
            opacity: '0.75',
          }}
        >
          <Route path='/registration' component={Registration} />
        </div>
      </div>
    </Router>
  )
}

export default App
