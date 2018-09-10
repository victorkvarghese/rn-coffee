import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    rounded: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: AppStyles.color.COLOR_GREY,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
