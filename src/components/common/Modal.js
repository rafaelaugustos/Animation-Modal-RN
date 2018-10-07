import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// Components
import { Calendar } from '../'

class Modal extends Component {
    state = {
        ModalY: new Animated.Value(850)
    }

    componentWillReceiveProps(){
        this.props.Show && this._Open()
    }
    
    _Open(){
        Animated.spring(this.state.ModalY, {
            toValue: 0,
            friction: 5,
            tension: 15
        }).start()
    }

    _Close(){
        Animated.spring(this.state.ModalY, {
            toValue: 850,
            friction: 5,
            tension: 15
        }).start()
    }

    render(){
        return(
            <Animated.View style={
                [
                    styles.View, 
                    { 
                        marginTop: this.state.ModalY 
                    }
                ]
            }>
                <View style={styles.Modal}>
                    <View style={styles.Header}>
                        <View style={styles.Icons}>
                            <TouchableOpacity style={styles.IconLeft} onPress={() => this._Close()}>
                                <Icon name="arrow-left" color="#FFF" size={20} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.IconRight}>
                                <Icon name="ellipsis-v" color="#FFF" size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ContentHeader}>
                            <View style={styles.ContentIconHeader}>
                                <Icon name="briefcase" size={18} color="#4D73ED" />
                            </View>
                            <Text style={{color: '#D0D0D1', fontSize: 12, fontWeight: '200', marginTop: 10}}>24 Tasks</Text>
                            <Text style={{fontSize: 22, fontWeight: '200', color: '#FFF'}}>Design</Text>
                        </View>
                    </View>

                    <Calendar />

                    <ScrollView style={styles.Timeline}>

                    </ScrollView>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9,
        position: 'absolute',
        top: 0,
        paddingTop: 110
    },
    Modal: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    Header: {
        backgroundColor: '#4D73ED',
        height: 230,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    Icons: {
        flexDirection: 'row',
        marginTop: 30,
        zIndex: 99
    },
    IconLeft: {
        position: 'absolute',
        left: 15,
        zIndex: 9
    },
    IconRight: {
        position: 'absolute',
        right: 15
    },
    ContentHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    ContentIconHeader: {
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Timeline: {
        backgroundColor: '#F5F5F5'
    }
})

export { Modal }