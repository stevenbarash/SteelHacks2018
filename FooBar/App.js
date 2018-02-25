import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ChooserScreen from './app/components/chooseCuisine'
import CreatorScreen from './app/components/createCode';
import EnterScreen from './app/components/enterCode';

export default StackNavigator({
  Creator: { screen: CreatorScreen },
  Chooser: { screen: ChooserScreen },
  Enter: {screen: EnterScreen},
});
