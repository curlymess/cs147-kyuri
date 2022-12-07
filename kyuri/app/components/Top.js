import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, PlatformColor } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';

import DraftPost from './DraftPost';
// supabase
import { supabase } from "./../../lib/supabase";

export default function Top(props) {
    

    return (
        <View style={props.noShadow ? styles.container : styles.shadow}>
            <View style={styles.row}>
                {!props.noBack &&
                <Pressable style={styles.back} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={18} color='white'/>
                    <Text style={styles.backText}>
                        Back
                    </Text>
                </Pressable>
                }              
            </View>
            <View style={styles.logoContainter}>
                <Image style={styles.logo} source={Icons.logo} />
                <Text style={styles.kyuritxt}>Kyuri</Text>
            </View>
            {!props.hidePostButton && 
            <View style={styles.row}>
                <Pressable style={styles.plus} onPress={() => props.navigation.navigate(DraftPost)} >
                    <Ionicons name="add-circle-outline" size={33} color='white'/>
                </Pressable>
            </View>
            }
            {props.hidePostButton &&
            <View style={styles.row}>
                <Pressable style={styles.plus} >
                    <Ionicons name="add-circle-outline" size={33} color={palette.green}/>
                </Pressable>
            </View>
            }

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    shadow: {
        backgroundColor: palette.green,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        color: palette.white,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'MondaBold',
    },
    plus: {
        marginLeft: 'auto',
    },
    logoContainter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    kyuritxt: {
        fontFamily: 'Rosmatika',
        color: palette.white,
        fontSize: 24,
        marginTop: 4,
        marginLeft: 4,
    },
    logo: {
        resizeMode: 'contain',
        maxHeight: 30,
        maxWidth: 30,
    },
});
