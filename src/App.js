import React, { Component } from 'react'
import { View, Text, StatusBar, Image, StyleSheet, ScrollView, Animated } from 'react-native'
import Styles from './styles'

// Components
import { Header, Card, Modal } from './components'

class App extends Component {
    state = {
        array: [1, 2],
        modal: true
    }

    _renderCard(){
        let last = this.state.array.length

        return this.state.array.map((item, index) => 
            <Card Last={last === index + 1} onPress={() => this._setValue()} />
        )
    }

    _setValue(){
        this.setState({modal: true})

    }

    render(){
        return(
            <View style={Styles.Bg}>
                <StatusBar 
                    barStyle="light-content" 
                />

                <Header />
                <Modal Show={this.state.modal} />

                <View style={style.Content}>
                    <View style={{paddingLeft: 50}}>
                        <Image
                            source={require('./assets/man.png')}
                            style={style.IconContent}
                        />
                    </View>

                    <View style={style.textContent}>
                        <Text style={[Styles.ColorWhite, style.TextTitle]}>February 2</Text>
                        <Text style={[Styles.ColorWhite, style.SubText]}>Hi, TGC! Will it be a nice day today?</Text>
                        <Text style={[Styles.ColorWhite, style.SubText]}>you have 7 tasks todo today.</Text>
                    </View>

                    <ScrollView horizontal style={{paddingTop: 50, height: 530}}>
                        {this._renderCard()}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    Content: {
    },
    IconContent: {
        resizeMode: 'contain',
        width: 40,
        height: 40
    },
    textContent: {
        marginTop: 50,
        paddingLeft: 50
    },
    TextTitle: {
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 10
    },
    SubText: {
        fontSize: 12,
        fontWeight: '200'
    }
})

export default App