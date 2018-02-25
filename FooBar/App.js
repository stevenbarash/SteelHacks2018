import React, { Component } from 'react';

import { StackNavigator, TabNavigator } from 'react-navigation';

import SwipeView from './app/components/swiper/swipeView';
import ChooserScreen from './app/components/chooseCuisine';
import EnterScreen from './app/components/enterCode';
import ResultsScreen from './app/components/viewResults';

const Tabs = TabNavigator({
  Create: { screen: ChooserScreen },
  Join: { screen: EnterScreen }
}, { mode: 'modal' });

const RestaurantStack = StackNavigator({
  Swipe: { screen: SwipeView },
  Results: { screen: ResultsScreen }
})
export default StackNavigator({
  Home: { screen: Tabs },
  Swipe: { screen: RestaurantStack },
}, { headerMode: 'none' });