import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Post = () => 
{
  return (

<View style={styles.container}>
    <View style={styles.colFlex}>
        <View style={styles.post}>
            <View> 
                <Text style={styles.title}>Title</Text>
                <Text style={styles.author}>by Author</Text>
            </View>
            <Image source={Icons.iris} style={styles.otherProfilePics}/>
        </View>

        <Text style={styles.postText}>While traditional sunscreens contain ocean-damaging chemicals, reef-friendly products allow for users to...</Text>
    </View>
        
    
</View>
  );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        alignContent: 'center',
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
        justifyContent: 'flex-end',
    },

});