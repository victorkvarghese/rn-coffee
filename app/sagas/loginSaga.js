/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    try {
        const response = yield call(
            loginUser,
            action.username,
            action.password
        );

        //simulate api
        yield delay(3000);

        yield put(loginActions.onLoginResponse(response));
        yield put(loginActions.disableLoader({}));
        yield call(navigationActions.navigateToSignedInStack);
    } catch (error) {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Coffee', 'failed');
        }, 200);
    }
}
