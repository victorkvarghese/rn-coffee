import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: AppStyles.color.COLOR_GREY
    },
    img: {
        width: 56,
        height: 56,
        resizeMode: 'contain'
    },
    title: {
        flex: 1,
        paddingHorizontal: 12,
        fontSize: 16
    }
});

export default styles;
