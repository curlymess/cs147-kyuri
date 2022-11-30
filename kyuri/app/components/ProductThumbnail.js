import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal.js';



export default function ProductThumbnail(props) {

    let data = {
        name: 'Cucumber Moisturizer',
        image: '../../assets/ProductIcons/product5.png',
        type: 'Moisturizer',
        rating: 5,
        usedBy: [
            '../../assets/Icons/iris.png',
            '../../assets/Icons/tom.png',
        ],
    }

    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
        Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
    });
    if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.pedestalWrapper}>
                </View>
                <View style={styles.nameWrapper}>
                    <Text>{data.name}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pedestalWrapper: {
        width: '50%',
    },
    left: {
        width: '40%',
        backgroundColor: palette.cream,
    },
    nameWrapper: {

    }



});
