import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


// roxo
// color='#9400d1'
export default props => {
    return (
        <View style={styles.container}>

            <Text style={[styles.title, styles.space]}>{props.title}</Text>

            <View style={styles.line}>
                <Text style={[styles.legend, styles.space]}>{props.legend}</Text>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        marginVertical: 10,
        borderRadius: 2,
        backgroundColor: '#E7EDF6',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#4755AB',
        fontSize: 22
    },
    legend: {
        color: '#606060',
        fontSize: 13
    },
    line: {
        width: '100%',
        borderTopColor: '#cecece',
        borderTopWidth: 1,
        alignItems: 'center'
    },
    space: {
        marginVertical: 10
    }
})