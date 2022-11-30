import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pedestal from './Pedestal';

const PostCard = ({ navigation, title, author, postText, profileImg, productImg }) => 
{
  return (

        <Pressable style={styles.posts} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText}, productImg: {productImg} })}>
          <View style={styles.postTop}>
            <Pedestal
              size={56}
              url={productImg}>
            </Pedestal>
          </View>
          <View style={styles.postBottom}>
            <Text style={styles.postType}>Review</Text>
            <Text style={styles.postTitle}>{title}</Text>
          </View>
        </Pressable>
  );
};

export default PostCard;

const styles = StyleSheet.create({
    posts: {
        backgroundColor: palette.cream,
        borderRadius: 8,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        width: '15%',
      },
      postTop: {
        flex: 1,
        backgroundColor: palette.lightGreen,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      postBottom: {
        flex: 1,
        padding: 5,
      },

});