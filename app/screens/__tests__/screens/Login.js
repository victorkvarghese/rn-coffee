import 'react-native';
import React from 'react';
import Index from '../../Login/LoginView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const wrapper = () => renderer.create(<Index />).toJSON();
    expect(wrapper).toMatchSnapshot();
});
