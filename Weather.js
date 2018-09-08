import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain:{
        color: ["#00C6FB", "#005BEA"],
        title:'Raining like a XX',
        subtitle:'For more look outside',
        icon: 'weather-pouring'
    },
    Clear: {
        color: ["#FEF253", "#FF7300"],
        title: 'Sunny as XX',
        subtitle: 'Go get your ass burnt',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        color: ["#00EEBC", "#007ADF"],
        title: 'Thunderstorm in the house',
        subtitle: 'Actually, outside of the house',
        icon: 'weather-lightning-rainy'
    },
    Clouds: {
        color: ["#D7D2CC", "#304352"],
        title: 'Clouds',
        subtitle: 'I know, XX boring',
        icon: 'weather-cloudy'
    },
    Snow: {
        color: ["#7D2EFC", "#89B6E5"],
        title: 'Cold as balls',
        subtitle: 'Do you want to build a snowman? XX no!',
        icon: 'weather-snow'
    },
    Drizzle: {
        color: ["#89F7FE", "#66A6FF"],
        title: 'Drizzle',
        subtitle: 'It\'s like a rain, but gay 🏳️‍🌈',
        icon: 'weather-rainy'
    },
    Haze: {
        color: ["#D7D2CC", "#304352"],
        title: 'Haze',
        subtitle: 'Gloomy haze...',
        icon: 'wether-hail'
    },
    Mist: {
        color: ["#D7D2CC", "#304352"],
        title: 'Mist!',
        subtitle: 'What the mist!',
        icon: 'wether-fog'
    }
}

function Weather({temp, name}){
    return (
        <LinearGradient colors={weatherCases[name].color} style={styles.container} >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[name].icon} />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[name].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.proptype = {
    temp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    upper:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp:{
        fontSize: 48,
        color: 'white',
        marginTop: 10
    },
    lower:{
        flex:1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        color: 'white',
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        color: 'white',
        marginBottom: 40
    }
});