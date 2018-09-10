import React, { Component } from 'react';
import CartView from './CartView';
import { connect } from 'react-redux';

class CartContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <CartView {...this.props} />;
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
)(CartContainer);
