import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default props => {
    return (
            
        <View style={styles.containerForm}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput style={styles.input} placeholder={props.placeholder}/>
        </View>

    )
}

const styles = StyleSheet.create({
    containerForm: {
        width: '90%',
        backgroundColor: '#fff',
        marginTop: 25
    },
    title: {
        fontSize: 16,
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#cecece',
        marginHorizontal: 15,
        borderRadius: 5,
        paddingLeft: 10
    }
})