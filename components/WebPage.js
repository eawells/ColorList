import React from 'react'

import {
    WebView,
    StyleSheet
} from 'react-native'

const WebPage = ({ navigation }) => {
    return (
    <WebView style={styles.container}
        //source={ {uri: navigation.state.params.uri }}
        //since uri is the only param in navigation, can write like this:
        source={ navigation.state.params }
        contentInset={{ top: -650 }} />
    )
}

WebPage.navigationOptions = {
    title: 'All Colors'
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default WebPage