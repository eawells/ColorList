import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import ColorTools from 'color'

const ColorInfo = ({ navigation }) => {
    const colorClickedOn = ColorTools(navigation.state.params.color)
    return (
        <View style={[styles.container, { backgroundColor: colorClickedOn }]} >
            <Text style={[styles.text, { color: colorClickedOn.negate() }]}>
                Ways to write { navigation.state.params.color }:
            </Text>
            <Text style={[styles.text, { color: colorClickedOn.negate() }]}>
                {colorClickedOn.hex()}
            </Text>
            <Text style={[styles.text, { color: colorClickedOn.negate() }]}>
                {colorClickedOn.rgb().string()}
            </Text>
            <Text style={[styles.text, { color: colorClickedOn.negate() }]}>
                {colorClickedOn.hsl().string()}
            </Text>
        </ View>
    )
}

ColorInfo.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.color
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        margin: 10
    }
})

export default ColorInfo