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
        rating: 4,
        usedBy: [
            '../../assets/Icons/iris.png',
            '../../assets/Icons/tom.png',
        ],
    }

    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
        Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
        MondaBold: require('../../assets/Fonts/Monda-Bold.ttf'),
    });
    if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.pedestalWrapper}>
                </View>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.rightTop}>
                    <Text style={styles.typeLabel}>Type </Text>
                    <Text style={styles.type}>{data.type}</Text>
                    <View style={styles.stars}>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star-outline" size={12} color='white'/>

                    </View>
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
        height: 64,
        borderRadius: 12,
        overflow: 'hidden',
    },
    pedestalWrapper: {
        width: '40%',
    },
    left: {
        width: '45%',
        backgroundColor: palette.cream,
        height: '100%',
        flexDirection: 'row',
    },
    right: {
        width: '55%',
        height: '100%',
        backgroundColor: palette.darkBrown,
    },
    nameWrapper: {
        width: '60%',
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'MondaBold',
    },
    rightTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    typeLabel: {
        fontFamily: 'MondaBold',
        color: 'white',
        
    },
    type: {
        color: 'white',
        fontFamily: 'Monda',
        marginTop: 0.5,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 5,
    }
});
