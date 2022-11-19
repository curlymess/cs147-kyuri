import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';

export default function Top(props) {
    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable style={styles.back}>
                    <Ionicons name="arrow-back-outline" size={18} color='white'/>
                    <Text style={styles.backText}>
                        Back
                    </Text>
                </Pressable>
            </View>
            <View style={styles.logoContainter}>
                <Image style={styles.logo} source={Icons.logo} />
                <Text style={styles.kyuritxt}>Kyuri</Text>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.plus}>
                    <Ionicons name="add-circle-outline" size={28} color='white'/>
                </Pressable>
                <Pressable>
                    <Ionicons name="search-outline" size={28} color='white'/>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        width: '100%',
        paddingTop: 40,
        paddingBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        color: palette.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    plus: {
        marginLeft: 'auto',
    },
    logoContainter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    kyuritxt: {
        fontFamily: 'Rosmatika',
        color: palette.white,
        fontSize: 24,
    },
    logo: {
        resizeMode: 'contain',
        maxHeight: 30,
        maxWidth: 30,
    },
});
