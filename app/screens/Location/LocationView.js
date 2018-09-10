import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { NativeModules } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Toolbar from 'app/components/Toolbar';
import styles from './styles';
import AppStyles from 'app/config/styles';

class LocationView extends Component {
    state = {
        batteryLevel: ''
    };
    componentDidMount() {
        NativeModules.BatteryStatus.getBatteryStatus(batteryLevel => {
            this.setState({
                batteryLevel:
                    Platform.OS === 'ios'
                        ? -1 * batteryLevel.level
                        : batteryLevel
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar title="SEARCH SHOPS" />
                <View style={styles.battery}>
                    <Icon
                        name="battery-alert"
                        size={100}
                        color={AppStyles.color.COLOR_PRIMARY}
                    />
                    <Text>Battery Level : {this.state.batteryLevel}</Text>
                </View>
            </View>
        );
    }
}

export default LocationView;
