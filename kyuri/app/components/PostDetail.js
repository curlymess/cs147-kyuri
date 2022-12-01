import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import Pedestal from './Pedestal';
import PersonThumbnail from './PersonThumbnail';
import { Icon } from 'react-native-elements';

const PostDetail = ({navigation, route, productImg}) => 
{
   console.log(route.params); // issue with passing 
   const {postAuthor} = route.params;
   const {postTitle} = route.params;
   const {blogText} = route.params;
  return (
    
    <View style={styles.container}>
      <Top/>

      <View style={styles.postdetails}>
            <View style={styles.headerImg}>
            <Pedestal
              size={50}
              url={Icons.product1}
              >
            </Pedestal>
            <Pedestal
              size={50}
              url={Icons.product2}
              >
            </Pedestal>
            <Pedestal
              size={50}
              url={Icons.product3}
              >
            </Pedestal>
            <Pedestal
              size={50}
              url={Icons.product4}
              >
            </Pedestal>
            </View>
            <Text style={styles.title}>{postTitle.title}</Text>
          <View style={styles.tag}>
            <View style={styles.blueTag}><Text>placeholder</Text></View>
            <View style={styles.yellowTag}><Text>placeholder</Text></View>
          </View>
          {/* <PersonThumbnail style={styles.authorProfile} data={personDataObject}></PersonThumbnail> */}
          <Text style={styles.text}>{blogText.postText}</Text>

          <View style={styles.comment}>
            <View style={styles.commentTxt}><Text style={styles.whiteTxt}>View Comments</Text></View>
            <Pressable>
              <Ionicons name={'chatbubble-ellipses-outline'} size={25} color={palette.green} />
            </Pressable>
          </View>
      </View>
      
        
    </View>
  );
};

export default PostDetail;

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
      marginTop: 10,
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
      margin: 10,
    },
    tag: {
      flexDirection: 'row', 
      marginHorizontal: 10,
      marginBottom: 10,
    },
    blueTag: {
      backgroundColor: palette.blue,
      padding: 10,
      borderRadius: 15,
      marginRight: 3,
    },
    yellowTag: {
      backgroundColor: palette.yellow,
      padding: 10,
      borderRadius: 15,
      marginRight: 3,
    },
    authorProfile: {
    },
    text: {
      fontSize: 16,
      height: '50%',
      margin: 10,
      marginTop: 20,
    },
    comment: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
    },
    commentTxt: {
      backgroundColor: palette.green,
      padding: 5,
      borderRadius: 10,
      marginRight: 5,
    },
    whiteTxt: {
      color: palette.white,
    },
   

});