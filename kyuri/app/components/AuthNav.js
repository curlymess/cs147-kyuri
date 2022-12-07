import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Icons from '../../assets/Icons';
import themes from '../../assets/Themes/themes';
import { palette } from '../../assets/Themes/palette';
import { Button, Input } from 'react-native-elements'
import Auth from './Auth';
import Onboarding from './Onboarding';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import ProfileContent from './ProfileContent';

// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App from '../../App';

const Tab = createBottomTabNavigator();

export default function AuthNav( {setIsLoggedIn }){
    const navstyles = StyleSheet.create({
      
    });
  
    return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Auth" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}}>
            {(props) => <Auth setIsLoggedIn={setIsLoggedIn} {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Onboarding" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={Onboarding} />
            <Tab.Screen name="Onboarding2" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={Onboarding2} />
            <Tab.Screen name="Onboarding3" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} >
            {(props) => <Onboarding3 setIsLoggedIn={setIsLoggedIn} {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }