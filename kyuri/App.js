import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, SafeAreaView, ScrollView } from 'react-native';
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
import Auth from './app/components/Auth.js';
import { useState } from 'react';

import BrowseSlider from './app/components/BrowseSlider.js';
import BrowseContent from './app/components/BrowseContent.js';
import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';
import Routine from './app/components/Routine';

import 'react-native-url-polyfill/auto'

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
          title={'Top new products for you!'} author={'Kyuri'} postText={'Based on your interests!'} profileImg={Icons.logo}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'Anyone know a good product?'} author={'Benjamin W.'} profileImg={Icons.p1} postText={'While traditional sunscreens contain ocean-damaging chemicals, reef-friendly products allow...'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'Skin Update!'} author={'Gertrude A.'} profileImg={Icons.p2} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine'} author={'Gertrude A.'} profileImg={Icons.p3} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 2'} author={'Gertrude A.'} profileImg={Icons.p4} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 3'} author={'Gertrude A.'} profileImg={Icons.p5} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 4'} author={'Gertrude A.'} profileImg={Icons.p6} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 5'} author={'Gertrude A.'} profileImg={Icons.p7} postText={'Perfect for the cold weather :)'}/>
      </ScrollView>
         

      
    </View>    
  )
}

function Browse() {
  const [screen1, toggleScreen1] = useState(true);
  const [screen2, toggleScreen2] = useState(false);
  const [screen3, toggleScreen3] = useState(false);
  const [filter, toggleFilter] = useState(false);

  return (
  <View style={styles.container}>
    <Top style={styles.head} />
    <StatusBar style="auto"/>
    <BrowseSearchBar filterProp={filter} filterCallback={toggleFilter}></BrowseSearchBar>
    <BrowseSlider 
      screen1Prop={screen1} screen2Prop={screen2} screen3Prop={screen3}
      screen1Callback={toggleScreen1} screen2Callback={toggleScreen2} screen3Callback={toggleScreen3} 
    >
    </BrowseSlider>
    <BrowseContent
      screen1Prop={screen1} screen2Prop={screen2} screen3Prop={screen3}
      filterProp={filter} 
    >
    </BrowseContent>
  </View>  
  );
}

function Profile( {navigation} ){
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
            <Text style={profileStyles.myProfileTxtName}>curr_user</Text>
            <Text style={profileStyles.myProfileTxt}>@CURRENT_USER</Text>
          </View>
          <View>
            <Text style={profileStyles.myProfileTxt}>Age ??</Text>
            <Text style={profileStyles.myProfileTxt}>Ethnicity ?</Text>
            <Text style={profileStyles.myProfileTxt}>Level ?????</Text>
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

      <Text style={profileStyles.heading}>My Posts</Text>
      <ScrollView style={profileStyles.postsCard}   horizontal={true}>

        <PostCard navigation={navigation} title={'Coral-Reef Safe Sunscreen Review'} author={'CURRENT_USER'} profileImg={Icons.p6} productImg={Icons.product1} postText={'We bought this as scuba divers and snorkellers concerned that regular sun creams have ingredients that are poisonous to aquatic creatures. After reading reviews about alternative, non-harmful creams - and looking to see which are available in the UK - we went for this one. I can certainly say it works as a factor 50 cream. Would recommend to anyone doing watersports with a conscience.'}/>
        <PostCard navigation={navigation} title={'Help with my routine?'}     author={'CURRENT_USER'} profileImg={Icons.p5} productImg={Icons.product2} postText={'I am new to this'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'CURRENT_USER'}   profileImg={Icons.p1}   productImg={Icons.product3}postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'CURRENT_USER'}   profileImg={Icons.p2}   productImg={Icons.product4} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'CURRENT_USER'}   profileImg={Icons.p4}   productImg={Icons.product5} postText={'I love it!'}/>
      </ScrollView>

    </View>  
    );
}

const Tab = createBottomTabNavigator();

function NavContainer(){
  const navstyles = StyleSheet.create({
    
  });
  return (

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
        tabBarActiveTintColor: palette.cream,
        tabBarInactiveTintColor: palette.darkBrown,

        tabBarActiveBackgroundColor: palette.green,
        tabBarInactiveBackgroundColor: palette.green,
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
        <Tab.Screen name="Routine" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={Routine} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}


export default function App() {
  let contentDisplayed = null;
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if ( isLoggedIn ){
    contentDisplayed = <NavContainer/>
  } else {
    contentDisplayed = <Auth setIsLoggedIn={setIsLoggedIn}/>
  }
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
  
});
