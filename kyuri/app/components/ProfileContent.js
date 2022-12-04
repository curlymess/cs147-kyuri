import 'react-native-url-polyfill/auto';
import { StyleSheet, ScrollView, Text, FlatList, View } from 'react-native';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';
import 'react-native-gesture-handler';
import PostCard from './PostCard';

import React from 'react';

const renderPostCard = (item, navigation ) => {
  return (
    <PostCard
      // style={feedStyles.post}
      navigation={navigation}
      postTime={"1 hour ago"}
      title={item.title}
      postText={item.postText}
      userImg={Icons.logo}
      productImg={Icons.logo}
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

const ProfileContent = ( { navigation, posts } ) =>
{
    console.log('in profilecontent');
    console.log(posts);
    return (
      <View>
        <FlatList 
            horizontal={true}
            data={posts}
            renderItem={({item}) => renderPostCard(item, navigation)}
        />
      </View>       
  );
};

export default ProfileContent;

const styles = StyleSheet.create({

});