import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Modal extends Component {
    render(){
        return(
            <View style={styles.View}>
                <View style={styles.Modal}>
                    <View style={styles.Header}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    }
})

export { Modal }