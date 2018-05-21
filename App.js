import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation'

import ColorList from  './components/ColorList'

import ColorInfo from './components/ColorInfo'

export default App = StackNavigator({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo }
})