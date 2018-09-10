import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

export default class TabIcon extends Component {
    render() {
        const { name, tintColor, style } = this.props;

        return (
            <Icon
                style={style ? style : {}}
                name={name}
                size={24}
                color={tintColor}
            />
        );
    }
}
TabIcon.propTypes = {
    name: PropTypes.string,
    tintColor: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string
};
