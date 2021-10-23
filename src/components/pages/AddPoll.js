import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class AddPoll extends Component {
    render() {

        return (
            <div>
                Add Poll
            </div>
        )
    }
}

function mapStateToProps() {};

export default withRouter(connect(mapStateToProps)(AddPoll));
