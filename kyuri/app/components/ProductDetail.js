import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import MedPedestal from './MedPedestal';
import PersonThumbnail from './PersonThumbnail';
import { ScrollView } from 'react-native-gesture-handler';
import CommentCard from './CommentCard';

const ProductDetail = ({navigation, route}) => 
{
   const {props} = route.params;



  return (
    
    <View style={styles.container}>
      <Top navigation={navigation}/>

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
    postdetails: {
      flex: 1,
      marginHorizontal: 10,
      position: 'relative',
      top: -23,
    },
    postsCard: {
      marginVertical: 10,
      marginBottom: 0,
    },
    headerImg: {
      borderRadius: 8,
      backgroundColor: palette.cream,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: '10%',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 15,
      marginBottom: 3,
      fontFamily: 'MondaBold',
    },
    tag: {
      flexDirection: 'row', 
      marginBottom: 15,
      marginTop: 5,
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
    blueTag: {
      backgroundColor: palette.blue,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    creamTag: {
      backgroundColor: palette.cream,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    yellowTag: {
      backgroundColor: palette.yellow,
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
    blackTxt: {
      color: palette.black,
    },
    authorProfile: {

    },
    text: {
      fontSize: 16,
      marginBottom: 10,
      marginTop: 20,
      fontFamily: 'Monda',
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
    whiteTxt: {
      color: palette.white,
      fontFamily: 'Monda',
    },
    pedestalWrapper: {
      position: 'relative',
      bottom: -8,
    },
});