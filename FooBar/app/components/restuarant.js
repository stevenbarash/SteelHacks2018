import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {getRestaurant} from './../util/yelp';

export default class RestuarantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    resuarant:{}
    };
  }
  componentDidMount() {
    this.loadRestuarants();
  }
  loadRestuarants() {
  	  getRestaurant(this.props.id).then((response) => {
  	  	this.setState({resuarant:response})
  	  })
    .catch((error) => {
      console.error(error);
    });
    // getRestuarants(params)
    //   .then(data => {
    //     console.log("requested Restuarants successfully");

    //     for (var i = 0; i < data.value.length; i++) {
    //       data.value[i].key = i;
    //     }
    //     this.setState({ data: data.value, length: data.value.length });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <View style={{padding:20, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{this.state.resuarant.name} {this.props.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
