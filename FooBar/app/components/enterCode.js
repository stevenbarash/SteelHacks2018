import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View , Button} from 'react-native';

export default class EnterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={{height: 80, fontSize: 30}}
          placeholder="Type code here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button title='Start FooBar' onPress={() => this.props.navigation.navigate('Chooser')} />
      </View>
    );
  }
}