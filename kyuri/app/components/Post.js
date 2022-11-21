import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostDetail from './PostDetail';

const Post = ({ navigation, title, author, postText }) => 
{
  return (

<View style={styles.container}>
    <View style={styles.colFlex}>
        <Pressable style={styles.post} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText} })}>
            <View> 
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>by {author}</Text>
            </View>
            <Image source={Icons.iris} style={styles.otherProfilePics}/>
        </Pressable>

        <View style={styles.container2}>
            <Text style={styles.postText}>{postText}</Text>
            <Pressable style={styles.expandButton}>
                <Text>Expand Post</Text>
            </Pressable>
        </View>
    </View>
        
    
</View>
  );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: palette.cream,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 8,
        padding: 10,  
    },
    colFlex: {
        flexDirection: 'column',
    },
    post: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    author: {
        fontSize: 16,
        fontWeight: '300',
    },
    otherProfilePics: {
        maxHeight: 40,
        resizeMode: 'contain',
    },
    container2: {
        flexDirection: 'row',
    },
    postText: {
        flex: 1,
    },
    expandButton: {
        flex: 1,
        backgroundColor: palette.green,
    },

});