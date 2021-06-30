import './App.css'
import Button1 from './Button1'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <h3>Book Store</h3>

        <Button1 Icon={ShoppingCartIcon} title='Cart' />
        <Button1 Icon={AccountCircleIcon} title='Profile' />
        <Button1 Icon={ExitToAppIcon} title='Logout' />
      </div>
    </div>
  )
}

export default App
