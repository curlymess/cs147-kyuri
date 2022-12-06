import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, TextInput } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import { supabase } from '../../lib/supabase';
import { useState } from 'react';
import DropdownScreen from './DropdownScreen';
import MultiSelect from './Multiselect';
import MultiSelectScreen from './Multiselect';


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
    const [isSelected, setSelection] = useState(false);

    const data = [
        {label: 'Review', value: '1'},
        {label: 'Article', value: '2'},
        {label: 'Routine', value: '3'},
        {label: 'Request', value: '4'},
    ];

    const tagData = [
        {label: 'Sustainability', value: '1'},
        {label: 'Clean Beauty', value: '2'},
        {label: 'Anti-Aging', value: '3'},
        {label: 'Winter', value: '4'},
        {label: 'Summer', value: '5'},
        {label: 'Spring', value: '6'},
        {label: 'Autumn', value: '7'},
    ];

    const productData = [
        {label: 'Cilantro Sunscreen', value: '1'},
        {label: 'Lemon Moisturizer', value: '2'},
        {label: 'Lavendar Toner', value: '3'},
        {label: 'Zucchini Moisturizer', value: '4'},
        {label: 'Sweet Potato Cleanser', value: '5'},
        {label: 'Asparagus Wash', value: '6'},
    ];

  return (
    
    <View style={styles.container}>
        <Top navigation={navigation}/>

        <Text style={styles.title}>Make a Post</Text>

        <View style={styles.searchContainer}>
            <View style={styles.inputBar}>
                <TextInput 
                placeholder = "Title your post"
                style={styles.input}
                onChangeText={(text) => setPostTitle(text)}
                ></TextInput>
            </View>
            <View style={styles.dd}>
                <DropdownScreen placeholderTxt={'Select Post Type'} data={data}></DropdownScreen>
            </View>
            <View>
                <MultiSelectScreen data={tagData} placeholderTxt={'Select Tags'}></MultiSelectScreen>
            </View>
            <View style={styles.inputPostBar}>
                <TextInput 
                placeholder = "Write your post"
                style={styles.input}
                onChangeText={(text) => setPostText(text)}
                // multiline={true}
                ></TextInput>
            </View>
            <View>
                <MultiSelectScreen data={productData} placeholderTxt={'Select Products'}></MultiSelectScreen>
            </View>

        </View>

        <View style={styles.bottom}>
            <View style={styles.privacy}>
                <View>
                    
                    <Text style={styles.privacyTxt}>Public</Text>
                </View>
                <View>
                    
                    <Text style={styles.privacyTxt}>Private</Text>
                </View>
                
            </View>

            <Pressable style={styles.makePostBttn} onPress={() => addPost("@TaheeShahee", postTitle, postText, postType, "22","test","Novice","test","Tom S.","test","test",false)}>
                <Ionicons name="add-circle-outline" size={33} color={palette.green}/>
                <Text style={styles.makePostBttnTxt}>Post!</Text>
            </Pressable>
        </View>
        

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
        alignItems: 'center',
        flex: 1,
    },
    makePostBttnTxt: {
        fontFamily: 'MondaBold',
    },
    searchContainer: {
        width: '100%',
    },
    inputBar: {
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
    dd: {

    },
    inputPostBar: {
        height: 300,
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 5,
        overflow: 'hidden',
        marginVertical: 5,
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Monda',
    },
    bottom: {
        flexDirection: 'row',
    },
    privacy: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
    },
    privacyTxt: {
        fontFamily: 'Monda',
        flex: 1,
    }
});



