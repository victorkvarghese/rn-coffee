import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class CartView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Cart</Text>
            </View>
        );
    }
}

export default CartView;
