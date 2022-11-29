import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { palette } from '../../assets/Themes/palette';



export default function BrowseSearchBar(props) {
  let [fontsLoaded] = useFonts({
    Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
    Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;

    return (
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
              <Pressable 
                style={browseStyles.filterButton}
                onPress={() => {props.filterCallback(!props.filterProp)}}
              >
                <Ionicons 
                  name='options-outline' size={28} color='black'
                ></Ionicons>
              </Pressable>
            </View>
          </View>
        </View>
    );
}
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
      fontFamily: 'Monda',
    },
});
