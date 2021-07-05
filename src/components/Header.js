import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TextInput  } from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

import logo from '../../assets/profileimg.jpg'

export default props => {
    return (
        <View style={styles.containerHeader}>
            <TouchableOpacity onPress={props.drawer}>
                <Icon name="menu" size={25}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.online}></View>
                <Image style={styles.imgLogo} source={logo}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.search}>
                <TextInput style={styles.searchInput} placeholder='Search Here...'/>
                <Icon name='search' size={18}/>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    containerHeader: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginHorizontal: 10
    },
    imgLogo: {
        width: 47,
        height: 47,
        borderRadius:24
    },
    online: {
        right: 0,
        width: 12,
        height: 12,
        zIndex: 1,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: 'green'      
    },
    search: {
        width: '50%',
        height: 32,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#cecece'
    },
    searchInput: {
        width: '90%'
    }
})