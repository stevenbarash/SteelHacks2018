import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToggleSwitch from 'toggle-switch-react-native'


export default class ChooserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 37,
      longitude: -122,
      error: null,
      categories: { chinese: false, italian: false, mexican: false, indian: false, american: false }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.welcome}>
          FooBar
        </Text>
        <Text style={styles.instructions}>
          Food Choices
        </Text>
        {Object.keys(this.state.categories).map((key) => {
          var categories = this.state.categories;
          return (
            <TouchableHighlight key={key} onPress={() => {
              categories[key] = !this.state.categories[key];
              this.setState({ categories: categories })
            }}>
              <View style={{ padding: 20, backgroundColor: this.state.categories[key] ? 'green' : 'red' }}>
                <Text>{key}</Text>
              </View>
            </TouchableHighlight>
          )
        })}

        <Button title='Start FooBar' onPress={() => {
          var allcategories = Object.keys(this.state.categories);
          console.log(allcategories);
          var categories = []
          for (var i = 0; i < allcategories.length; i++) {
            if (this.state.categories[allcategories[i]])
              categories.push(allcategories[i]);
          }
          this.props.navigation.navigate('Swipe', { latitude: this.state.latitude, longitude: this.state.longitude, categories: categories })
        }} />
        <Text>Your Location:</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View >
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