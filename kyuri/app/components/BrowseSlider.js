import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';


export default function BrowseSlider(props) {

    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
        Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;
    
    return (
        <View style={styles.sliderContainer}>
            <View style={styles.wrapper}>
                <Pressable 
                    style={props.s1 ? styles.currentButton : styles.button}
                    onPress={() => { props.c1(true); props.c2(false); props.c3(false);}}
                >
                    <Text style={styles.buttonText}>
                        Products
                    </Text>
                </Pressable>
                <Pressable 
                    style={props.s2 ? styles.currentButton : styles.button}
                    onPress={() => { props.c1(false); props.c2(true); props.c3(false);}}
                >
                    <Text style={styles.buttonText}>
                        People
                    </Text>
                </Pressable>
                <Pressable 
                    style={props.s3 ? styles.currentButton : styles.button}
                    onPress={() => { props.c1(false); props.c2(false); props.c3(true);}}
                >
                    <Text style={styles.buttonText}>
                        Posts
                    </Text>    
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    sliderContainer: {
        width: '100%',
        height: 28,
        position: 'relative',
        top: -23,
        marginTop: 10,
    },
    wrapper: {
        height: 24,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.darkBrown,
        borderRadius: 24,
    },
    button: {
        width: '33.3%',
        height: 24,
        backgroundColor: palette.darkBrown,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Monda',
    },
    currentButton: {
        width: '33.3%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        height: 28,
        backgroundColor: palette.green,
    }

});
