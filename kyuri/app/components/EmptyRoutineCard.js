import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';

const EmptyRoutineCard = ({ navigation }) => 
{
  return (
    <View style={styles.container}>
        <View style={styles.pedestalContainer}>
            <Pedestal
                url={require('../../assets/Icons/product0.png')}
            ></Pedestal>
            <Pedestal
                url={require('../../assets/Icons/product0.png')}
            ></Pedestal>
            <Pedestal
                url={require('../../assets/Icons/product0.png')}
            ></Pedestal>
        </View>
        <Text style={styles.ctaText}>Create your first routine!</Text>
        <Pressable style={styles.addBttn} onPress={() => navigation.navigate('Routine', { navigation: navigation })}>
          <Ionicons name={'add-circle-outline'} size={40} color={palette.green} />
        </Pressable>
    </View>
  );
};

export default EmptyRoutineCard;

const styles = StyleSheet.create({
      container: {
        backgroundColor: palette.cream,
        borderRadius: 12,
        marginHorizontal: 10,
        position: 'relative',
        paddingBottom: 15,
        paddingTop: 25,
        marginTop: 30,
        paddingHorizontal: 10,
      },
      ctaText: {
        fontSize: 16,
        fontFamily: 'MondaBold',
      },
      pedestalContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: -30,
        alignSelf: 'left',
        paddingLeft: 10,
      },
      addBttn: {
        alignSelf: 'center',
      }
});