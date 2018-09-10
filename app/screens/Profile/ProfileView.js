import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar';
import Dialog from 'app/components/Dialog';

import styles from './styles';

class ProfileView extends Component {
    state = {
        visible: false
    };

    onPress = () => {
        this.setState({
            visible: true
        });
    };

    onSubmit = () => {
        this.setState(
            {
                visible: false
            },
            () => {
                this.props.onLogOut();
                this.props.navigation.navigate('Login');
            }
        );
    };

    onCancel = () => {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Toolbar title="PROFILE" />

                <Button
                    mode="contained"
                    onPress={this.onPress}
                    style={styles.btn}
                >
                    <Text style={styles.loginText}>LOG OUT</Text>
                </Button>
                <Dialog
                    visible={this.state.visible}
                    onSubmit={this.onSubmit}
                    onCancel={this.onCancel}
                    description="Are you sure you want to log out?"
                />
            </View>
        );
    }
}

ProfileView.propTypes = {
    navigation: PropTypes.object,
    onLogOut: PropTypes.func
};

export default ProfileView;
