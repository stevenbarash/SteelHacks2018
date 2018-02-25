import React from 'react';

import SwipeView from './app/components/swiper/swipeView';

export default class App extends React.Component {
  render() {
    return (
        <SwipeView style={{ flex: 1, justifyContent:'center', alignItems:'center' }} />
    );
  }
}