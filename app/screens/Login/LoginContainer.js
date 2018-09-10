import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import LoginView from './LoginView';
import * as loginActions from 'app/actions/loginActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        const { navigation, isLoggedIn } = props;
        if (isLoggedIn) {
            navigation.navigate('Home');
        }
        SplashScreen.hide();
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.loadingReducer.isLoginLoading,
        isLoggedIn: state.loginReducer.isLoggedIn
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
