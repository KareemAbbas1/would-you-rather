import { Component } from 'react';
import UserCard from '../UserCard';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

class LeaderBoard extends Component {
    render() {

        return (
            <div>
                <Container>
                    <h2 className='text-center pt-4'>Leaderboard</h2>
                    <hr></hr>
                </Container>
                {this.props.usersScores.map((id) => (
                    <UserCard key={id} id={id} />
                ))}
            </div>
        );
    };
};

function mapStateToProps({ users }) {
    const scores = Object.keys(users).sort((a, b) => {

        const scoresA = Object.keys(users[a].answers).length + users[a].questions.length;
        const scoresB = Object.keys(users[b].answers).length + users[b].questions.length;

        return scoresA - scoresB;

    }).reverse();

    return {
        usersScores: scores
    };
};

export default connect(mapStateToProps)(LeaderBoard);
