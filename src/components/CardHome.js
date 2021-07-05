import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

// roxo
// color='#9400d1'
export default props => {
    const styleTitle = [styles.title]
    if (props.grey) styleTitle.push(styles.grey)
    if (props.green) styleTitle.push(styles.green)
    if (props.red) styleTitle.push(styles.red)

    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name={props.icon} size={50}/>
            
            <View style={styles.text}>
                <Text style={styleTitle}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        borderRadius: 2,
        borderTopWidth: 3,
        borderTopColor: '#4755AB',
        backgroundColor: '#E7EDF6',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 20
    },
    text: {
        marginRight: 20,
        alignItems: 'flex-end'
    },
    title: {
        color: '#007bff',
        fontWeight: 'bold',
        fontSize: 30
    },
    subtitle: {
        color: '#606060',
        fontSize: 13
    },
    grey: {
        color: '#6c757d'
    },
    green: {
        color: '#28a745'
    },
    red: {
        color: '#dc3545'
    }
})