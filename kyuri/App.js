import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
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

import BrowseContent from './app/components/BrowseContent.js';
import BrowseSlider from './app/components/BrowseSlider.js';

import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';
import Routine from './app/components/Routine';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'react-native-url-polyfill/auto'
import { Icon } from 'react-native-elements';

function Feed({ navigation }) {
  let personDataObj = {
    name: 'Iris B.',
    username: '@purplelove',
    image: Icons.iris,
    age: '76',
    level: 'Novice',
    mutuals: [
        Icons.iris,
        Icons.tom,
    ],
  }

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
      <Top style={styles.head} noBack="true" navigation={navigation}/>
      <StatusBar style="auto" />

      <ScrollView> 
        {/* //current issue is making the author icon show with longer titles and cutting off text that is too long */}
        <Post style={feedStyles.post} navigation={navigation} data={personDataObj} title={'Top new products for you!'} author={'Kyuri'} postText={'Based on your interests!'} userImg={Icons.logo} userAge={'24'} userLevel={'Novice'} username={'@kyuri'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'Anyone know a good product?'} author={'Benjamin W.'} userImg={Icons.p1} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'While traditional sunscreens contain ocean-damaging chemicals, reef-friendly products allow...'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'Skin Update!'} author={'Gertrude A.'} userImg={Icons.p2} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine'} author={'Gertrude A.'} userImg={Icons.p3} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 2'} author={'Gertrude A.'} userImg={Icons.p4} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 3'} author={'Gertrude A.'} userImg={Icons.p5} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 4'} author={'Gertrude A.'} userImg={Icons.p6} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'Perfect for the cold weather :)'}/>
        <Post style={feedStyles.post} navigation={navigation}
          title={'My New Winter Routine 5'} author={'Gertrude A.'} userImg={Icons.p7} userAge={'24'} userLevel={'Novice'} username={'@kyuri'} postText={'Perfect for the cold weather :)'}/>
      </ScrollView>
         

      
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
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
    },
    heading: {
      marginLeft: 10,
      fontFamily: 'MondaBold',
    },  
    routineTxt: {
      fontFamily: 'MondaBold',
      fontSize: 18,
    },
    viewRoutineTxt: {
      fontFamily: 'Monda',
      alignSelf: 'center',
      color: palette.green,
    },
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true"/>
      <StatusBar style="auto" />

      <View style ={styles.container}>
        <View style={profileStyles.myProfileCard}>
          <Image source={Icons.tom}/>
          <View style={profileStyles.profileTxt}>
            <Text style={profileStyles.myProfileTxtName}>Tom S.</Text>
            <Text style={profileStyles.myProfileTxt}>@TaheeShahee</Text>
            <Text style={profileStyles.myProfileTxt}>Age 22</Text>
            <Text style={profileStyles.myProfileTxt}>Ethnicity W</Text>
            <Text style={profileStyles.myProfileTxt}>Level Novice</Text>
          </View>
        </View>
      </View>

      <View style={profileStyles.routineCard}>
        <View>
          <Text style={profileStyles.routineTxt}>Current Routine:</Text>
          <Text style={profileStyles.routineTxt}>Create your first routine!</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Routine')}>
          <Ionicons name={'add-circle-outline'} size={40} color={palette.green} />
        </Pressable>
      </View>
      <Text style={profileStyles.viewRoutineTxt}>View other routines</Text>

      <Text style={profileStyles.heading}>My Posts</Text>
      <ScrollView style={profileStyles.postsCard}   horizontal={true}>

        <PostCard navigation={navigation} title={'Coral-Reef Safe Sunscreen Review'} author={'Tom S.'} userImg={Icons.tom} productImg={Icons.product1} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'We bought this as scuba divers and snorkellers concerned that regular sun creams have ingredients that are poisonous to aquatic creatures. After reading reviews about alternative, non-harmful creams - and looking to see which are available in the UK - we went for this one. I can certainly say it works as a factor 50 cream. Would recommend to anyone doing watersports with a conscience.'}/>
        <PostCard navigation={navigation} title={'Help with my routine?'}     author={'Tom S.'} userImg={Icons.tom} productImg={Icons.tom} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I am new to this'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product3} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product4} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product5} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I love it!'}/>
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
  let [fontsLoaded] = useFonts({
    Rosmatika: require('./assets/Fonts/RosmatikaRegular-BWA45.ttf'),
    Monda: require('./assets/Fonts/Monda-Regular.ttf'),
    MondaBold: require('./assets/Fonts/Monda-Bold.ttf'),
});

  let contentDisplayed = null;
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if ( isLoggedIn ){
    contentDisplayed = <NavContainer/>
  } else {
    contentDisplayed = <Auth setIsLoggedIn={setIsLoggedIn}/>
  }

  if (!fontsLoaded) return <AppLoading />;

return (
  <SafeAreaView style={styles.greenbg}>
   {/* {contentDisplayed} */}
   <NavContainer/>
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
