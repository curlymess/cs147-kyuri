import 'react-native-url-polyfill/auto';
import { StyleSheet, ScrollView, Text, FlatList, View } from 'react-native';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';
import 'react-native-gesture-handler';
import Post from './Post';
import RecommendedProductsCard from './RecommendedProductsCard';

import React from 'react';

const renderPost = (item, navigation ) => {
  return (
    <Post 
      // style={feedStyles.post}
      navigation={navigation}
      postTime={"1 hour ago"}
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
    return (
      <ScrollView>
        <View style={feedStyles.spacer}></View>
        <RecommendedProductsCard></RecommendedProductsCard>
        <FlatList 
          data={posts}
          renderItem={({item}) => renderPost(item, navigation)}
        />
      </ScrollView>       
  );
};

export default FeedContent;

const feedStyles = StyleSheet.create({
  post: {
    flex: 1,
  },
  spacer: {
    height: 30,
  }
});