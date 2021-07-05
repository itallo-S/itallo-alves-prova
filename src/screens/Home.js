import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// Components
import Card from '../components/CardHome'
import HelloHome from '../components/HelloHome'
import ChartHome from '../components/ChartHome'

export default props => {
    const user = 'John'
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.espace}>
                <HelloHome/>
                
                <Card icon='users' title='29.75 M' subtitle='Total Users'/>
                <Card grey icon='eye' title='51.25 K' subtitle='Daily Visitors'/>
                <Card green icon='download-cloud' title='166.89 M' subtitle='Downloads'/>
                <Card red icon='shopping-cart' title='1,250 K' subtitle='Purchased'/>
                
                <ChartHome title='Bar Chart' legend='Updated 2 hours ago'/>
                <ChartHome title='Line Chart' legend='Update just now'/>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece'
    },

    espace: {
        marginHorizontal: 15
    }
})