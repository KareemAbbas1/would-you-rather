import { Component } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authAction';
import { withRouter } from 'react-router-dom';



class Login extends Component {

    state = {
        error: ''
    };

    redirectToHome = () => {
        const { history } = this.props;
        history.push('/');
    }

    
    handleSubmit = (e) => {
        const userID = this.userID.value;
        const { dispatch } = this.props;
        e.preventDefault();
        
        userID !== '' ? dispatch(login(userID)) : this.setState({ error: 'Choose a user to log in' });
        this.redirectToHome();
    };
    
    render() {
        
        const { usersNames } = this.props;
        const { error } = this.state;
        return (
            
            <div>
                <Container className='w-50 my-5'>
                    <h1 className='text-center'>Would You Rather</h1>
                    <hr></hr>
                    <p className='text-center'>Udacity's Frontend Nanodegree advanced track</p>
                    <h2 className='text-center pt-5 my-5'>Log In</h2>

                    <Form onSubmit={this.handleSubmit}>
                        {error && <Alert variant='danger'>{error}</Alert>}

                        <Form.Control
                            as='select'
                            aria-label="Default select example"
                            ref={(id) => (this.userID = id)}
                        >
                            <option value=''>Select a user to log in</option>
                            {usersNames.map((item) => (
                                <option value={item.value} key={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Control>

                        <div className='d-flex justify-content-center mt-2'>
                            <Button variant="dark" type="submit" className='w-100'>
                                Login
                            </Button>
                        </div>

                    </Form>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        usersNames: Object.keys(users).map((id) => ({
            value: id,
            label: users[id].name
        }))
    };
}

export default connect (mapStateToProps)(withRouter (Login));









































// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useState, useRef } from 'react'
// import { useAuth } from '../../context/AuthContext'
// import { Container, Row, Col, Button, Card, FormGroup, Form, Alert } from 'react-bootstrap'
// import Hero from '../../assets/hero.svg' 
// import '../../App.css'
// import { Link, useHistory } from 'react-router-dom'

// const Login = () => {

//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const { login } = useAuth()
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)
//     const history = useHistory()

//     async function handelSubmit(e) {
//         e.preventDefault()

//         try {
//             setError('')
//             setLoading(true)
//             await login(emailRef.current.value, passwordRef.current.value)
//             history.push('/')
//         }
//         catch {
//             setError('Failed to log in')
//         }

//         setLoading(false)

//     }



//     return (
//         <Container fluid className='login px-0 no-gutters' style={{ height: '100vh' }}>
//             <Row sm={4} className='no-gutters gx-0 bg-light'>
//                 <Col sm={4} style={{ height: '100vh' }}>
//                     <Container className='card-container bg-dark'>
//                         <h1 className='card-title text-center'>Quick Surveys</h1>
//                         <Card className='container login-form bg-dark'>
//                             <Card.Body className='card-body bg-secondary'>
//                                 {error && <Alert variant='danger'>{error}</Alert>}
//                                 <Form onSubmit={handelSubmit} className='justify-content-center'>
//                                     <Form.Text className='text-center text-dark'><h2>Log In</h2></Form.Text>
//                                     <FormGroup id='email'>
//                                         <Form.Control
//                                             type='email'
//                                             ref={emailRef} required
//                                             placeholder='Enter Eamil'
//                                             className='input form-control form-control-sm'
//                                         />
//                                     </FormGroup>

//                                     <FormGroup id='password'>
//                                         <Form.Control
//                                             type='password' required
//                                             ref={passwordRef}
//                                             placeholder='Enter Password'
//                                             className='input form-control form-control-sm'
//                                         />
//                                     </FormGroup>

//                                     <div className="d-grid login-button">
//                                         <Button disabled={loading} type='submit' variant="dark" size="lg">
//                                             Log In
//                                         </Button>

//                                         <div className='signup'>
//                                             <Link to='/signup'>
//                                                 <Button className='text-dark' type='submit' variant="secondary" size="sm">
//                                                     <strong>Create Account</strong>
//                                                 </Button>
//                                             </Link>

//                                             <Link to='/forgot-password'>
//                                                 <Button className='text-dark' type='submit' variant="secondary" size="sm" style={{ float: 'right' }}>
//                                                     <strong>Forgot Password</strong>
//                                                 </Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </Form>
//                             </Card.Body>
//                         </Card>
//                     </Container>
//                 </Col>

//                 <Col sm={8}>
//                     <img className='image img-fluid' src={Hero} alt='background' />
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Login
