import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal.js';
import MedPedestal from './MedPedestal.js';

import { withTheme } from 'react-native-elements';



export default function ProductThumbnail(props) {

    return (
        <View style={styles.container}>
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
                    <Text style={styles.name}>{props.name}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.rightTop}>
                    <Text style={styles.typeLabel}>Type </Text>
                    <Text style={styles.type}>{props.type}</Text>
                    <View style={styles.stars}>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star" size={12} color='white'/>
                        <Ionicons name="star-outline" size={12} color='white'/>
                    </View>
                </View>
                <View style={styles.rightBottom}>
                    <View style={styles.usedByContainer}>
                        <Text style={styles.usedBy}>
                            Used by:
                        </Text>
                        <View style={styles.usedByPedestals}>
                            <FlatList
                                horizontal={true}
                                data={props.usedBy}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        borderRadius: 12,
    },
    pedestalWrapper: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        width: '45%',
        backgroundColor: palette.cream,
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
    },
    rightTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    typeLabel: {
        fontFamily: 'MondaBold',
        color: 'white',
    },
    type: {
        color: 'white',
        fontFamily: 'Monda',
        marginTop: 0.5,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 5,
    }, 
    usedByContainer: {
        flexDirection: 'row',
    },
    rightBottom: {

    },
    usedBy: {
        fontFamily: 'MondaBold',
        color: 'white',
    },
    usedByPedestals: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    pedestalWrapperInner: {
        position: 'relative',
        bottom: -10,
    }
});
