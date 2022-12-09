import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MedPedestal from './MedPedestal';

const PostCard = ({ navigation, title, author, postText, userImg, productImg, username, userLevel, userAge, postType, blueTagTxt, yellowTagTxt, hideTags  }) => 
{
  return (

    <Pressable style={styles.post} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText}, profileImg: {userImg}, age: {userAge}, level: {userLevel}, username: {username}, showCommentBttn: false, postType: {postType}, blueTagTxt: {blueTagTxt}, yellowTagTxt: {yellowTagTxt}, hideTags: {hideTags} })}>
      <View style={styles.postTop}>
            <View style={styles.pedestalWrapper}>
              <MedPedestal
                url={productImg}>
              </MedPedestal>
            </View>
          </View>
          <View style={styles.postBottom}>
            <Text style={styles.postType}>{postType}</Text>
            <Text style={styles.postTitle} numberOfLines={2}>{title}</Text>
            <Text style={styles.postText} numberOfLines={2}>{postText}</Text>

          </View>
        </Pressable>
  );
};

export default PostCard;

const styles = StyleSheet.create({
    post: {
        backgroundColor: palette.cream,
        borderRadius: 8,
        marginLeft: 10,
        width: 150,
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
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        position: 'relative',
      },
      postBottom: {
        padding: 5,
        marginTop: 10,
      },
      postTitle: {
        fontFamily: 'MondaBold',
        marginBottom: 2,
      },
      postText: {
        width: 100,
        fontFamily: 'Monda',
        paddingBottom: 10,
      },
      postType: {
        fontFamily: 'Monda',
        color: palette.mediumBrown,
      },
      pedestalWrapper: {
        position: 'absolute',
        bottom: -15,
      }

});