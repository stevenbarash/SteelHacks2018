import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                backgroundColor: this.props.backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 300,
                height: 300
            }}>
                <Text>{this.props.name}</Text>
                <Image style={{ width: 300, height: 300 }} source={{ uri: this.props.image_url }} />
                <Text>{
                    this.props.categories.map(i => i.title).join(', ')
                }</Text>
                <Text>{this.props.rating + ' / 5'}</Text>
                <Text>{this.props.price}</Text>
                <TouchableOpacity onPress={() => { console.log('sup') }} />
            </View>
        );
    }
}