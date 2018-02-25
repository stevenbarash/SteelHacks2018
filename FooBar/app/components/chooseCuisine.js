import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToggleSwitch from 'toggle-switch-react-native'


class ChooserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
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
  onToggle(isOn){
    //alert('Changed to ' + isOn)
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
        <ToggleSwitch onToggle={this.onToggle} label="Chinese" />
        <ToggleSwitch onToggle={this.onToggle} label="Italian    " />
        <ToggleSwitch onToggle={this.onToggle} label="Indian    " />
        <Button title='Start FooBar' onPress={() => this.props.navigation.navigate('Chooser')} />
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

export default ChooserScreen;