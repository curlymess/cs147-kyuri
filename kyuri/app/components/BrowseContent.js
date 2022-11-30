import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { palette } from '../../assets/Themes/palette';
import Checkbox from '../../app/components/Checkbox.js';
import Pedestal from '../../app/components/Pedestal.js';
import AppLoading from 'expo-app-loading';

import { useState } from 'react';




export default function BrowseContent(props) {
    let checkboxes = {list: [
        {
            key: 0,
            name: "Product Type",
            content: [
                {
                    key: "Moisturizer",
                    active: false,
                    outer: 0,
                    inner: 0,
                }, 
                {
                    key: "Exfoliant",
                    active: false,
                    outer: 0,
                    inner: 1,
                },
                {
                    key: "Sunscreen",
                    active: false,
                    outer: 0,
                    inner: 2,
                }, 
                {
                    key: "Cleanser",
                    active: false,
                    outer: 0,
                    inner: 3,
                }, 
                {
                    key: "Toner",
                    active: false,
                    outer: 0,
                    inner: 4,
                }, 
            ]
        },
        {
            key: 1,
            name: "Skin Type",
            content: [
                {
                    key: "Oily",
                    active: false,
                    outer: 1,
                    inner: 0,
                }, 
                {
                    key: "Dry",
                    active: false,
                    outer: 1,
                    inner: 1,
                },
                {
                    key: "Combination",
                    active: false,
                    outer: 1,
                    inner: 2,
                }
            ]
        },
    ]}
    const [checkbs, checkCallb] = useState(checkboxes);

    let [fontsLoaded] = useFonts({
        Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
        Monda: require('../../assets/Fonts/Monda-Regular.ttf'),
        MondaBold: require('../../assets/Fonts/Monda-Bold.ttf'),
      });
      if (!fontsLoaded) return <AppLoading />;
    

    if (props.screen1Prop) {
        if (props.filterProp) {
            return (
                <View style={styles.filterPageContainer}>
                    <FlatList
                        style={styles.outerList}
                        numColumns={2}
                        data={checkbs.list}
                        renderItem={({item}) => 
                            <View style={styles.filterWrapper}>
                                <View style={styles.filterHeading}>
                                    <Text style={styles.filterHeadingText}>{item.name}</Text>
                                </View>
                                <View style={styles.filterContainer}>
                                    <FlatList
                                        data={item.content}
                                        renderItem={({item}) =>
                                            <Checkbox
                                                label={item.key}
                                                checked={item.active}
                                                fullState={checkbs}
                                                callback={checkCallb}
                                                outer={item.outer}
                                                inner={item.inner}
                                            ></Checkbox>
                                        }
                                    ></FlatList>
                                </View>
                            </View>
                        }
                    ></FlatList>

                </View>
            );        
        } else {
            return(
                <View>
                    <Pedestal
                        size={56}
                        url={require('../../assets/Icons/iris.png')}
                    >
                    </Pedestal>
                    
                </View>
            );
        }
    } else if (props.screen2Prop) {
        if (props.filterProp) {
            return (
                <View style={styles.filterPageContainer}>
                    <Text>
                        People Filter
                    </Text>
                </View>
            );        
        } else {
            return(
                <View>
                    <Text>
                        People
                    </Text>
                </View>
            );
        }
    } else if (props.screen3Prop) {
        if (props.filterProp) {
            return (
                <View>
                    <Text>
                        Posts Filter
                    </Text>
                </View>
            );        
        } else {
            return(
                <View>
                    <Text>
                        Posts
                    </Text>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    filterPageContainer: {
        position: 'relative',
        top: -23,
        width: '100%',
    },
    filterWrapper: {
        flex: 1/2,
        marginHorizontal: 5,
    },
    filterHeading: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginBottom: 4,
    },
    filterHeadingText: {
        fontFamily: 'MondaBold',
        paddingBottom: 5,
    },
    outerList: {
        marginHorizontal: 8,
        marginTop: 5, 
    }
});
