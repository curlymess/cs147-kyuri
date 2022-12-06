import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, FlatList, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Checkbox from '../../app/components/Checkbox.js';
import ProductThumbnail from '../../app/components/ProductThumbnail.js';
import PersonThumbnail from '../../app/components/PersonThumbnail.js';
import BrowseSlider from './BrowseSlider.js';
import BrowseTagContainer from './BrowseTagContainer.js'
import Post from './Post.js';
import Icons from '../../assets/Icons';

import { useState } from 'react';
import PersonThumbnailContent from './PersonThumbnailContent';
import FeedContent from './FeedContent';

export default function BrowseContent(props) {
    //these checkboxes and the following state variable only work for the product screen, you will need to do it again and duplicate it for the other two screens and change the corresponding props in those components
    let checkboxes = {list: [
        {
            key: 0,
            name: "Just Sample",
            content: [
                {
                    key: "Content",
                    active: false,
                    outer: 0,
                    inner: 0,
                }, 
                {
                    key: "to show the",
                    active: false,
                    outer: 0,
                    inner: 1,
                },
                {
                    key: "design",
                    active: false,
                    outer: 0,
                    inner: 2,
                }, 
                {
                    key: "...more",
                    active: false,
                    outer: 0,
                    inner: 3,
                }, 
                {
                    key: "coming soon!",
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

    console.log('print users');
    console.log(props.allUsers);

    let personDataObj = {
        name: 'Iris B.',
        username: '@purplelove',
        image: require('../../assets/Icons/iris.png'),
        age: '76',
        level: 'Novice',
        mutuals: [
            require('../../assets/Icons/iris.png'),
            require('../../assets/Icons/tom.png'),
        ],
    }
    let productDataObj = {
        name: 'Cucumber Moisturizer',
        image: require('../../assets/ProductIcons/product5.png'),
        type: 'Moisturizer',
        rating: 4,
        usedBy: [
            require('../../assets/Icons/iris.png'),
            require('../../assets/Icons/tom.png'),
        ],
    }

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
                <ScrollView>
                    <BrowseTagContainer 
                        checkboxesProp={checkbs} 
                        callback={checkCallb}
                        screenIndex={0}
                    ></BrowseTagContainer>
                    <View style={styles.resultsContainer}>
                        
                        <ProductThumbnail 
                            name={productDataObj.name}
                            image={productDataObj.image}
                            type={productDataObj.type}
                            rating={productDataObj.rating}
                            usedBy={productDataObj.usedBy}
                        >
                        </ProductThumbnail>                  
                    </View>
                </ScrollView>
            );
        }
    } else if (props.screen2Prop) {
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
                <ScrollView>
                    <BrowseTagContainer 
                        checkboxesProp={checkbs} 
                        callback={checkCallb}
                        screenIndex={1}
                    ></BrowseTagContainer>
                    <View style={styles.resultsContainer}>
                        {/* <PersonThumbnail 
                            name={personDataObj.name}
                            username={personDataObj.username}
                            image={personDataObj.image}
                            age={personDataObj.age}
                            level={personDataObj.level}
                            mutuals={personDataObj.mutuals}
                        >
                        </PersonThumbnail>                     */}
                        <PersonThumbnailContent navigation={props.navigation} allUsers={props.allUsers}/>

                    </View>
                </ScrollView>
            );
        }
    } else if (props.screen3Prop) {
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
                <ScrollView>
                    <BrowseTagContainer 
                        checkboxesProp={checkbs} 
                        callback={checkCallb}
                        screenIndex={2}
                    ></BrowseTagContainer>
                    <View style={styles.resultsContainer2}>
                        <FeedContent navigation={props.navigation} posts={props.allPosts}/>
                    </View>
                </ScrollView>
            );
        }
    } else {

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
        marginTop: 25,
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
    },
    resultsContainer: {
        marginHorizontal: 10,
    },
    resultsContainer2: {
        position: 'relative',
        top: -15,
    },
    postsScroll: {
        marginBottom: 144,
    }
});
