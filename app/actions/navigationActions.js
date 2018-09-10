/*
 * Reducer actions related with navigation
 */
import { NavigationActions } from 'react-navigation';
import NavigationService from 'app/navigation/NavigationService';

export function navigateToSignedInStack(params) {
    NavigationService.navigate('SignedIn', params);
}
