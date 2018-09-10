import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import KeyboardAwareImage from 'app/components/KeyboardAwareImage';
import SpinnerHOC from 'app/components/SpinnerHOC';
import Images from 'app/config/images';
import styles from './styles';

//HOC For showing fullscreen loader about the screen
const FullScreenSpinnerView = SpinnerHOC(View);

class LoginView extends Component {
    state = {
        email: '',
        password: '',
        visible: false,
        snack: ''
    };

    onPress = () => {
        this.dismissKeyboard();
        const { email, password } = this.state;
        if (email.length > 0 && password.length > 0) {
            this.props.onLogin(email, password);
        } else {
            this.setState({
                visible: true,
                snack: 'Missing Credentials'
            });
        }
    };

    onEmailChanged = text => {
        this.setState({
            email: text
        });
    };
    onPasswordChanged = text => {
        this.setState({
            password: text
        });
    };

    dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    onRegister = () => {
        this.setState({
            visible: true,
            snack: 'Register not implemented yet'
        });
    };

    onForgot = () => {};

    renderLogo = () => {
        return (
            <View style={styles.imgView}>
                <KeyboardAwareImage source={Images.coffee} />
            </View>
        );
    };

    renderSnackBar = () => {
        return (
            <Snackbar
                visible={this.state.visible}
                onDismiss={() => this.setState({ visible: false })}
                action={{
                    label: 'OK',
                    onPress: () => {
                        // Do something
                    }
                }}
            >
                {this.state.snack}
            </Snackbar>
        );
    };

    renderInputView = () => {
        return (
            <View style={styles.inputView}>
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={this.state.email}
                    style={styles.input}
                    onChangeText={this.onEmailChanged}
                    error={this.state.emailError}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    secureTextEntry
                    value={this.state.password}
                    style={styles.input}
                    onChangeText={this.onPasswordChanged}
                />

                <Button
                    mode="contained"
                    onPress={this.onPress}
                    style={styles.btn}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                </Button>
                <Button
                    mode="flat"
                    onPress={this.onForgot}
                    style={styles.forgot}
                >
                    <Text>Forgot Password</Text>
                </Button>
                <Text style={styles.account}>Dont have an account</Text>

                <Button mode="flat" onPress={this.onRegister}>
                    <Text style={styles.regText}>Register</Text>
                </Button>
            </View>
        );
    };

    render() {
        return (
            <FullScreenSpinnerView
                spinner={this.props.isLoading}
                style={styles.main}
            >
                <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
                        <View style={styles.container}>
                            {this.renderLogo()}
                            {this.renderInputView()}
                            {this.renderSnackBar()}
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </FullScreenSpinnerView>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func,
    theme: PropTypes.object,
    isLoading: PropTypes.bool
};

export default LoginView;
