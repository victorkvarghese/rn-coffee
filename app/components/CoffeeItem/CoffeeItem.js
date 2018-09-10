import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Images from 'app/config/images';
import styles from './styles';

export default class CoffeeItem extends Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.item.id === nextProps.item.id) {
            return false;
        }
        return true;
    }

    getImage = type => {
        switch (type) {
        case 'Espresso':
            return Images.icons.espresso;
        case 'Cappuccino':
            return Images.icons.cappuccino;
        case 'Coffee':
            return Images.icons.coffee;
        case 'Macciato':
            return Images.icons.macciato;
        case 'Mocha':
            return Images.icons.mocha;
        case 'Latte':
            return Images.icons.latte;
        }
    };

    onPress = () => {};

    render() {
        const { item } = this.props;
        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View style={styles.item}>
                    <Image
                        source={this.getImage(item.type)}
                        style={styles.img}
                    />
                    <Text style={styles.title}>{item.type}</Text>
                    <Icon
                        style={styles.iconStyle}
                        name="keyboard-arrow-right"
                        size={24}
                        color="grey"
                    />
                </View>
            </TouchableRipple>
        );
    }
}

CoffeeItem.propTypes = {
    item: PropTypes.object
};
