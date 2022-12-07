import 'react-native-url-polyfill/auto';
import { StyleSheet, ScrollView, Text, FlatList, View } from 'react-native';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';
import 'react-native-gesture-handler';
import ProductThumbnail from './ProductThumbnail';
import React from 'react';
import { supabase } from "../../lib/supabase";
import { useState } from 'react';



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
      'product0': Icons.product0,
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
    let usedByIcons;
    if (item.usedBy) {
        usedByIcons = item.usedBy.map((name) => imageSelect(name));
    }    
    console.log('test');
    console.log(usedByIcons);
  return (
    <ProductThumbnail 
        name={item.name}
        type={item.type}
        image={imageSelect('product' + item.number)}
        usedBy={usedByIcons}
        navigation={navigation}
    ></ProductThumbnail> 
  );
};

const ProductThumbnailContent = ( { navigation, terms, allProducts } ) =>
{
    let [listData, setListData] = useState(allProducts)
    const getProducts = async (t) => {
      const {data, error} = await supabase 
        .from('products')
        .select('*')
        .textSearch('name', t)
      if (data.length == 0) {
        setListData(allProducts);
      } else {
        setListData(data)
      }
    }
    if (terms != '') {
      getProducts(terms);
    }  
    return (
        <FlatList 
          data={listData}
          renderItem={({item}) => renderPost(item, navigation)}
        />
  );
};

export default ProductThumbnailContent;

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
});