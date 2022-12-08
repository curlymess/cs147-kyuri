import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';
import MedPedestal from'./MedPedestal';
import Top from './Top';


export default function RecommendedProductsDetail({navigation, route}) {
    let data = {
        name: 'Cilantro Sunscreen',
        image: require('../../assets/Icons/product1.png'),
        usedBy: [require('../../assets/Icons/p2.png'), require('../../assets/Icons/p4.png')]
    }
    return (
        <View style={styles.container}>
            <Top navigation={navigation}/>
            <View style={styles.topTextWrapper}>
                <View style={styles.topTextCont}>
                    <Text style={styles.topText}>Recommended Products</Text>
                </View>
            </View>
            <ScrollView>
            <View style={styles.pedestalContainer}>
                <MedPedestal
                    url={require('../../assets/Icons/product1.png')}
                ></MedPedestal>
                <View style={styles.pedestalMargin}>
                    <MedPedestal
                        url={require('../../assets/Icons/product8.png')}
                    ></MedPedestal>
                </View>
                <MedPedestal
                    url={require('../../assets/Icons/product13.png')}
                ></MedPedestal>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.productTop}>
                    <View>
                        <Text style={styles.name}>Cilantro Sunscreen</Text>
                        <Text style={styles.brand}>@BrandProducts</Text>
                    </View>
                    <View style={styles.pedestalWrapper}>
                        <MedPedestal
                            url={require('../../assets/Icons/product1.png')}
                        ></MedPedestal>
                    </View>
                </View>
                <View style = {styles.tagContainer}>
                    <View style={styles.tagBttn}><Text style={styles.tagTxt}>Sunscreen</Text></View>
                    <View style={styles.tagBttn}><Text style={styles.tagTxt}>Sustainability</Text></View>
                </View>
                <Text style={styles.paragraph}>
                    This is a bit of sample text about this product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit molestie tellus, in luctus est aliquet a. Nam id turpis eu lorem lobortis ultrices. 
                </Text>
                <View style={styles.ctaWrapper}>
                    <Pressable 
                        style={styles.cta}
                        onPress={() => {navigation.navigate('ProductDetail', {data})}}
                    >
                        <Text style={styles.ctaText}>View Product</Text>
                    </Pressable>
                </View>

            </View>
            <View style={styles.productContainer}>
                <View style={styles.productTop}>
                    <View>
                        <Text style={styles.name}>Lemon Moisturizer</Text>
                        <Text style={styles.brand}>@BrandProducts</Text>
                    </View>
                    <View style={styles.pedestalWrapper}>
                        <MedPedestal
                            url={require('../../assets/Icons/product8.png')}
                        ></MedPedestal>
                    </View>
                </View>
                <View style = {styles.tagContainer}>
                    <View style={styles.tagBttn}><Text style={styles.tagTxt}>Moisturizer</Text></View>
                    <View style={styles.tagBttn}><Text style={styles.tagTxt}>Dry Skin</Text></View>
                </View>
                <Text style={styles.paragraph}>
                    This is a bit of sample text about this product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit molestie tellus, in luctus est aliquet a. Nam id turpis eu lorem lobortis ultrices. 
                </Text>
                <View style={styles.ctaWrapper}>
                    <Pressable style={styles.cta}>
                        <Text style={styles.ctaText}>View Product</Text>
                    </Pressable>
                </View>

            </View>
            <View style={styles.productContainer}>
                <View style={styles.productTop}>
                    <View>
                        <Text style={styles.name}>Lavender Toner</Text>
                        <Text style={styles.brand}>@BrandProducts</Text>
                    </View>
                    <View style={styles.pedestalWrapper}>
                        <MedPedestal
                            url={require('../../assets/Icons/product13.png')}
                        ></MedPedestal>
                    </View>
                </View>
                <View style = {styles.tagContainer}>
                    <View style={styles.tagBttn}><Text style={styles.tagTxt}>Toner</Text></View>
                </View>
                <Text style={styles.paragraph}>
                    This is a bit of sample text about this product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit molestie tellus, in luctus est aliquet a. Nam id turpis eu lorem lobortis ultrices. 
                </Text>
                <View style={styles.ctaWrapper}>
                    <Pressable style={styles.cta}>
                        <Text style={styles.ctaText}>View Product</Text>
                    </Pressable>
                </View>

            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    topTextWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        top:60,
        zIndex: 3,
        elevation: 3,    
    },
    topTextCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: palette.mediumBrown,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 20,
        marginHorizontal: 'auto',
        width: 220,
    },
    topText: {
        color: 'white',
        fontFamily: 'Monda',
    },
    pedestalContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center',
    },
    pedestalMargin: {
        marginHorizontal: 15,
    },
    productContainer: {
        marginHorizontal: 10,
        marginBottom: 30,
    },
    name: {
        fontSize: 24,
        fontFamily: 'MondaBold',
    },
    brand: {
        position: 'relative',
        top: -5,
        fontSize: 12,
        fontFamily: 'Monda',
    },
    paragraph: {
        fontFamily: 'Monda',
        fontSize: 12,
    },
    productTop: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    tagContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tagBttn: {
        backgroundColor: palette.blueTag,
        borderColor: palette.blue,
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 3,
      },
      tagTxt: {
        fontSize: 10,
        color: palette.black,
        fontFamily: 'MondaBold',
      },  
      ctaWrapper: {
        marginTop: 10,
        alignItems: 'flex-start',
      },
      cta: {
        borderBottomWidth: 2,
        borderColor: palette.blue,
      },
      ctaText: {
        color: palette.blue,
        fontFamily: 'Monda',
        fontSize: 12,
      },

});

