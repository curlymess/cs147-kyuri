import 'react-native-url-polyfill/auto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Icons from '../../assets/Icons';
import themes from '../../assets/Themes/themes';
import { palette } from '../../assets/Themes/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ***** Componets ******* 
import {Top} from './Top';
import { Post } from './Post';
//Browse page components
import BrowseSearchBar from './BrowseSearchBar.js';
import Auth from './Auth.js';
import PostDetail from './PostDetail';
import PostCard from './PostCard';
import Routine from './Routine';

export default function ProfileContent( {navigation} ){
    //issue with content (author, title, posttext) are not showing in postdetails page
    const author = "author";
    const title = "title";
    const postText = "postText";
   
    return (
      <View style={profileStyles.container}>
        <Top style={profileStyles.head} />
        <StatusBar style="auto" />
  
        <View style ={profileStyles.container}>
          <View style={profileStyles.myProfileCard}>
            <Image source={Icons.tom}/>
            <View>
              <Text style={profileStyles.myProfileTxtName}>Tom S.</Text>
              <Text style={profileStyles.myProfileTxt}>@TomShahee</Text>
            </View>
            <View>
              <Text style={profileStyles.myProfileTxt}>Age 22</Text>
              <Text style={profileStyles.myProfileTxt}>Ethnicity W</Text>
              <Text style={profileStyles.myProfileTxt}>Level Novice</Text>
            </View>
          </View>
        </View>
  
        <View style={profileStyles.routineCard}>
          <Text>Current Routine:</Text>
          <Text>Create your first routine!</Text>
          <Pressable onPress={() => navigation.navigate('Routine')}>
            <Ionicons name={'add-circle-outline'} size={40} color={palette.green} />
          </Pressable>
        </View>
  
        <Text style={profileStyles.heading}>Recently Viewed Posts</Text>
        <ScrollView style={profileStyles.postsCard}   horizontal={true}>
  
          <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Fran'} postText={'I love it!'}/>
          <PostCard navigation={navigation} title={'Help with my routine?'}     author={'Gertrude'} postText={'I am new to this'}/>
          <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Fran'} postText={'I love it!'}/>
          <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Fran'} postText={'I love it!'}/>
          <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Fran'} postText={'I love it!'}/>
        </ScrollView>
  
      </View>  
      );
  };


  const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
      },
      head: {
        flex: 1,
      },
    myProfileCard: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 10,
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: palette.darkBrown,
      justifyContent:'space-around',
      
    },
    myProfileTxt: {
      color: palette.white,
      fontSize: 12,
    },
    myProfileTxtName: {
      color: palette.white,
      fontSize: 24,
    },
    routineCard: {
      backgroundColor: palette.cream,
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 8,
    },
    postsCard: {
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
    },
    heading: {
      marginLeft: 10,
    },  
  });
  