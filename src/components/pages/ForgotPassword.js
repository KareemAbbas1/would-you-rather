import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useRef } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Container, Row, Col, Button, Card, FormGroup, Form, Alert } from 'react-bootstrap'
import hero from '../../assets/hero.svg'
import '../../App.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handelSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email to confirm password reset')
        }
        catch {
            setError('Failed to reset password')
        }

        setLoading(false)

    }



    return (
        <Container fluid className='login px-0 no-gutters' style={{ height: '100vh' }}>
            <Row sm={4} className='no-gutters gx-0 bg-light'>
                <Col sm={4} style={{ height: '100vh' }}>
                    <Container className='card-container bg-dark'>
                        <h1 className='card-title text-center'>Quick Surveys</h1>
                        <Card className='container login-form bg-dark'>
                            <Card.Body className='card-body bg-secondary'>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                {message && <Alert variant='success'>{message}</Alert>}
                                <Form onSubmit={handelSubmit} className='justify-content-center'>
                                    <Form.Text className='text-center text-dark'><h2>Reset Password</h2></Form.Text>
                                    <FormGroup id='email'>
                                        <Form.Control
                                            type='email'
                                            ref={emailRef}
                                            placeholder='Enter Eamil'
                                            className='input form-control form-control-sm'
                                        />
                                    </FormGroup>

                                    <div className="d-grid login-button">
                                            <Button disabled={loading} type='submit' variant="dark" size="lg">
                                                Reset Passowrd
                                            </Button>

                                        <div className='signup'>
                                            <Link to='/signup'>
                                                <Button className='text-dark' type='submit' variant="secondary" size="sm">
                                                    <strong>Create Account</strong>
                                                </Button>
                                            </Link>

                                            <Link to='/login'>
                                                <Button className='text-dark' type='submit' variant="secondary" size="sm" style={{ float: 'right' }}>
                                                    <strong>Login</strong>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>

                <Col sm={8}>
                    <img className='image img-fluid' src={hero} alt='background' />
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPassword
