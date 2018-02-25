import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class CreateScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title='Start a New FooBar' onPress={() => this.props.navigation.navigate('Chooser')} />
                <Button title='Enter FooBar Code' onPress={() => this.props.navigation.navigate('Enter')} />
            </View>
        );
    }
}