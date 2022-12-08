import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import { palette } from './assets/Themes/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Input } from 'react-native-elements'

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

import ProductDetail from './app/components/ProductDetail';
import PersonDetail from './app/components/PersonDetail';
import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';
import Routine from './app/components/Routine';
import EmptyRoutineCard from './app/components/EmptyRoutineCard';
import RoutineCard from './app/components/RoutineCard';
import RecommendedProductsCard from './app/components/RecommendedProductsCard';
import RecommendedProductsDetail from './app/components/RecommendedProductsDetail';

import NewPostsStatus from './app/components/NewPostsStatus.js';

import FeedContent from './app/components/FeedContent';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'react-native-url-polyfill/auto'
import CommentCard from './app/components/CommentCard';

// supabase
import { supabase } from "./lib/supabase";

import ProfileContent from './app/components/ProfileContent';
import DraftPost from './app/components/DraftPost';
import Onboarding from './app/components/Onboarding';
import AuthNav from './app/components/AuthNav';
import DraftRoutine from './app/components/DraftRoutine';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

function Feed({ navigation, posts }) {

  const feedStyles = StyleSheet.create({
    post: {
      flex: 1,
    },
    spacer: {
      height: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true" navigation={navigation}/>
      <StatusBar style="auto" />
      <View style={styles.newPostsWrapper}>
        <NewPostsStatus></NewPostsStatus>
      </View>
      <ScrollView>
        <View style={feedStyles.spacer}></View>
        <RecommendedProductsCard navigation={navigation}></RecommendedProductsCard>
        <FeedContent navigation={navigation} posts={posts} />
      </ScrollView>
      
    </View>    
  )
}

function Browse({navigation, allUsers, allPosts, allProducts}) {
  const [screen1, toggleScreen1] = useState(true);
  const [screen2, toggleScreen2] = useState(false);
  const [screen3, toggleScreen3] = useState(false);
  const [filter, toggleFilter] = useState(false);

  const [searchTerms, setSearchTerms] = useState('');

  return (
  <View style={styles.container}>
    <Top style={styles.head} noBack="true" navigation={navigation}/>
    <StatusBar style="auto"/>
    <BrowseSearchBar 
      filterProp={filter} 
      filterCallback={toggleFilter}
      terms={searchTerms}
      termsCallback={setSearchTerms}
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
      allUsers={allUsers}
      allPosts={allPosts}
      navigation={navigation}
      terms={searchTerms}
      termsCallback={setSearchTerms}
      allProducts={allProducts}
    >
    </BrowseContent>
  </View>  
  );
}

function Profile( {navigation, posts} )
{
  const imageSelect = (inputImg) => {
  if (inputImg === null){
    return Icons.tom;
  }
  const outputImg = {
    'tom': Icons.tom,
    'iris': Icons.iris,
    'p1': Icons.p1,
    'p2': Icons.p2,
    'p3': Icons.p3,
    'p4': Icons.p4,
    'p5': Icons.p5,
    'p6': Icons.p6,
    'p7': Icons.p7,
    'p8': Icons.p8,

    'product1': Icons.product1,
    'product2': Icons.product2,
    'product3': Icons.product3,
    'product4': Icons.product4,
    'product5': Icons.product5,
    'product6': Icons.product6,
    'product7': Icons.product7,
    'product8': Icons.product8,
    'product9': Icons.product9,
    'product10': Icons.product10,
    'product11': Icons.product11,
    'product12': Icons.product12,
    'product13': Icons.product13,
    'product14': Icons.product14,
    'product15': Icons.product15,
    'product16': Icons.product16,
    'product17': Icons.product17,
    'product18': Icons.product18,
    'product19': Icons.product19,
    'product20': Icons.product20,
  };
  return outputImg[inputImg];
}

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
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.30,
      shadowRadius: 1.61,

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
      marginTop: 50,
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
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true" navigation={navigation}/>
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

      <EmptyRoutineCard navigation={navigation} title={'Current Routine'}></EmptyRoutineCard>


      <Text style={profileStyles.heading}>My Posts</Text>
      <ProfileContent style={profileStyles.postsCard} navigation={navigation} posts={posts}/>

    </View>  
    );
}

const Tab = createBottomTabNavigator();

function NavContainer( {posts, tomPosts, allUsers, allProducts} ){
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
                 backgroundColor: palette.green,
                 paddingBottom: 3,
           }

      })}
      >
        <Tab.Screen name="Feed" options={{headerShown: false}}>
          {(props) => <Feed posts={posts} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Search" options={{headerShown: false}}>
        {(props) => <Browse allUsers={allUsers} allPosts={posts} allProducts={allProducts} {...props}  />}
        </Tab.Screen>
        <Tab.Screen name="Profile" options={{headerShown: false}}>
          {(props) => <Profile posts={tomPosts} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="PostDetail" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={PostDetail} />
        <Tab.Screen name="ProductDetail" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={ProductDetail} />
        <Tab.Screen name="PersonDetail" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={PersonDetail} />
        <Tab.Screen name="RecommendedProducts" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={RecommendedProductsDetail} />
        <Tab.Screen name="Routine" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={Routine} />
        <Tab.Screen name="CommentCard" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={CommentCard} />
        <Tab.Screen name="DraftPost" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={DraftPost} />
        <Tab.Screen name="DraftRoutine" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={DraftRoutine} />
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
  const [allUsers, setAllUsers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  
  const listenToChanges = async () => {
    sub = supabase.channel('*').on('postgres_changes', {event: '*', schema: '*', }, (payload) => {
      console.log('Recieved a change!: ', payload);
    }).subscribe();
    getPosts();
    getTomPosts();
    getUsers();
    getProducts();
  }
  React.useEffect(() => {
    listenToChanges();
    return () => sub?.unsubscribe();
  }, []);
  const addPost = async ( username, title, postText, postType, userAge, userImg, userLevel, productImg, author, yellowTagTxt, blueTagTxt, hideTags ) => {
    const {data, error} = await supabase 
      .from('posts')
      .insert([
        // { username, title, postText, postType, userAge, userImg, userLevel, productImg, author, yellowTagTxt, blueTagTxt, hideTags },
        { username: username, title:title, postText:postText, postType:postType, userAge:userAge, userImg:userImg, userLevel:userLevel, productImg:productImg, author:author, yellowTagTxt:yellowTagTxt, blueTagText:blueTagTxt, hideTags:hideTags },
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
  const getUsers = async ( ) => {
    const {data, error} = await supabase 
      .from('users')
      .select('*');
    console.log(data, error);
    setAllUsers(data);
  }
  const getProducts = async ( ) => {
    const {data, error} = await supabase 
      .from('products')
      .select('*');
    setAllProducts(data);
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
    contentDisplayed = <NavContainer posts={allPosts} tomPosts={tomPosts} allUsers={allUsers} allProducts={allProducts}/>
  } else {
    
    contentDisplayed = <AuthNav setIsLoggedIn={setIsLoggedIn} />
    // contentDisplayed = <Auth setIsLoggedIn={setIsLoggedIn} />
    // contentDisplayed = <NavContainer posts={allPosts} tomPosts={tomPosts} allUsers={allUsers}/>
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
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    top:60,
    zIndex: 3,
    elevation: 3,
  },
});
