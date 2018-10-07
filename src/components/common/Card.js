import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = ({Last}) => {
    return(
        <View style={[styles.Card, { marginRight: Last ? 50 : 0 }]}>
    
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        width: 250,
        height: 450,
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 15,
        marginLeft: 50
    }
})

export { Card }