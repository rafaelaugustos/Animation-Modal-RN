import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = () => {
    return(
        <View style={styles.Header}>
            <TouchableOpacity style={styles.IconLeft}>
                <Image 
                    source={require('../../assets/menu.png')}
                    style={styles.Icon}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconRight}>
                <Image 
                    source={require('../../assets/search.png')}
                    style={styles.Icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 45,
        flexDirection: 'row'
    },
    Icon: {
        width: 20,
        height: 25,
        resizeMode: 'contain'
    },
    IconLeft: {
        position: 'absolute',
        left: 20
    },
    IconRight: {
        position: 'absolute',
        right: 20
    }
})

export { Header }