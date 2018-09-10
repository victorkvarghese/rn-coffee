import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: AppStyles.color.COLOR_WHITE,
        padding: 8
    },
    imgView: {
        alignItems: 'center',
        marginVertical: 12
    },

    inputView: {
        marginTop: 16
    },
    input: {
        marginTop: 8
    },
    loginText: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    regText: {
        color: AppStyles.color.COLOR_PRIMARY,
        fontSize: 14,
        fontWeight: 'bold'
    },
    btn: {
        marginTop: 10
    },
    account: {
        textAlign: 'center',
        marginTop: 12
    },
    forgot: {
        alignItems: 'flex-end',
        marginTop: 16
    }
});

export default styles;
