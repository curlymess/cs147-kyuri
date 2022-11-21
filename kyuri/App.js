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

      {/* <View style={feedStyles.myProfileCard}>
        <Image source={Icons.tom}/>
        <View>
          <Text style={feedStyles.myProfileTxt}>Tom S.</Text>
          <Text style={feedStyles.myProfileTxt}>@TomShahee</Text>
        </View>
        <Pressable style={feedStyles.myprofileBttn}>
          <Text>My Profile</Text>
        </Pressable>
      </View> */}

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

function Profile(){
  return (
    <View style={styles.container}>
      <Top style={styles.head} />
      <StatusBar style="auto" />

      <View style ={styles.container}>
        <Text>Profile</Text>
      </View>
    </View>  
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Rosmatika: require('./assets/Fonts/RosmatikaRegular-BWA45.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */

  /* insert your code here */
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
  rose: {
    flex: 1,
    fontFamily: 'Rosmatika',
    fontSize: 24,
    color: palette.white,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    maxWidth: 30,
    marginRight: 5,
  },
  
});
