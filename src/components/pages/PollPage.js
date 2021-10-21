import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredPoll from '../AnsweredPoll';
import UnansweredPoll from '../UnansweredPoll';



class PollPage extends Component{
    render() {

        const { userAnswers, match } = this.props;
        const id = match.params.id;
        const answered = userAnswers.hasOwnProperty(id) ? true : false;
        console.log('userAns', userAnswers);
        console.log('Match', match)

        return (
            <div>
                {answered ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const userAnswers = users[authedUser].answers;

    return {
        userAnswers
    }
}

export default connect(mapStateToProps)(PollPage);
