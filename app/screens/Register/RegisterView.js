import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class RegisterView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>RegisterView</Text>
            </View>
        );
    }
}

export default RegisterView;
