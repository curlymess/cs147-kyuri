import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import Pedestal from './Pedestal';

const PostDetail = ({navigation, route, productImg}) => 
{
   console.log(route.params); // issue with passing 
   const {postAuthor} = route.params;
   const {postTitle} = route.params;
   const {blogText} = route.params;
  return (
    
    <View style={styles.container}>
      <Top style={styles.head} />

      <View style={styles.postdetails}>
          <View style={styles.titleandimg}>
            <View style={styles.headerImg}>
            <Pedestal
              size={50}
              url={productImg}
              >
            </Pedestal>
            </View>
            <Text style={styles.title}>{postTitle.title}</Text>
          </View>
          <Text style={styles.tag}>Tags</Text>

          <View style={styles.authorProfile}>
            <Text>by {postAuthor.author}</Text>
          </View>
          <Text style={styles.text}>{blogText.postText}</Text>

          <View style={styles.comment}>
            <Pressable>
              <Ionicons name={'chatbubble-ellipses-outline'} size={25} color={palette.green} />
            </Pressable>
            <Text>View Comments</Text>
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
    head: {
      flex: 1,
    },
    titleandimg: {
      padding: 10,
      flexDirection: 'row',
    },
    postdetails: {
      flex: 1,
      marginHorizontal: 10,
    },
    headerImg: {
      flex: 1,
      borderRadius: 8,
      backgroundColor: palette.cream,
      
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
    },
    tag: {
      flex: 1,
    },
    authorProfile: {
      flex: 1,
      backgroundColor: palette.lightGreen
    },
    text: {
      flex: 8,
      fontSize: 16,
    },
    comment: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
    },
   

});