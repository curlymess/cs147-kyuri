import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostDetail from './PostDetail';
import MedPedestal from './MedPedestal';

const Post = ({ navigation, title, author, postText, userImg, userAge, userLevel, username }) => 
{
    console.log(username)
  return (

<View style={styles.container}>
    <View style={styles.colFlex}>
        <Pressable style={styles.post} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText}, profileImg: {userImg}, age: {userAge}, level: {userLevel}, username: {username} })}>
            <View style={styles.col}> 
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>by {author}</Text>
            </View>
            <View style={styles.picCol}>
                <MedPedestal
                    url={userImg}>
                </MedPedestal>
            </View>
            
        </Pressable>

        <View style={styles.container2}>
            <Text style={styles.postText}>{postText}</Text>
        </View>
    </View>
    <Text style={styles.feedText}>User posted Time ago...</Text>
        
    
</View>
  );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: palette.cream,
        marginHorizontal: 10,
        marginTop: 40,
        borderRadius: 8,
        padding: 10,
        paddingTop: 5,  
    },
    colFlex: {
        flex: 1,
        flexDirection: 'column',
    },
    post: {
        flexDirection: 'row',
        position: 'relative',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'MondaBold',

    },
    author: {
        fontSize: 12,
        fontWeight: '300',
        fontFamily: 'Monda',
        position: 'relative',
        top: -2,
    },
    otherProfilePics: {
        maxHeight: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    container2: {
        flexDirection: 'row',
    },
    postText: {
        flex: 3,
        marginTop: 10,
        fontFamily: 'Monda',
        fontSize: 12,
    },
    expandButton: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: palette.green,
        justifyContent: 'flex-end',
        alignItems: 'center',


    },
    expandTxt: {
        padding: 2,
        paddingVertical: 5,
    },
    col: {
        flex: 4,
    },
    picCol: {
        flex: 1,
        position: 'absolute',
        top: -22,
        right: 0,
    },
    feedText: {
        position: 'absolute',
        left: 10,
        top: -20,
        fontSize: 12,
        color: 'darkGrey',
        fontFamily: 'Monda',
    },

});