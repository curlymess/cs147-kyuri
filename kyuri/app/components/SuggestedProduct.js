import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, Image, FlatList } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal.js';
import MedPedestal from './MedPedestal.js';

import { withTheme } from 'react-native-elements';
import { AuthError } from '@supabase/supabase-js';



export default function PersonThumbnail(props) {
    return (
        <View style={styles.container}>
            <View styles={styles.pedestalWrapper}>
                <MedPedestal
                    url={require('../../assets/Icons/product1.png')}
                    light={true}
                ></MedPedestal>
            </View>
            <View style={styles.right}>
                <View styles={styles.titleContainer}>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        borderRadius: 12,
    },
});
