import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import MedPedestal from './MedPedestal';
import PersonThumbnail from './PersonThumbnail';
import { ScrollView } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';


const ProductDetail = ({navigation, route}) => 
{
  const {data} = route.params;

  return (
    <View style={styles.container}>
        <Top navigation={navigation}/>
        <View style={styles.cardWrapper}>
            <View style={styles.card}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.brandText}>by 
                    <Text style={styles.brandName}> BrandName </Text>
                </Text>
                <View style={styles.pedestalWrapper}>
                    <MedPedestal
                        url={data.image}
                        light={true}
                    ></MedPedestal>
                </View>
            </View>
        </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    cardWrapper: {
        position: 'absolute',
        top:50,
        zIndex: 3,
        elevation: 3,
        width: '100%',
    },
    card: {
        backgroundColor: palette.darkBrown,
        marginHorizontal: 10,
        padding: 10,
        paddingBottom: 12,
        borderRadius: 12,
        position: 'relative',
    },
    title: {
        fontSize: 24,
        fontFamily: 'MondaBold',
        color: palette.white,
    },
    brandText: {
        fontFamily: 'Monda',
        position: 'relative',
        top: -5,
        color: palette.white,
    },
    pedestalWrapper: {
        position: 'absolute',
        bottom: -15,
        right: 10,
    },
});