import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal.js';
import MedPedestal from './MedPedestal.js';
import Top from './Top.js';
import { StatusBar } from 'expo-status-bar';
import CommentCard from './CommentCard';
import ProfileContent from './ProfileContent';



export default function Profile({navigation, route})
{
    const {data} = route.params;
    const {allPosts} = route.params;

  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true" navigation={navigation}/>
        <View style={styles.myProfileCard}>
          <View style={styles.myProfilePicWrapper}>
            <Image 
              style={styles.myProfilePic}
              resizeMode="contain"
              source={data.image}
            />
          </View>
          <View style={styles.profileTxt}>
            <Text style={[styles.myProfileTxtName, styles.myProfileName]}>{data.name}</Text>
            <Text style={[styles.myProfileTxt, styles.myProfileUsername]}>{data.username}</Text>
            <Text style={styles.myProfileTxt}>
              <Text style={styles.boldLabel}>Age </Text>
              {data.age}
            </Text>
            <Text style={styles.myProfileTxt}>              
              <Text style={styles.boldLabel}>Ethnicity </Text>
              {data.ethnicity}
            </Text>
            <Text style={styles.myProfileTxt}>              
              <Text style={styles.boldLabel}>Level </Text>
              {data.level}
            </Text>
          </View>
        </View>


      <Text style={styles.heading}>Posts by {data.name}</Text>
      <ProfileContent style={styles.postsCard} navigation={navigation} posts={[]}/>

    </View>  
    );
}

const styles = StyleSheet.create({
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