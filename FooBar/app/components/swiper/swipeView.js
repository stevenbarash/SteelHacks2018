import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import Card from './card';
import { getBusinesses } from './../../util/yelp';

export default class SwipeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            length: 0
        };
    }
    componentDidMount() {
        this.loadBusinesses({}, ['mexican', 'chinese', 'italian']);
    }
    loadBusinesses(params, categories) {
        getBusinesses(params, categories).then((response) => {
            this.setState({ cards: response.businesses, length: this.state.length + response.businesses.length });
        }).catch((err) => {
            console.log(err);
        });
    }
    handleYup(card) {
        console.log("yup");
        // send yes to steven
    }
    handleNope(card) {
        console.log("nope");
        // send no to steven
    }
    handleMaybe(card) {
        console.log("maybe");
        // send maybe to steven
    }
    render() {
        return this.state.cards.length != 0 ? (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                loop={true}
                onLoop={() => { this.loadBusinesses({ offset: this.state.length }, ['mexican', 'chinese', 'italian']) }}
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