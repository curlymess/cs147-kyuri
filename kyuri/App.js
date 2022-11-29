import 'react-native-url-polyfill/auto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, TextInput, SafeAreaView, ScrollView } from 'react-native';
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

import BrowseSlider from './app/components/BrowseSlider.js';
import BrowseContent from './app/components/BrowseContent.js';
import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';
import Routine from './app/components/Routine';

import { useState } from 'react';
import NavContainer from './app/components/NavContainer';

export default function App() {

    let contentDisplayed = null;
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    if ( isLoggedIn ){
      contentDisplayed = <NavContainer/>
    } else {
      // contentDisplayed = <Auth setIsLoggedIn={setIsLoggedIn}/>;
      contentDisplayed = <NavContainer/>

    }
  return (
      <SafeAreaView style={styles.container}>
       {contentDisplayed}
      </SafeAreaView>

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
