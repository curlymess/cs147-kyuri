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
import CommentCard from './CommentCard';
import RoutineCard from './RoutineCard';




import PersonThumbnail from './PersonThumbnail';
import { ScrollView } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';
import { useState } from 'react';

const ProductDetail = ({navigation, route}) => 
{
    const {data} = route.params;

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
                <View style={styles.tags}>
                    <View style={styles.tag}><Text style={styles.tagText}>Sunscreen</Text></View>
                    <View style={styles.tag}><Text style={styles.tagText}>Sunstainable</Text></View>
                    <View style={styles.tag}><Text style={styles.tagText}>Cruelty-Free</Text></View>


                </View>
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
                <View style={styles.recommendedRoutineContainer}>
                    <RoutineCard
                        title={'Sample Routine'}
                    ></RoutineCard>
                </View>
                <View style={styles.commentsContainer}>
                    <Text style={styles.commentTxt}>Comments</Text>
                    <View style={styles.postsCard}>
                        <CommentCard title={'Great Product!'}         userImg={Icons.p4} userAge={'22'} username={'@alphaBeth'} postText={'reviewwww'}/>
                        <CommentCard title={'Not For Me...'}    userImg={Icons.p2} username={'@loiswee'} postText={'reviewwww'}/>
                        <CommentCard title={'Highly Recommend'} userImg={Icons.p5} username={'@terranimal'} postText={'reviewwww'}/>
                        <CommentCard title={'Yes!!!'}           userImg={Icons.p6} username={'@skinXpert'} postText={'reviewwww'}/>
                        <CommentCard title={'Ehhhh'}            userImg={Icons.p3} username={'@proH8r'} postText={'reviewwww'}/>
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
        minHeight: 50,
        marginTop: 40,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.61,
  
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
    },
    postsCard: {
        marginVertical: 10,
        marginBottom: 0,
    },  
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3,
      },
    commentTxt: {
        paddingTop: 5,
        borderRadius: 20,
        marginRight: 5,
        fontFamily: 'MondaBold',
    },
    commentsContainer: {
        marginHorizontal: 10,
    },
    recommendedRoutineContainer: {
        marginVertical: 30,
    },
    tags: {
        marginTop: 80,   
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    tag: {
        backgroundColor: palette.blueTag,
        borderColor: palette.blue,
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 3,
    },
    tagText: {
        fontFamily: 'MondaBold',
        fontSize: 10,
    }
  
});