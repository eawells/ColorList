import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blueviolet'
    }
    this.backgroundColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }
  render() {
    const { backgroundColor } = this.state
    return (
      <View style={[styles.container,{backgroundColor}]}>
        <Text style={styles.button} onPress={() => this.changeColor('red')}>
        Red
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor('green')}>
        Green
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor('blue')}>
        Blue
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'

  }
})
