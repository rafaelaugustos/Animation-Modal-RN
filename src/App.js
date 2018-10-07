import React, { Component } from 'react'
import { View, Text, StatusBar, Image, StyleSheet, ScrollView, Animated } from 'react-native'
import Styles from './styles'

// Components
import { Header, Card, Modal } from './components'

class App extends Component {
    state = {
        array: [1, 2],
        modal: true,
        margin: new Animated.ValueXY({x: 0, y: 0}),
        radius: new Animated.Value(0)
    }

    _renderCard(){
        let last = this.state.array.length

        return this.state.array.map((item, index) => 
            <Card Last={last === index + 1} onPress={() => this._setValue()} key={index} />
        )
    }

    _setValue(){
        this.setState({modal: true})

        Animated.parallel([
            Animated.timing(this.state.margin.y, {
                toValue: 70,
                duration: 500
            }),
            Animated.timing(this.state.margin.x, {
                toValue: 40,
                duration: 500
            }),
            Animated.timing(this.state.radius, {
                toValue: 20,
                duration: 500
            })
        ]).start()
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'black'}}>
                <Animated.View style={[
                    Styles.Bg, 
                    { 
                        marginTop: this.state.margin.y,
                        marginLeft: this.state.margin.x,
                        marginRight: this.state.margin.x,
                        borderTopLeftRadius: this.state.radius,
                        borderTopRightRadius: this.state.radius,
                    }
                ]}>
                    <StatusBar 
                        barStyle="light-content" 
                    />

                    <Header />

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
                </Animated.View>

                <Modal Show={this.state.modal} />
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