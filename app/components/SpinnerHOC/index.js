import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AppStyles from 'app/config/styles';
import styles from './styles';

export default (Comp: ReactClass<*>) => {
    return ({ spinner, children, ...props }: Object) => (
        <View style={{ flex: 1 }}>
            <Comp {...props}>{children}</Comp>
            {spinner && (
                <View style={[StyleSheet.absoluteFill, styles.indicator]}>
                    <ActivityIndicator
                        size="large"
                        color={AppStyles.color.COLOR_PRIMARY}
                    />
                </View>
            )}
        </View>
    );
};
