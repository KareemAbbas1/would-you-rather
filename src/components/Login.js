import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, Form, FormGroup } from 'react-bootstrap'
import hero2 from '../assets/hero2.svg'
import '../App.css'
import { CardBody, CardText, Input } from 'reactstrap'


const Login = () => {
    return (
        <Container fluid className='login px-0 no-gutters' style={{ height: '100vh' }}>
            <Row sm={4} className='no-gutters gx-0 bg-light'>
                <Col sm={4} style={{ height: '100vh' }}>
                    <Container className='card-container'>
                        <Card className='login-form bg-dark'>
                            <CardBody>
                                <h1 className='card-title text-center'>Quick Surveys</h1>
                                <div className='text-center'>
                                    <p>The best way to make quick surveys with your colleagues, classmates friends, and more.</p>
                                </div>

                                <CardText>
                                    <Form className='form justify-content-center pt-1'>
                                        <FormGroup>
                                            <Input
                                                type='email'
                                                placeholder='Enter Eamil'
                                                className='input form-control form-control-sm'
                                                id='exampleInputEmail1'
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                type='password'
                                                placeholder='Enter Password'
                                                className='input form-control form-control-sm'
                                                id='exampleInputPassword1'
                                            />
                                        </FormGroup>

                                        <div className="d-grid login-button">
                                            <Button type='submit' variant="primary" size="lg">
                                                Log In
                                            </Button>

                                            <div className='signup mt-1'>
                                                <Button type='submit' variant="dark" size="sm" style={{ float: 'right' }}>
                                                    Forgot Password
                                                </Button>

                                                <Button type='submit' variant="dark" size="sm">
                                                    Sign Up
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </CardText>
                            </CardBody>
                            <div className='login-footer'>
                            <p className='text-center'>Kareem Abbas &copy; 2021</p>
                            </div>
                        </Card>
                    </Container>
                </Col>

                <Col sm={8}>
                    <img className='w-100 mt-3' src={hero2} alt='background' />
                </Col>
            </Row>
        </Container>

    )
}

export default Login
