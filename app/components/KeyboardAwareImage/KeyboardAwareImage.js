import React, { Component } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Metrics from 'app/config/metrics';

const IMAGE_HEIGHT = Metrics.screenHeight / 3;
const IMAGE_HEIGHT_SMALL = Metrics.screenHeight / 5;

export default class KeyboardAwareImage extends Component {
    constructor(props) {
        super(props);

        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.keyboardWillShowSub = Keyboard.addListener(
                'keyboardWillShow',
                this.keyboardWillShow
            );
            this.keyboardWillHideSub = Keyboard.addListener(
                'keyboardWillHide',
                this.keyboardWillHide
            );
        } else {
            this.keyboardWillShowSub = Keyboard.addListener(
                'keyboardDidShow',
                this.keyboardWillShow
            );
            this.keyboardWillHideSub = Keyboard.addListener(
                'keyboardDidHide',
                this.keyboardWillHide
            );
        }
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = () => {
        Animated.timing(this.imageHeight, {
            duration: 240,
            toValue: IMAGE_HEIGHT_SMALL
        }).start();
    };

    keyboardWillHide = () => {
        Animated.timing(this.imageHeight, {
            duration: 240,
            toValue: IMAGE_HEIGHT
        }).start();
    };

    render() {
        const { source } = this.props;
        return (
            <Animated.Image
                source={source}
                style={[
                    styles.icon,
                    { width: this.imageHeight, height: this.imageHeight }
                ]}
            />
        );
    }
}

KeyboardAwareImage.propTypes = {
    source: PropTypes.number
};
