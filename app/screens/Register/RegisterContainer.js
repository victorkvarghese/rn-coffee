import React, { Component } from 'react';
import RegisterView from './RegisterView';
import { connect } from 'react-redux';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <RegisterView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);
