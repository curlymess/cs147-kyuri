import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';

export default function BrowseScreen() {
    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <Text>
                Browse
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    
});
