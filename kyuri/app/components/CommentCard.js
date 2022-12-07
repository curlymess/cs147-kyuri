import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';
import MedPedestal from './MedPedestal';


const CommentCard = ({ title, postText, userImg, username }) => 
{
  return (
        <Pressable style={styles.posts} >
          <View style={styles.postTop}>
            <View style={styles.pedestalWrapper}>
              <Pedestal
                url={userImg}
                nonGreen={true}
              >
              </Pedestal>
            </View>
          </View>
          <View style={styles.postBottom}>
            <Text style={styles.postUser}>{username}</Text>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postText} numberOfLines={1} ellipsizeMode="tail">{postText}</Text>
          </View>
        </Pressable>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
    posts: {
        backgroundColor: palette.cream,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
        minHeight: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,
      },
      postTop: {
        backgroundColor: palette.lightGreen,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
      postBottom: {
        height: '100%',
        padding: 5,
        marginLeft: 5,
      },
      postTitle: {
        fontFamily: 'MondaBold',
      },
      postType: {
        fontFamily: 'Monda',
      },
      postText: {
        fontFamily: 'Monda',
      },
      replyBttn: {
        backgroundColor: palette.green,
        borderRadius: 10,
      },
      replyBttnTxt: {
        color: palette.white,
        fontFamily: 'MondaBold',
        alignSelf: 'center',
      },

});