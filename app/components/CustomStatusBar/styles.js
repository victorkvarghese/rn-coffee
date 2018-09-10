import { StyleSheet, Platform, StatusBar } from 'react-native';
import AppStyles from 'app/config/styles';
import { isIphoneX } from 'app/lib/isIphoneX';

const STATUSBAR_HEIGHT =
    Platform.OS === 'ios' ? (isIphoneX() ? 32 : 20) : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    },
    iOsStatusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: AppStyles.color.PRIMARY
    },
    appBar: {
        backgroundColor: AppStyles.color.PRIMARY,
        height: APPBAR_HEIGHT
    }
});

export default styles;
