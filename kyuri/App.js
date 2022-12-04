import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import { palette } from './assets/Themes/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ***** Componets ******* 
import {Top} from './app/components';
import { Post } from './app/components';
import BrowseSearchBar from './app/components/BrowseSearchBar.js';

import Auth from './app/components/Auth.js';
import React, { useEffect, useState } from 'react';

import BrowseContent from './app/components/BrowseContent.js';
import BrowseSlider from './app/components/BrowseSlider.js';

import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';
import Routine from './app/components/Routine';
import EmptyRoutineCard from './app/components/EmptyRoutineCard';


import NewPostsStatus from './app/components/NewPostsStatus.js';

import FeedContent from './app/components/FeedContent';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'react-native-url-polyfill/auto'
import { Icon } from 'react-native-elements';
import CommentCard from './app/components/CommentCard';

// supabase
import { supabase } from "./lib/supabase";
import { SupabaseClient } from '@supabase/supabase-js';
import ProfileContent from './app/components/ProfileContent';

function Feed({ navigation, posts }) {

  const feedStyles = StyleSheet.create({
    post: {
      flex: 1,
    }
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true" navigation={navigation}/>
      <StatusBar style="auto" />

      <View style={styles.newPostsWrapper}>
        <NewPostsStatus></NewPostsStatus>
      </View>
      <FeedContent navigation={navigation} posts={posts} />
    </View>    
  )
}

function Browse() {
  const [screen1, toggleScreen1] = useState(true);
  const [screen2, toggleScreen2] = useState(false);
  const [screen3, toggleScreen3] = useState(false);
  const [filter, toggleFilter] = useState(false);
  console.log(screen1);
  return (
  <View style={styles.container}>
    <Top style={styles.head} noBack="true"/>
    <StatusBar style="auto"/>
    <BrowseSearchBar 
      filterProp={filter} 
      filterCallback={toggleFilter}
    >
    </BrowseSearchBar>
    <BrowseSlider
          s1={screen1} 
          s2={screen2} 
          s3={screen3}
          c1={toggleScreen1} 
          c2={toggleScreen2} 
          c3={toggleScreen3} 
    >
    </BrowseSlider>
    <BrowseContent
      screen1Prop={screen1} 
      screen2Prop={screen2} 
      screen3Prop={screen3}
      filterProp={filter} 
    >
    </BrowseContent>
  </View>  
  );
}

function Profile( {navigation, posts} ){
  const profileStyles = StyleSheet.create({
    myProfileCard: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginBottom: 10,
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: palette.darkBrown,
      justifyContent:'space-around',
      position: 'relative',
      top: -23,
      paddingTop: 5,
      paddingBottom: 15,
    },
    profileTxt: {
      width: '50%',
    },
    myProfileTxt: {
      color: palette.white,
      fontSize: 12,
      fontFamily: 'Monda',
    },
    myProfileTxtName: {
      color: palette.white,
      fontSize: 24,
      fontFamily: 'MondaBold',
    },
    routineCard: {
      backgroundColor: palette.cream,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    postsCard: {
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
      flex: 1,
    },
    heading: {
      marginLeft: 10,
      marginBottom: 10,
      fontFamily: 'MondaBold',
      fontSize: 16,
    },  
    routineTxt: {
      fontFamily: 'MondaBold',
      fontSize: 18,
    },
    viewRoutineTxt: {
      fontFamily: 'Monda',
      alignSelf: 'center',
      color: palette.blue,
      textDecorationLine: 'underline',
    },
    boldLabel: {
      fontFamily: 'MondaBold',
    },
    myProfileUsername: {
      marginTop: 0,
      position: 'relative',
      top: -5,
      marginBottom: 10,
    },
    myProfilePic: {
      height: 150,
      width: 150,
      position: 'relative',
    },
    myProfilePicWrapper: {
      position: 'relative',
      overflow: 'visible',
      bottom: -26,
    },
    linkWrapperMargin: {
      marginBottom: 30,
    }
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true"/>
      <StatusBar style="auto" />
        <View style={profileStyles.myProfileCard}>
          <View style={profileStyles.myProfilePicWrapper}>
            <Image 
              style={profileStyles.myProfilePic}
              resizeMode="contain"
              source={Icons.tom}
            />
          </View>
          <View style={profileStyles.profileTxt}>
            <Text style={[profileStyles.myProfileTxtName, profileStyles.myProfileName]}>Tom S.</Text>
            <Text style={[profileStyles.myProfileTxt, profileStyles.myProfileUsername]}>@TaheeShahee</Text>
            <Text style={profileStyles.myProfileTxt}>
              <Text style={profileStyles.boldLabel}>Age </Text>
              22
            </Text>
            <Text style={profileStyles.myProfileTxt}>              
              <Text style={profileStyles.boldLabel}>Ethnicity </Text>
              W
            </Text>
            <Text style={profileStyles.myProfileTxt}>              
              <Text style={profileStyles.boldLabel}>Level </Text>
              Novice
            </Text>
          </View>
        </View>
      <EmptyRoutineCard
        navigation={navigation}
      >
      </EmptyRoutineCard>
      <Pressable style={profileStyles.linkWrapperMargin}>
        <Text style={profileStyles.viewRoutineTxt}>View other routines</Text>
      </Pressable>

      <Text style={profileStyles.heading}>My Posts</Text>
      <ProfileContent style={profileStyles.postsCard} navigation={navigation} posts={posts}/>
     
      {/* <ScrollView style={profileStyles.postsCard} horizontal={true}>

        <PostCard navigation={navigation} title={'Coral-Reef Safe Sunscreen Review'}  author={'Tom S.'} userImg={Icons.tom} productImg={Icons.product1} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postType={'Review'} yellowTagTxt={'yellow'} blueTagTxt={'blue'} hideTags={false} postText={''}/>
        <PostCard navigation={navigation} title={'Help with my routine?'}             author={'Tom S.'} userImg={Icons.tom} productImg={Icons.tom} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} yellowTagTxt={'yellow'} blueTagTxt={'blue'} postType={'Review'} hideTags={false} postText={'I am new to this'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'}         author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product3} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} yellowTagTxt={'yellow'} blueTagTxt={'blue'} postType={'Review'} hideTags={false} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'}         author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product4} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} yellowTagTxt={'yellow'} blueTagTxt={'blue'} postType={'Review'} hideTags={false} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'}         author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product5} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} yellowTagTxt={'yellow'} blueTagTxt={'blue'} postType={'Review'} hideTags={false} postText={'I love it!'}/>
      </ScrollView> */}

    </View>  
    );
}

const Tab = createBottomTabNavigator();

function NavContainer( {posts, tomPosts} ){
  const navstyles = StyleSheet.create({
    
  });

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: palette.white,
        tabBarInactiveTintColor: palette.white,

        tabBarActiveBackgroundColor: palette.green,
        tabBarInactiveBackgroundColor: palette.green,
           style: {
                 backgroundColor: palette.cream,
                 paddingBottom: 3
           }

      })}
      >
        <Tab.Screen name="Feed" options={{headerShown: false}}>
          {(props) => <Feed posts={posts} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Search" options={{headerShown: false}} component={Browse} />
        <Tab.Screen name="Profile" options={{headerShown: false}}>
          {(props) => <Profile posts={tomPosts} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="PostDetail" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={PostDetail} />
        <Tab.Screen name="Routine" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={Routine} />
        <Tab.Screen name="CommentCard" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={CommentCard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Rosmatika: require('./assets/Fonts/RosmatikaRegular-BWA45.ttf'),
    Monda: require('./assets/Fonts/Monda-Regular.ttf'),
    MondaBold: require('./assets/Fonts/Monda-Bold.ttf'),
});

  let sub;
  const [allPosts, setAllPosts] = useState([]);
  const [tomPosts, setTomPosts] = useState([]);
  const listenToChanges = async () => {
    sub = supabase.channel('*').on('postgres_changes', {event: '*', schema: '*', }, (payload) => {
      console.log('Recieved a change!: ', payload);
    }).subscribe();
  getPosts();
  getTomPosts();
  }
  React.useEffect(() => {
    listenToChanges();
    return () => sub?.unsubscribe();
  }, []);

  const addPost = async ( username, title, postText, postType, tags) => {
    const {data, error} = await supabase 
      .from('posts')
      .insert([
        { username, title, postText, postType, tags},
      ]);
    console.log(data, error);
  }

  const getPosts = async ( ) => {
    const {data, error} = await supabase 
      .from('posts')
      .select('*');
    console.log(data, error);
    setAllPosts(data);
  }
  const getTomPosts = async ( ) => {
    const {data, error} = await supabase 
      .from('posts')
      .select('*')
      .eq('username', '@TaheeShahee');
    console.log(data, error);
    setTomPosts(data);
  }
  let contentDisplayed = null;
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if ( isLoggedIn ){
    contentDisplayed = <NavContainer posts={allPosts} tomPosts={tomPosts}/>
  } else {
    // contentDisplayed = <Auth setIsLoggedIn={setIsLoggedIn}/>
    contentDisplayed = <NavContainer posts={allPosts} tomPosts={tomPosts}/>
  }

  if (!fontsLoaded) return <AppLoading />;

return (
  <SafeAreaView style={styles.greenbg}>
   {contentDisplayed}
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  greenbg: {
    flex: 1,
    backgroundColor: palette.green,
  },
  head: {
    flex: 1,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    maxWidth: 30,
    marginRight: 5,
  },
  newPostsWrapper: {
    position: 'relative',
    top: -15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
