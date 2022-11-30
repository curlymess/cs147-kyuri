import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostDetail from './PostDetail';
import Pedestal from './Pedestal';

const Post = ({ navigation, title, author, postText }) => 
{
  return (

<View style={styles.container}>
    <View style={styles.colFlex}>
        <Pressable style={styles.post} onPress={() => navigation.navigate('PostDetail', { postAuthor: {author}, postTitle: {title}, blogText: {postText} })}>
            <View style={styles.col}> 
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>by {author}</Text>
            </View>
            <View style={styles.picCol}>
                <Pedestal
                    size={50}
                    url={Icons.iris}>
                </Pedestal>
            </View>
            
        </Pressable>

        <View style={styles.container2}>
            <Text style={styles.postText}>{postText}</Text>
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
        flex: 1,
        flexDirection: 'column',
    },
    post: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    author: {
        fontSize: 14,
        fontWeight: '300',
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
        padding: 5,
    },

});