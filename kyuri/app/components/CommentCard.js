import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';

const CommentCard = ({ navigation, title, author, postText, userImg, productImg, username, userLevel, userAge }) => 
{
  return (
// fix the comment button showing in post detail using showCommentBttn
        <Pressable style={styles.posts} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText}, productImg: {productImg}, profileImg: {userImg}, age: {userAge}, level: {userLevel}, username: {username}, showCommentBttn: 'true'  })}>
          <View style={styles.postTop}>
            <Pedestal
              size={100}
              url={productImg}>
            </Pedestal>
          </View>
          <View style={styles.postBottom}>
            <Text style={styles.postType}>Review</Text>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postText} numberOfLines={3} ellipsizeMode="tail">{postText}</Text>
            <Pressable style={styles.replyBttn}>
                <Text style={styles.replyBttnTxt}>Reply</Text>
            </Pressable>
          </View>
        </Pressable>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
    posts: {
        backgroundColor: palette.cream,
        borderRadius: 8,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        maxWidth: '30%',
        width: '30%',
      },
      postTop: {
        height: '50%',
        backgroundColor: palette.lightGreen,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      postBottom: {
        height: '50%',
        padding: 5,
      },
      postTitle: {
        fontFamily: 'MondaBold',
      },
      postType: {
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