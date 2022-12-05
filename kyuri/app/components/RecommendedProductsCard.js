import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';

const RecommendedProductsCard = ({ navigation }) => 
{
  return (
    <View style={styles.container}>
        <View style={styles.pedestalContainer}>
            <Pedestal
                url={require('../../assets/Icons/product1.png')}
                light={true}
            ></Pedestal>
            <Pedestal
                url={require('../../assets/Icons/product8.png')}
                light={true}
            ></Pedestal>
            <Pedestal
                url={require('../../assets/Icons/product13.png')}
                light={true}
            ></Pedestal>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Hand picked products for you!</Text>
            <Text style={styles.subtitle}>Based on your interests</Text>
        </View>
    </View>
  );
};

export default RecommendedProductsCard;

const styles = StyleSheet.create({
      container: {
        backgroundColor: palette.darkBrown,
        borderRadius: 12,
        marginHorizontal: 10,
        position: 'relative',
        paddingBottom: 25,
        paddingTop: 25,
        marginTop: 30,
        paddingHorizontal: 10,
        flexDirection: 'row',
      },
      textContainer: {
        flexDirection: 'column',
      },
      title: {
        fontSize: 16,
        color: palette.white,
        fontFamily: 'MondaBold',
      },
      subtitle: {
        fontSize: 12,
        color: palette.white,
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