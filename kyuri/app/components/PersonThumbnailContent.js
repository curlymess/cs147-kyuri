import 'react-native-url-polyfill/auto';
import { StyleSheet, ScrollView, Text, FlatList, View } from 'react-native';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';
import 'react-native-gesture-handler';
import PersonThumbnail from './PersonThumbnail';
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

    'product1': Icons.product1,
    'product2': Icons.product2,
    'product3': Icons.product3,
    'product4': Icons.product4,
    'product5': Icons.product5,
    'product6': Icons.product6,
    'product7': Icons.product7,
    'product8': Icons.product8,
    'product9': Icons.product9,
    'product10': Icons.product10,
    'product11': Icons.product11,
    'product12': Icons.product12,
    'product13': Icons.product13,
    'product14': Icons.product14,
    'product15': Icons.product15,
    'product16': Icons.product16,
    'product17': Icons.product17,
    'product18': Icons.product18,
    'product19': Icons.product19,
    'product20': Icons.product20,
  };
  return outputImg[inputImg];
}


const renderPost = (item, navigation ) => {
  return (
    <PersonThumbnail 
        name={item.full_name}
        username={item.username}
        image={imageSelect(item.userImg)}
        age={item.userAge}
        level={item.userLevel}
        mutuals={[imageSelect(item.mutual1), imageSelect(item.mutual2)]}>
    </PersonThumbnail> 
  );
};

const PersonThumbnailContent = ( { navigation, allUsers } ) =>
{
    return (
      <ScrollView>
        <View style={styles.spacer}></View>
        <FlatList 
          data={allUsers}
          renderItem={({item}) => renderPost(item, navigation)}
        />
      </ScrollView>       
  );
};

export default PersonThumbnailContent;

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
  spacer: {
    height: 30,
  }
});