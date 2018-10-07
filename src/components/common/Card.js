import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const Card = ({Last, onPress}) => {
    return(
        <TouchableOpacity style={[styles.Card, { marginRight: Last ? 50 : 0 }]} onPress={onPress}>
    
        </TouchableOpacity>
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