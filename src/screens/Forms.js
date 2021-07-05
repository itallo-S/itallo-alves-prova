import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

// Components
import InputForms from '../components/InputForms'

export default props => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.containerForm}>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Forms</Text>
                    </View>

                    <InputForms title='Email' placeholder='Email' />
                    <InputForms title='Password' placeholder='Password' />
                    <InputForms title='Address' placeholder='Address' />
                    <InputForms title='Address2' placeholder='Address2' />
                    <InputForms title='City' placeholder='City' />
                    <InputForms title='Zip' placeholder='Zip' />

                </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cecece'
    },
    containerForm: {
        flex: 1,
        width: '90%',
        backgroundColor: '#fff'
    },
    titleView: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cecece'
    },
    title: {
        color: '#4755AB',
        fontSize: 20,
        fontWeight: 'bold'
    },
})