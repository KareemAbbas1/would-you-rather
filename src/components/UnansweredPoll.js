import React, { Component } from 'react';
import { Container, Card, Row, Col, Image, Button, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../redux/actions/questionActions';
import NotFound from './pages/NotFound';

class UnansweredPoll extends Component {

    state = {
        error: ''
    };

    handleSubmit = (e, id) => {
        
        const answer = this.form.answer.value;
        const { dispatch } = this.props;
        
        e.preventDefault();

        (answer !== '' ? dispatch(handleAddAnswer(id, answer)) : this.setState({ error: 'Make a choice to submit' }));


    };

    render() {

        const { question, author } = this.props;
        
        question === null && <NotFound />
        
        const { optionOne, optionTwo, id } = question;
        const { name, avatarURL } = author;
        const { error } = this.state;


        return (
            <Container>
                <Card className="my-3 bg-light text-dark">
                    <Container className='px-0 no-gutters'>
                        <Row className='px-0 gx-0 no-gutters'>
                            <Col lg={2} md={4} sm={12}>
                                <Container className=''>
                                    <Card.Header className='text-center text-dark bg-light'>{name} Asks :</Card.Header>
                                    <Card.Body className='d-flex align-items-center justify-content-center'>
                                        <Image className='img-fluid' src={avatarURL} roundedCircle />
                                    </Card.Body>
                                </Container>
                            </Col>

                            <Col lg={10} md={8} className=''>
                                <Card.Header className='bg-light text-center text-dark'>
                                    Would you rather

                                </Card.Header>

                                <Card.Body className='text-center'>
                                        {error && <Alert variant='danger'>{error}</Alert>}
                                    <Form onSubmit={(e) => this.handleSubmit(e, id)} ref={f => (this.form = f)}>

                                        <Form.Check
                                            type="radio"
                                            id="optionOne"
                                            label={<h5>{optionOne.text}</h5>}
                                            value="optionOne"
                                            name="answer"
                                        />
                                        <h6 className=''>Or</h6>
                                        <Form.Check
                                            type="radio"
                                            id="optionTwo"
                                            label={<h5>{optionTwo.text}</h5>}
                                            value="optionTwo"
                                            name="answer"
                                        />
                                        
                                        <Button type='submit' variant="dark" className='w-100 mt-3'>Submit</Button>
                                    </Form>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Container>
        )
    }
};

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id];

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null
    }
};


export default connect(mapStateToProps)(UnansweredPoll);
