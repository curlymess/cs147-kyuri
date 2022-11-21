import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';

const PostDetail = () => 
{
  return (
    
    <View style={styles.container}>
      <Top style={styles.head} />

      <View style={styles.postdetails}>
          <View style={styles.headerImg}>
            <Text>Header Image</Text>
          </View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.tag}>Tags</Text>

          <View style={styles.authorProfile}>
            <Text>Author Profile</Text>
          </View>
          <Text style={styles.text}>Blog Text</Text>

          <View style={styles.comment}>
            <Pressable>
              <Text>View Comments</Text>
            </Pressable>
            <Pressable>
              <Text>CommentBubble</Text>
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
    head: {
      flex: 1,
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
      flex: 1,
    },
    comment: {
      flex: 1,
      flexDirection: 'row',
    },
   

});