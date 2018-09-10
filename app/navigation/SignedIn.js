import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from 'app/screens/Home';
import Location from 'app/screens/Location';
import Cart from 'app/screens/Cart';
import Profile from 'app/screens/Profile';
import TabIcon from 'app/components/TabIcon';
import AppStyles from 'app/config/styles';

import PropTypes from 'prop-types';

const HomeTabIcon = ({ tintColor }) => (
    <TabIcon name="home" tintColor={tintColor} />
);

HomeTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const LocationTabIcon = ({ tintColor }) => (
    <TabIcon name="location-on" tintColor={tintColor} />
);

LocationTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const CartTabIcon = ({ tintColor }) => (
    <TabIcon name="shopping-cart" tintColor={tintColor} />
);

CartTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const ProfileTabIcon = ({ tintColor }) => (
    <TabIcon name="face" tintColor={tintColor} />
);

ProfileTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const SignedInNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
                tabBarIcon: HomeTabIcon
            }
        },
        Location: {
            screen: Location,
            navigationOptions: {
                header: null,
                tabBarIcon: LocationTabIcon
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                header: null,
                tabBarIcon: CartTabIcon
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                header: null,
                tabBarIcon: ProfileTabIcon
            }
        }
    },
    {
        labeled: false,
        activeTintColor: AppStyles.color.COLOR_PRIMARY,
        inactiveTintColor: AppStyles.color.COLOR_GREY,
        pressColor: '#7f8c8d',
        barStyle: { backgroundColor: 'white' }
    }
);

export default SignedInNavigator;
