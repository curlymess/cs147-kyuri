import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, TextInput } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import { supabase } from '../../lib/supabase';
import { useState } from 'react';

const DraftPost = ({navigation, route}) => 
{
    const addPost = async ( username, title, postText, postType, userAge, userImg, userLevel, productImg, author, yellowTagTxt, blueTagTxt, hideTags ) => {
        const {data, error} = await supabase 
            .from('posts')
            .insert([
            // { username, title, postText, postType, userAge, userImg, userLevel, productImg, author, yellowTagTxt, blueTagTxt, hideTags },
            { username: username, title:title, postText:postText, postType:postType, userAge:userAge, userImg:userImg, userLevel:userLevel, productImg:productImg, author:author, yellowTagTxt:yellowTagTxt, blueTagTxt:blueTagTxt, hideTags:hideTags },
            ]);
        console.log(data, error);
        }
    const [postTitle, setPostTitle] = useState('');
    const [postTags, setPostTags] = useState('');
    const [postText, setPostText] = useState('');
    const [postProducts, setPostProducts] = useState('');
    const [postType, setPostType] = useState('');

  return (
    
    <View style={styles.container}>
        <Top navigation={navigation}/>

        <Text style={styles.title}>Make a Post</Text>

        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <TextInput 
                placeholder = "Title your post"
                style={styles.input}
                onChangeText={(text) => setPostTitle(text)}
                ></TextInput>
            </View>
            <View style={styles.searchBar}>
                <TextInput 
                placeholder = "Add post type"
                style={styles.input}
                onChangeText={(text) => setPostType(text)}
                ></TextInput>
            </View>
            <View style={styles.searchBar}>
                <TextInput 
                placeholder = "Add tags"
                style={styles.input}
                onChangeText={(text) => setPostTags(text)}
                ></TextInput>
            </View>
            <View style={styles.searchBar}>
                <TextInput 
                placeholder = "Write your post"
                style={styles.input}
                onChangeText={(text) => setPostText(text)}
                ></TextInput>
            </View>
            <View style={styles.searchBar}>
                <TextInput 
                placeholder = "Tag related products"
                style={styles.input}
                onChangeText={(text) => setPostProducts(text)}
                ></TextInput>
            </View>

        </View>

        <Pressable style={styles.makePostBttn} onPress={() => addPost("@TaheeShahee", postTitle, postText, postType, "22","test","Novice","test","Tom S.","test","test",false)}>
            <Ionicons name="add-circle-outline" size={33} color={palette.green}/>
            <Text style={styles.makePostBttnTxt}>Post!</Text>
        </Pressable>

    </View>
  );
};

export default DraftPost;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    title: {
        fontFamily: 'MondaBold',
        marginHorizontal: 10,
        fontSize: 24,
    },
    makePostBttn: {
        backgroundColor: palette.green,
        borderRadius: 20,
    },
    makePostBttnTxt: {

    },
    searchContainer: {
        width: '100%',
    },
    searchBar: {
        height: 46,
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: 5,
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Monda',
    },
});



