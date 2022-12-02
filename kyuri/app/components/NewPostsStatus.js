import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal.js';
import MedPedestal from './MedPedestal.js';

import { withTheme } from 'react-native-elements';



export default function NewPostsStatus(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>11 New Posts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.mediumBrown,
        paddingVertical: 2,
        paddingHorizontal: 5,
        width: 150,
        borderRadius: 20,
        marginHorizontal: 'auto',
    },
    text: {
        fontFamily: 'Monda',
        color: 'white',
    }
});
