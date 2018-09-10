/* StatuBar component  
 * only works/needed on Android
 */

import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CustomStatusBar = props => {
    // if (Platform.OS === 'ios') {
    //     return (
    //         <View style={[styles.iOsStatusBar]}>
    //             <StatusBar
    //                 translucent
    //                 backgroundColor={props.backgroundColor}
    //                 barStyle="light-content"
    //                 {...props}
    //             />
    //         </View>
    //     );
    // }
    return (
        <View
            style={[
                styles.statusBar,
                { backgroundColor: props.backgroundColor }
            ]}
        >
            <StatusBar
                translucent
                backgroundColor={props.backgroundColor}
                barStyle="light-content"
                {...props}
            />
        </View>
    );
};

CustomStatusBar.propTypes = {
    backgroundColor: PropTypes.string
};

export default CustomStatusBar;
