import { useState } from 'react'
import { Container, Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const User = () => {

  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
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
    <Container className='text-center justify-content-center'>
      <Card>
        <Card.Body  className='justify-content-center'>
          <h2>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          User: {currentUser.email}
          <Link to='/update-profile'>
            <Button className='w-100'>Update Profile</Button>
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='dark' onClick={handleLogout}>Log out</Button>
      </div>
    </Container>
  )
}

export default User
