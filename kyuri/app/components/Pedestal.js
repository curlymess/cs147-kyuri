import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';



export default function Pedestal(props) {
    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
        Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
    });
    if (!fontsLoaded) return <AppLoading />;


    return (
        <View style={[styles.container, {
            width: 46,
            height: 46,
        }]}>
            <View style={styles.base}></View>
            <View
                style={props.light ? styles.lightPlatform : styles.platform}
            ></View>
            <Image
                source={props.url}
                style={styles.icon}
                resizeMode="contain"
            ></Image>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 2,
    },
    icon: {
        height: '85%',
        position: 'absolute',
        bottom: '15%',
    },
    platform: {
        width: '100%',
        height: 0,
        borderBottomWidth: '20%',
        borderBottomColor: palette.darkBrown,
        borderLeftWidth: '5%',
        borderLeftColor: "transparent",
        borderRightWidth: '5%',
        borderRightColor: "transparent",
        borderStyle: "solid",
        borderRadius: 4,
        position: 'absolute',
        bottom: '9%',
    },
    lightPlatform: {
        width: '100%',
        height: 0,
        borderBottomWidth: '20%',
        borderBottomColor: palette.lightBrown,
        borderLeftWidth: '5%',
        borderLeftColor: "transparent",
        borderRightWidth: '5%',
        borderRightColor: "transparent",
        borderStyle: "solid",
        borderRadius: 4,
        position: 'absolute',
        bottom: '9%',
    },

    base: {
        backgroundColor: palette.green,
        width: '60%',
        height: '10%',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    }
});
