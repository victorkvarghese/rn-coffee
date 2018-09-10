import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { NativeModules } from 'react-native';

import Toolbar from 'app/components/Toolbar';
import styles from './styles';

class LocationView extends Component {
    state = {
        batteryLevel: ''
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            this.getBatteryLevel(batteryLevel => {
                console.log('Test', batteryLevel);
                this.setState({
                    batteryLevel
                });
            });
        }
    }

    getBatteryLevel = callback => {
        NativeModules.BatteryStatus.getBatteryStatus(callback);
    };

    render() {
        return (
            <View style={styles.container}>
                <Toolbar title="SEARCH SHOPS" />
                <Text>Battery Level : {this.state.batteryLevel}</Text>
            </View>
        );
    }
}

export default LocationView;
