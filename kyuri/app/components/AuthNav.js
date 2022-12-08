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
    const screenOptions = {
      tabBarStyle:{
        backgroundColor:palette.green,
        height: 400,
      },
      tabBarItemStyle:{
        backgroundColor:palette.green,
        margin:5,
      },
      tabBarActiveBackgroundColor: palette.green,
      tabBarInactiveBackgroundColor: palette.green,
    };
  
  
    return (
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
            tabBarOptions={{
              style:{
                backgroundColor: palette.green,
                height: 0,
              }
            }}
            screenOptions={{
              tabBarActiveBackgroundColor: palette.green,
              tabBarInactiveBackgroundColor: palette.green,   
              tabBarInactiveTintColor: palette.green,
              tabBarActiveTintColor: palette.green 
            }}      



        >
            <Tab.Screen name="Auth" options={{headerShown: false, tabBarVisible: true,}}>
            {(props) => <Auth setIsLoggedIn={setIsLoggedIn} {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Onboarding" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: true,}} component={Onboarding} />
            <Tab.Screen name="Onboarding2" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: true,}} >
            {(props) => <Onboarding2 setIsLoggedIn={setIsLoggedIn} {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: palette.green,
    }
  })
