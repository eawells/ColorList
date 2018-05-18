import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  AsyncStorage
} from 'react-native'

import ColorButton from './components/ColorButton'
import ColorForm from  './components/ColorForm'

export default class App extends React.Component {
  constructor() {
    super()

    this.ds = new ListView.DataSource({
      //this fuction determines when the row should be re-rendered (returns true if should be re-rendered)
      //In this case, it's re-rendered whenever the new row is different from the old one
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const availableColors = []

    this.state = {
      backgroundColor: 'blueviolet',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
    this.newColor = this.newColor.bind(this)
  }

  componentDidMount() {
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err, data) => {
        if(err) {
          console.error('Error loading colors', err)
        } else {
          const availableColors = JSON.parse(data)
          this.setState({
            availableColors,
            dataSource: this.ds.cloneWithRows(availableColors)
          })
        }
      }
    )
  }

  saveColors(colors) {
    AsyncStorage.setItem(
      //where we are saving
      '@ColorListStore:Colors',
      //what we are saving
      JSON.stringify(colors)
    )
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  newColor(color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    })
    this.saveColors(availableColors)
  }

  render() {
    const { backgroundColor, dataSource } = this.state
    return (
      <ListView style={[styles.container,{backgroundColor}]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color}
          onSelect={this.changeColor}/>
        )}
        renderHeader={() => (
          <ColorForm onNewColor={this.newColor}/>
        )}>

      </ListView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'lightgrey',
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
})
