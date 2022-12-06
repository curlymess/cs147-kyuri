import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';

const RoutineCard = ({ navigation, title, subtitle }) => 
{
  return (
    <View style={styles.container}>
        <View style={styles.pedestalContainer}>
            <Pedestal
                url={require('../../assets/Icons/product2.png')}
            ></Pedestal>
            <Pedestal
                url={require('../../assets/Icons/product8.png')}
            ></Pedestal>
            <Pedestal
                url={require('../../assets/Icons/product13.png')}
            ></Pedestal>
        </View>
        <View style={styles.left}>
            <Text style={styles.currText}>{title}</Text>
        </View>
        <View style={styles.right}>
            <Text style={styles.infoText}>
                Treats 
                <Text style={styles.notBold}> Dry Skin</Text>
            </Text>
            <Text style={styles.infoText}>
                Steps 
                <Text style={styles.notBold}> 3</Text>
            </Text>
            <Text style={styles.infoText}>
                Season 
                <Text style={styles.notBold}> Winter</Text>
            </Text>
        </View>
    </View>
  );
};

export default RoutineCard;

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
        flexDirection: 'row',
      },
      currText: {
        fontSize: 16,
        fontFamily: 'MondaBold',
      },
      left: {
        maxWidth: 160,
      },
      infoText: {
        fontSize: 12,
        fontFamily: 'MondaBold',
      },
      notBold: {
        fontFamily: 'Monda',
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
      },
      right: {
        marginLeft: 10,
      }
});