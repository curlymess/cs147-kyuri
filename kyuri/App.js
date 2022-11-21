import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, TextInput } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import { palette } from './assets/Themes/palette';
import {Top} from './app/components';
import { BrowseScreen } from './app/components';
import { Post } from './app/components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Feed() {
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

      <View style={feedStyles.myProfileCard}>
        <Image source={Icons.tom}/>
        <View>
          <Text style={feedStyles.myProfileTxt}>Tom S.</Text>
          <Text style={feedStyles.myProfileTxt}>@TomShahee</Text>
        </View>
        <Pressable style={feedStyles.myprofileBttn}>
          <Text>My Profile</Text>
        </Pressable>
      </View>

      <Post style={feedStyles.post}/>
      <Post style={feedStyles.post}/>
      <Post style={feedStyles.post}/>
      <Post style={feedStyles.post}/>
      <Post style={feedStyles.post}/>
      <Post style={feedStyles.post}/>

      <View>

      </View>

      <View>

      </View>
    </View>    
  )
}

function Browse(){
  const browseStyles = StyleSheet.create({
    container: {
      width: '100%',
      position: 'relative',
      top: -23,
    },
    searchContainer: {
      width: '100%',
      height: 46,

    },
    searchBar: {
      height: 46,
      backgroundColor: 'white',
      borderRadius: 8,
      marginHorizontal: 10,
      borderWidth: 3,
      borderColor: palette.darkBrown,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',

    },
    searchBarButton: {
      marginLeft: 'auto',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
    },
    filterButton: {
      backgroundColor: palette.cream,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      borderLeftWidth: 3,
      borderColor: palette.darkBrown,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },
    input: {
      fontSize: 16,
      marginLeft: 10,
    }
  });
  return (
  <View style={styles.container}>
    <Top style={styles.head} />
    <StatusBar style="auto" />
    <View style={browseStyles.container}>
      <View style={browseStyles.searchContainer}>
        <View style={browseStyles.searchBar}>
          <TextInput 
            placeholder = "Search"
            style={browseStyles.input}
          ></TextInput>
          <Pressable style={browseStyles.searchBarButton}>
            <Ionicons name='search' size={28} color='black'></Ionicons>
          </Pressable>
          <Pressable style={browseStyles.filterButton}>
            <Ionicons name='options-outline' size={28} color='black'></Ionicons>
          </Pressable>
        </View>
      </View>
    </View>
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
