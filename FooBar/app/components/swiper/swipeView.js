import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import Card from './card';
import { getBusinesses } from './../../util/yelp';

export default class SwipeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }
    componentDidMount() {
        getBusinesses({}, ['bbq', 'asianfusion', 'japanese', 'italian', 'mexican']).then((response) => {
            this.setState({ cards: response.businesses });
        }).catch((err) => {
            console.log(err);
        });
    }
    handleYup(card) {
        // send yes to steven
    }
    handleNope(card) {
        // send no to steven
    }
    handleMaybe(card) {
        // send maybe to steven
    }
    render() {
        return this.state.cards.length != 0 ? (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            );
    }
}