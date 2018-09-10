import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import CustomStatusBar from '../CustomStatusBar';
import AppStyles from 'app/config/styles';
import styles from './styles';

const MORE_ICON = Platform.OS === 'ios' ? 'more-horiz' : 'more-vert';

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { title } = this.props;
        return (
            <View>
                <CustomStatusBar
                    backgroundColor={AppStyles.color.COLOR_PRIMARY}
                />
                <Appbar>
                    <Appbar.Action
                        color={AppStyles.color.COLOR_WHITE}
                        icon="menu"
                        onPress={() => {}}
                    />
                    <Appbar.Content title={title} titleStyle={styles.title} />
                    {true && (
                        <Appbar.Action
                            color={AppStyles.color.COLOR_WHITE}
                            icon={MORE_ICON}
                            onPress={() => {}}
                        />
                    )}
                </Appbar>
            </View>
        );
    }
}

Toolbar.propTypes = {
    title: PropTypes.string
};
