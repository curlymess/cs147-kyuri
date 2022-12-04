import 'react-native-url-polyfill/auto';
import { StyleSheet, ScrollView, Text, FlatList, View } from 'react-native';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';
import 'react-native-gesture-handler';
import Post from './Post';

import React from 'react';

const renderPost = (item, navigation ) => {
  console.log("pritning in renderpost");

  return (
    <Post 
      // style={feedStyles.post}
      navigation={navigation}
      postTime={"1hour ago"}
      title={item.title}
      postText={item.postText}
      userImg={Icons.logo}
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
    console.log("pritning in feedContent");
    console.log(posts);
    console.log(posts[0]);
    
    return (
          <View>
            <FlatList 
            data={posts}
            renderItem={({item}) => renderPost(item, navigation)}/>
            
          </View>
          
  );
};

export default FeedContent;

const feedStyles = StyleSheet.create({
  post: {
    flex: 1,
  }
});