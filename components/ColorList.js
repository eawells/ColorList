import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  AsyncStorage
} from 'react-native'

import PropTypes from 'prop-types'

import ColorButton from './ColorButton'
import ColorForm from  './ColorForm'

export default class ColorList extends React.Component {
    static navigationOptions = {
        title: 'Available Colors'
    }

   constructor() {
    super()

    this.ds = new ListView.DataSource({
      //this fuction determines when the row should be re-rendered (returns true if should be re-rendered)
      //In this case, it's re-rendered whenever the new row is different from the old one
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const availableColors = []

    this.state = {
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
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
    const { navigate } = this.props.navigation

    const { backgroundColor, dataSource } = this.state
    return (
      <ListView style={[styles.container,{backgroundColor}]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color}
          onSelect={() => navigate('Details', {color})}/> // {color} is a params obj allows us to pass color to the details screen. In the past, would be written { color: color }
        )}
        renderHeader={() => (
          <ColorForm onNewColor={this.newColor}/>
        )}>

      </ListView>
    )
  }
}

ColorList.defaultProps = {
    onColorSelected: f=>f
}

ColorList.propTypes = {
    onColorSelected: PropTypes.func
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
