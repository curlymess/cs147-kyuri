import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';

import DraftPost from './DraftPost';
// supabase
import { supabase } from "./../../lib/supabase";

export default function Top(props) {
    
const addPost = async ( username, title, postText, postType, userAge, userImg, userLevel, productImg, author, yellowTagTxt, blueTagTxt, hideTags ) => {
    const {data, error} = await supabase 
        .from('posts')
        .insert([
        // { username, title, postText, postType, userAge, userImg, userLevel, productImg, author, yellowTagTxt, blueTagTxt, hideTags },
        { username: username, title:title, postText:postText, postType:postType, userAge:userAge, userImg:userImg, userLevel:userLevel, productImg:productImg, author:author, yellowTagTxt:yellowTagTxt, blueTagTxt:blueTagTxt, hideTags:hideTags },
        ]);
    console.log(data, error);
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {!props.noBack &&
                <Pressable style={styles.back} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={18} color='white'/>
                    <Text style={styles.backText}>
                        Back
                    </Text>
                </Pressable>
                }              
            </View>
            <View style={styles.logoContainter}>
                <Image style={styles.logo} source={Icons.logo} />
                <Text style={styles.kyuritxt}>Kyuri</Text>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.plus} onPress={() => props.navigation.navigate(DraftPost)} >
                    <Ionicons name="add-circle-outline" size={33} color='white'/>
                </Pressable>
            </View>
            {/* <View style={styles.row}>
                <Pressable style={styles.plus} onPress={() => addPost("test", "test","test","test","0","test","test","test","test","test","test",false)}>
                    <Ionicons name="add-circle-outline" size={33} color='white'/>
                </Pressable>
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        color: palette.white,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'MondaBold',
    },
    plus: {
        marginLeft: 'auto',
    },
    logoContainter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    kyuritxt: {
        fontFamily: 'Rosmatika',
        color: palette.white,
        fontSize: 24,
        marginTop: 4,
        marginLeft: 4,
    },
    logo: {
        resizeMode: 'contain',
        maxHeight: 30,
        maxWidth: 30,
    },
});
