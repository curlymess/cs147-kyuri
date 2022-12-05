import 'react-native-url-polyfill/auto';
import { StyleSheet, ScrollView, Text, FlatList, View } from 'react-native';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';
import 'react-native-gesture-handler';
import Post from './Post';

import React from 'react';

const imageSelect = (inputImg) => {
  if (inputImg === null){
    return Icons.tom;
  }
  const outputImg = {
    'tom': Icons.tom,
    'iris': Icons.iris,
    'p1': Icons.p1,
    'p2': Icons.p2,
    'p3': Icons.p3,
    'p4': Icons.p4,
    'p5': Icons.p5,
    'p6': Icons.p6,
    'p7': Icons.p7,
    'p8': Icons.p8,
  };
  return outputImg[inputImg];
}

const renderPost = (item, navigation ) => {
  console.log(item.userImg);
  return (
    <Post 
      // style={feedStyles.post}
      navigation={navigation}
      postTime={"1 hour ago"}
      title={item.title}
      postText={item.postText}
      userImg={imageSelect(item.userImg)}
      userAge={item.userAge}
      userLevel={item.userLevel}
      username={item.username}
      postType={item.postType}
      yellowTagTxt={item.yellowTagTxt}
      blueTagTxt={item.blueTagTxt}
      hideTags={item.hideTags}
      author={item.author}
    />
  );
};

const FeedContent = ( { navigation, posts } ) =>
{
    return (
      <View>
        <FlatList 
          data={posts}
          renderItem={({item}) => renderPost(item, navigation)}
        />
      </View>       
  );
};

export default FeedContent;

const feedStyles = StyleSheet.create({
  post: {
    flex: 1,
  }
});