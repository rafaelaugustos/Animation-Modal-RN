import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Styles from './styles'

class App extends Component {
    render(){
        return(
            <View style={Styles.Bg}>
                <StatusBar 
                    barStyle="light-content" 
                />
            </View>
        )
    }
}

export default App