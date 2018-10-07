import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Calendar extends Component {
    state = {
        days: [1, 2, 3, 4, 5, 6, 7]
    }

    _renderDays(){  
        return this.state.days.map(day => 
            <View style={styles.CalendarItem}>
                <TouchableOpacity style={[day === 7 ? styles.Active : styles.Selects]}>
                    <Text style={[day === 7 ? styles.TextActive : styles.TextItem]}>{day}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.Calendar}>
                <Text style={styles.TextMonth}>
                    February
                </Text>
                <ScrollView horizontal>
                    {this._renderDays()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Calendar: {
        backgroundColor: '#FFF',
        height: 100,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        alignItems: 'center'
    },
    CalendarItem: {
        width: 50,
        alignItems: 'center'
    },
    TextItem: {
        color: '#AAAAAA',
        fontSize: 18
    },
    Selects: {
        backgroundColor: '#FFF',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Active: {
        width: 30,
        height: 30,
        backgroundColor: '#4D73ED',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    TextActive: {
        color: '#FFF'
    },
    TextMonth: {
        color: '#AAAAAA',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 15,
    } 
})

export { Calendar }