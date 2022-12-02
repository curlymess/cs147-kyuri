import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MedPedestal from './MedPedestal';

const PostCard = ({ navigation, title, author, postText, userImg, productImg, username, userLevel, userAge }) => 
{
  return (

        <Pressable style={styles.posts} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText}, productImg: {productImg}, profileImg: {userImg}, age: {userAge}, level: {userLevel}, username: {username}  })}>
          <View style={styles.postTop}>
            <View style={styles.pedestalWrapper}>
              <MedPedestal
                url={productImg}>
              </MedPedestal>
            </View>
          </View>
          <View style={styles.postBottom}>
            <Text style={styles.postType}>Review</Text>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postTitle}>{postText}</Text>

          </View>
        </Pressable>
  );
};

export default PostCard;

const styles = StyleSheet.create({
    posts: {
        backgroundColor: palette.cream,
        borderRadius: 8,
        marginHorizontal: 5,
        width: 200,
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
      },
      postType: {
        fontFamily: 'Monda',
      },
      pedestalWrapper: {
        position: 'absolute',
        bottom: -15,
      }

});