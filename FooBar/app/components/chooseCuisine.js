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
      chinese: false,
      italian: false,
      mexican: false,
      indian: false,
      american: false
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

        <TouchableHighlight onPress={() => { this.setState({ chinese: !this.state.chinese }) }}>
          <View style={{ padding: 20, backgroundColor: this.state.chinese ? 'green' : 'red' }}>
            <Text>Chinese</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.setState({ italian: !this.state.italian }) }}>
          <View style={{ padding: 20, backgroundColor: this.state.italian ? 'green' : 'red' }}>
            <Text>Italian</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.setState({ mexican: !this.state.mexican }) }}>
          <View style={{ padding: 20, backgroundColor: this.state.mexican ? 'green' : 'red' }}>
            <Text>Mexican</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.setState({ indian: !this.state.indian }) }}>
          <View style={{ padding: 20, backgroundColor: this.state.indian ? 'green' : 'red' }}>
            <Text>Indian</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.setState({ american: !this.state.american }) }}>
          <View style={{ padding: 20, backgroundColor: this.state.american ? 'green' : 'red' }}>
            <Text>American</Text>
          </View>
        </TouchableHighlight>

        <Button title='Start FooBar' onPress={() => {
          var categories = [];
          //['chinese', 'mexican']
          categories.push('chinese')
          this.props.navigation.navigate('Swipe', { latitude: this.state.latitude, longitude: this.state.longitude, categories})
        }} />
        <Text>Your Location:</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
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