import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {

  const [error, setError] = useState('')
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {

    setError('')

    try {
      await logout()
      history.push('/login')
    }
    catch {
      setError('Failed to log out')
    }
  }

  return (
    <div>
      Home<br></br>
      <Link to='/user'>Profile</Link>
      {error && <Alert variant='danger'>{error}</Alert>}
      {/* User: {currentUser.email} */}
      <div className='w-100 text-center mt-2'>
        <Button variant='dark' onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  )
}

export default Home
