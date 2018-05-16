import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';

import ColorButton from './components/ColorButton'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blueviolet'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }
  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <ColorButton backgroundColor='red'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='blue'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='green'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='salmon'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='blueviolet'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='cyan'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='purple'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='yellow'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='pink'
        onSelect={this.changeColor}/>
         <ColorButton backgroundColor='orange'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='white'
        onSelect={this.changeColor}/>
        <ColorButton backgroundColor='black'
        onSelect={this.changeColor}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})
