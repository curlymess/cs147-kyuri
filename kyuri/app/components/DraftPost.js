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

    const [checkedPublic, setCheckedPublic] = useState(false);


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
        <Top navigation={navigation} hidePostButton={true} noShadow={true}/>

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
                <Pressable 
                    style={styles.checkboxContainer}
                    onPress={() => {
                        setCheckedPublic(!checkedPublic);
                    }}
                >
                    <View 
                        style={checkedPublic ? styles.checkbox : styles.activeCheckbox}
                    >
                        <Ionicons name={'checkmark-outline'} size={12} color='#F6F6F6' />
                    </View>
                    <Text style={styles.checkboxLabel}>Public</Text>
                </Pressable>
                <Pressable 
                    style={styles.checkboxContainer}
                    onPress={() => {
                        setCheckedPublic(!checkedPublic);
                    }}
                >
                    <View 
                        style={!checkedPublic ? styles.checkbox : styles.activeCheckbox}
                    >
                        <Ionicons name={'checkmark-outline'} size={12} color='#F6F6F6' />
                    </View>
                    <Text style={styles.checkboxLabel}>Private</Text>
                </Pressable>
            </View>
            
        </View>
        <View style={styles.buttonWrapper}>
                <Pressable style={styles.makePostBttn} onPress={() => addPost("@TaheeShahee", postTitle, postText, postType, "22","test","Novice","test","Tom S.","test","test",false)}>
                    <Text style={styles.makePostBttnTxt}>Post!</Text>
                    <Ionicons name="add-circle-outline" size={24} color={palette.white}/>
                </Pressable>
            </View>
    </View>
  );
};

export default DraftPost;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    title: {
        fontFamily: 'MondaBold',
        marginHorizontal: 10,
        fontSize: 24,
        color: palette.white
    },
    makePostBttn: {
        backgroundColor: palette.darkBrown,
        borderRadius: 20,
        alignItems: 'center',
        width: 150,
        marginRight: 10,    
        flexDirection: 'row',
        justifyContent: 'left',
        paddingHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

    },

    makePostBttnTxt: {
        fontFamily: 'MondaBold',
        paddingVertical: 5,
        flex: 1,
        textAlign: 'center',
        marginLeft: 24,
        color: 'white'
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
        height: 200,
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
    },
    checkboxContainer: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 5,
      },
    checkbox: {
          width: 20,
          height: 20,
          borderRadius: 20,
          backgroundColor: '#F6F6F6',
          borderColor: '#E8E8E8',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      activeCheckbox: {
          width: 20,
          height: 20,
          borderRadius: 20,
          backgroundColor: palette.mediumBrown,
          borderColor: palette.darkBrown,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      checkboxLabel: {
          fontFamily: 'Monda',
          marginLeft: 5,
          color: palette.white,
      },
      buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30,
        position: 'absolute',
        bottom: 105,
        width: '100%',
        flex: 1,
      }


});



