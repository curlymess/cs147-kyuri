import * as React from 'react';
import { View, StyleSheet, Text, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import { useState } from 'react';



export default function Checkbox(props) {
    let cloneState = {...props.fullState};
    function onPressFunc() {
        cloneState.list[props.outer].content[props.inner].active = !cloneState.list[props.outer].content[props.inner].active;
        props.callback(cloneState);
    }
    return (
        <View style={styles.container}>
            <Pressable 
                style={!props.checked ? styles.checkbox : styles.activeCheckbox}
                onPress={() => onPressFunc()}
            >
                <Ionicons name={'checkmark-outline'} size={12} color='#F6F6F6' />
            </Pressable>
            <Text style={styles.label}>{props.label}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeCheckbox: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: '#5DB075',
        borderColor: '#4B9460',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: 'Monda',
        marginLeft: 5,
    }
});
