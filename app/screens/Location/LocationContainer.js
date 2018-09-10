import React, { Component } from 'react';
import LocationView from './LocationView';
import { connect } from 'react-redux';

class LocationContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LocationView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationContainer);
