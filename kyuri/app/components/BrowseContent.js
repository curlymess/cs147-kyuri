import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';



export default function BrowseContent(props) {
    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
        Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;
    
    if (props.screen1Prop) {
        return (
            <View>
                <Text>
                    Products
                </Text>
            </View>
        );    
    } else if (props.screen2Prop) {
        return (
            <View>
                <Text>
                    People
                </Text>
            </View>
        );    
    } else if (props.screen3Prop) {
        return (
            <View>
                <Text>
                    Posts
                </Text>
            </View>
        );    
    }
}
const styles = StyleSheet.create({

});
