import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image, FlatList } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal.js';
import MedPedestal from './MedPedestal.js';

import { withTheme } from 'react-native-elements';
import { AuthError } from '@supabase/supabase-js';
import { supabase } from "../../lib/supabase";
import { useState } from 'react';


export default function PersonThumbnail(props) {
    let data=props;
    return (
        <Pressable 
            style={styles.container}
            onPress={() => {
                props.navigation.navigate('PersonDetail', {data})
            }}
        >
            <View style={styles.left}>
                <View style={styles.pedestalWrapper}>
                    <View style={styles.pedestalWrapperInner}>
                        <MedPedestal
                            url={props.image}
                            light={false}
                        ></MedPedestal>
                    </View>
                </View>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                    <Text style={styles.username}>{props.username}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.rightTop}>
                    <Text style={styles.ageLabel}>Age </Text>
                    <Text style={styles.age}>{props.age}</Text>
                    <Text style={styles.levelLabel}>Level </Text>
                    <Text style={styles.level}>{props.level}</Text>

                </View>
                <View style={styles.rightBottom}>
                    <View style={styles.mutualsContainer}>
                        <Text style={styles.mutuals}>
                            Mutuals:
                        </Text>
                        <View style={styles.mutualsPedestals}>
                            <FlatList
                                horizontal={true}
                                data={props.mutuals}
                                renderItem={({item}) =>
                                    <Pedestal
                                        url={item}
                                        light={true}
                                    ></Pedestal>
                                }
                            ></FlatList>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,

    },
    pedestalWrapper: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        width: '45%',
        backgroundColor: palette.lightGreen,
        height: '100%',
        flexDirection: 'row',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    right: {
        width: '55%',
        height: '100%',
        backgroundColor: palette.darkBrown,
        paddingHorizontal: 5,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    nameWrapper: {
        width: '50%',
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'MondaBold',
        marginBottom: 2,
        marginRight: 3,
    },
    rightTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ageLabel: {
        fontFamily: 'MondaBold',
        color: 'white',
    },
    age: {
        color: 'white',
        fontFamily: 'Monda',
        marginTop: 0.5,
    },
    levelLabel: {
        marginLeft: 'auto',
        fontFamily: 'MondaBold',
        color: 'white',
    },
    level: {
        color: 'white',
        marginTop: 1.5,
        marginRight: 5,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 5,
    }, 
    mutualsContainer: {
        flexDirection: 'row',
    },
    rightBottom: {

    },
    mutuals: {
        fontFamily: 'MondaBold',
        color: 'white',
    },
    mutualsPedestals: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    pedestalWrapperInner: {
        position: 'relative',
        bottom: -10,
    },
    username: {
        fontSize: 12,
        marginRight: 2,
    }
});
