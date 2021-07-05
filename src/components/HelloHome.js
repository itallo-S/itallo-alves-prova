import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default props => {
    const user = 'John'
    return (
        <View style={[styles.espace, styles.espaceTop]}>
            <Text style={[styles.title]}>Hi {user}, Welcome back</Text>
            <Text style={styles.subtitle}>Very detailed & featured admin.</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    espaceTop: {
        marginTop: 50
    },
    title: {
        fontSize: 25,
        marginBottom: 5
    },
    subtitle: {
        color: '#606060',
        fontSize: 15,
    }
})