import React, { Component } from 'react';

import { StackNavigator, TabNavigator } from 'react-navigation';

import SwipeView from './app/components/swiper/swipeView';
import ChooserScreen from './app/components/chooseCuisine';
import EnterScreen from './app/components/enterCode';

const Tabs = TabNavigator({
  Create: { screen: ChooserScreen },
  Join: { screen: EnterScreen }
}, { mode: 'modal' });

export default StackNavigator({
  Home: { screen: Tabs },
  Swipe: { screen: SwipeView },
}, { headerMode: 'none' });