import React, { Component } from 'react';
import { BackHandler, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import _ from 'lodash';

import Toolbar from 'app/components/Toolbar';
import CoffeeItem from 'app/components/CoffeeItem';

import styles from './styles';

const data = [
    { id: 1, type: 'Espresso' },
    { id: 2, type: 'Cappuccino' },
    { id: 3, type: 'Coffee' },
    { id: 4, type: 'Macciato' },
    { id: 5, type: 'Mocha' },
    { id: 6, type: 'Latte' }
];

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.lastBackButtonPress = null;
        this.state = {
            query: ''
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPress);
    }

    backPress = () => {
        if (this.lastBackButtonPress + 2000 >= new Date().getTime()) {
            BackHandler.exitApp();
            return true;
        }
        this.lastBackButtonPress = new Date().getTime();
        return true;
    };

    renderItem = ({ item }) => {
        return <CoffeeItem item={item} />;
    };

    onQueryChange = query => {
        this.setState({ query });
    };

    filterCoffee = () => {
        const formatQuery = this.state.query.toLowerCase();
        return _.filter(data, item => {
            return this.contains(item.type, formatQuery);
        });
    };

    contains = (name, query) => {
        if (name.toLowerCase().includes(query)) {
            return true;
        }
        return false;
    };

    render() {
        const filteredData = this.filterCoffee();

        return (
            <View style={styles.container}>
                <Toolbar title="HOME" />
                <Searchbar
                    placeholder="Search"
                    onChangeText={this.onQueryChange}
                    value={this.state.firstQuery}
                />
                <FlatList
                    data={filteredData}
                    renderItem={this.renderItem}
                    extraData={this.state.query}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

export default HomeView;
