import { createStackNavigator } from 'react-navigation';

import Login from 'app/screens/Login';
import Register from 'app/screens/Register';
import SignedIn from './SignedIn';

const SignedOutNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    Register: {
        screen: Register,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    SignedIn: {
        screen: SignedIn,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default SignedOutNavigator;
