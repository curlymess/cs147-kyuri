import * as React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.back}>
                <Ionicons name="arrow-back-outline" size={18} color='white'/>
                <Text style={styles.backText}>
                    Back
                </Text>
            </Pressable>
            <Pressable style={styles.plus}>
                <Ionicons name="add-circle-outline" size={28} color='white'/>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7CA982',
        width: '100%',
        paddingTop: 40,
        flexDirection: 'row',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    plus: {
        marginLeft: 'auto',
    }
});
