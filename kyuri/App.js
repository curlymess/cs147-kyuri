import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, TextInput, ScrollView } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import { palette } from './assets/Themes/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ***** Componets ******* 
import {Top} from './app/components';
import { Post } from './app/components';
//Browse page components
import BrowseSearchBar from './app/components/BrowseSearchBar.js';
import BrowseSlider from './app/components/BrowseSlider.js';
import BrowseContent from './app/components/BrowseContent.js';
import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './app/components/Auth'
import Account from './app/components/Account'
import { Session } from '@supabase/supabase-js'

function Feed({ navigation }) {
  const feedStyles = StyleSheet.create({
    myProfileCard: {
      flex: 1,
      flexDirection: 'row',
      maxHeight: 100,
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: palette.darkBrown,
      justifyContent:'space-around',
      alignItems: 'center',
      borderRadius: 8,
    },
    myProfileTxt: {
      color: palette.white,
    },
    myprofileBttn: {
      backgroundColor: palette.green,
      alignSelf: 'flex-end',
      paddingBottom: 10,
      padding: 5,
      borderRadius: 8,
    },
    post: {
      flex: 1,
      
    }
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} />
      <StatusBar style="auto" />

      <ScrollView> 
        {/* //current issue is making the author icon show with longer titles and cutting off text that is too long */}
        <Post style={feedStyles.post} navigation={navigation}
          title={'Top new products for you!'} author={'Kyuri'} postText={'Based on your interests!'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'Anyone know a good product?'} author={'Benjamin W.'} postText={'While traditional sunscreens contain ocean-damaging chemicals, reef-friendly products allow...'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'Skin Update!'} author={'Gertrude A.'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine'} author={'Gertrude A.'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 2'} author={'Gertrude A.'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 3'} author={'Gertrude A.'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 4'} author={'Gertrude A.'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 5'} author={'Gertrude A.'} postText={'Perfect for the cold weather :)'}/>
        
        
        
      </ScrollView>
         

      
    </View>    
  )
}

function Browse() {
  return (
  <View style={styles.container}>
    <Top style={styles.head} />
    <StatusBar style="auto"/>
    <BrowseSearchBar></BrowseSearchBar>
    <BrowseSlider></BrowseSlider>
    <BrowseContent>
    </BrowseContent>
  </View>  
  );
}

function Profile( {navigation} ){
  //issue with content (author, title, posttext) are not showing in postdetails page
  const author = "author";
  const title = "title";
  const postText = "postText";
  const profileStyles = StyleSheet.create({
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
  return (
    <View style={styles.container}>
      <Top style={styles.head} />
      <StatusBar style="auto" />

      <View style ={styles.container}>
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
}

const Tab = createBottomTabNavigator();

export default function App() {
  // const [session, setSession] = useState<Session | null>(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])
  return (
  //   <View>
  //   {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
  // </View>


    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Feed'}
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Browse') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: palette.green,
        tabBarInactiveTintColor: palette.darkBrown,

        tabBarActiveBackgroundColor: palette.cream,
        tabBarInactiveBackgroundColor: palette.cream,
           style: {
                 backgroundColor: palette.cream,
                 paddingBottom: 3
           }

      })}
      >
        <Tab.Screen name="Feed" options={{headerShown: false}} component={Feed} />
        <Tab.Screen name="Browse" options={{headerShown: false}} component={Browse} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        <Tab.Screen name="PostDetail" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={PostDetail} />
      </Tab.Navigator>

    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
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
  
});
