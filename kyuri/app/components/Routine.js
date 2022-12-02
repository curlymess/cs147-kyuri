import * as React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Top from './Top';
import { palette } from '../../assets/Themes/palette';
import Ionicons from '@expo/vector-icons/Ionicons';

const Routine = ({navigation}) => 
{
  return (

<View style={styles.container}>
    <Top style={styles.head} navigation={navigation} />

    <Text>Routine! </Text>
</View>
  );
};

export default Routine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
      },
      head: {
        flex: 1,
      },
    

});