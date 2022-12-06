import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, FlatList } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import MedPedestal from './MedPedestal';
import ProductSlider from './ProductSlider';
import ProductDetailContent from './ProductDetailContent';
import Pedestal from './Pedestal';


import PersonThumbnail from './PersonThumbnail';
import { ScrollView } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';
import { useState } from 'react';

const ProductDetail = ({navigation, route}) => 
{
    const {data} = route.params;
    console.log('1:')

    console.log(data.usedBy)
    let [screen1, screen1Callback] = useState(true);
    let [screen2, screen2Callback] = useState(false);
    let [screen3, screen3Callback] = useState(false);

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
            <ScrollView style={styles.pageContent}>
                <View style={styles.sliderCard}>
                    <View style={styles.sliderCardContent}>
                        <ProductDetailContent
                            s1={screen1}
                            s2={screen2}
                            s3={screen3}
                            data={data}
                        ></ProductDetailContent>
                    </View>
                    <View style={styles.sliderWrapper}>
                        <ProductSlider
                            s1={screen1}
                            s2={screen2}
                            s3={screen3}
                            c1={screen1Callback}
                            c2={screen2Callback}
                            c3={screen3Callback}
                        ></ProductSlider>
                    </View>
                </View>


            </ScrollView>
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
    sliderCard: {
        marginTop: 110,   
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
    pageContent: {
    },
    sliderWrapper: {
        position: 'absolute',
        bottom: '100%',
    },
    sliderCardContent: {
        top: -5,
    }
});