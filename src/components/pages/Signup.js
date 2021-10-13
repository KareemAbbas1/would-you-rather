import { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, FormGroup, Form, Alert } from 'react-bootstrap'
import Hero from '../../assets/hero.svg'
import '../../App.css'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const History = useHistory()
    
    async function handelSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords don't match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            History.push('/')
        }
        catch {
            setError('Failed to create an account')
        }

        setLoading(false)

    }

    return (
        <Container fluid className='signup px-0 no-gutters' style={{ height: '100vh' }}>
            <Row sm={4} className='no-gutters gx-0 bg-light'>
                <Col sm={4} style={{ height: '100vh' }}>
                    <Container className='card-container bg-dark'>
                        <h1 className='card-title text-center'>Quick Surveys</h1>
                        <Card className='container signup-form bg-dark'>
                            <Card.Body className='card-body bg-secondary'>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                <Form onSubmit={handelSubmit} className='justify-content-center'>
                                    <Form.Text className='text-center text-dark'><h2>Sign Up</h2></Form.Text>
                                    <FormGroup id='email'>
                                        <Form.Control
                                            type='email'
                                            ref={emailRef} required
                                            placeholder='Enter Eamil'
                                            className='input form-control form-control-sm'
                                        />
                                    </FormGroup>

                                    <FormGroup id='password'>
                                        <Form.Control
                                            type='password'
                                            ref={passwordRef} required
                                            placeholder='Enter Password'
                                            className='input form-control form-control-sm'
                                        />
                                    </FormGroup>

                                    <FormGroup id='password-confirm '>
                                        <Form.Control
                                            type='password'
                                            ref={passwordConfirmRef} required
                                            placeholder='Confimr Password'
                                            className='input form-control form-control-sm'
                                        />
                                    </FormGroup>

                                    <div className="d-grid login-button">
                                        <Button disabled={loading} type='submit' variant="dark" size="lg">
                                            Sign Up
                                        </Button>

                                        <div className='signup'>
                                            <p className='text-dark'>Already has an account? <Link to ='/login'>Log In</Link></p>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>

                <Col sm={8}>
                    <img className='image img-fluid' src={Hero} alt='background' />
                </Col>
            </Row>
        </Container>
    )
}

export default Signup
