import * as React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Onboarding = () => 
{
  return (

<View style={styles.container}>
    <Text>onboarding</Text>
</View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal: 10,
    },

});