import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ProfileView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => dispatch(loginActions.onLogOut())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);
