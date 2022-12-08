import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Pedestal from './Pedestal';
import Icons from '../../assets/Icons';


export default function ProductDetailContent(props) {  
    
    if (props.s1) {
        return (
            <View style={styles.container}>
                <View style={styles.usedBy}>
                    <Pedestal
                        url={props.data.usedBy[0]}
                    ></Pedestal>
                    <Pedestal
                        url={props.data.usedBy[1]}
                    ></Pedestal>

                </View>
            </View>
        )
    } else if (props.s2) {
        return (
            <View style={styles.container}>
                <View style={styles.details}>
                    <Text><Text style={styles.detailLabel}>Made in </Text><Text style={styles.detailContent}>Ketchikan, AL</Text></Text>
                    <Text style={[styles.detailLabel, styles.marginSpacer]}>Ingredients</Text>
                    <Text style={styles.detailParagraph}>Argireline, Biotin, Lavender Oil, Marshmallow Root Extract</Text>
                </View>
            </View> 
        )
    } else if (props.s3) {
        return (
            <View style={styles.container}>
                <View style={styles.usage}>
                    <Text style={styles.usageText}>Apply liberally to skin twice daily.</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.cream,
        marginHorizontal: 20,
        padding: 10,
        paddingTop: 12,
        position: 'relative',
        zIndex: 1,
        elevation: 1,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.61,
  
    },
    detailLabel: {
        fontFamily: 'MondaBold',
    },
    detailContent: {
        fontFamily: 'Monda',
    }, 
    detailParagraph: {
        fontFamily: 'Monda',
    },
    marginSpacer: {
        marginTop: 3,
    },
    usageText: {
        fontFamily: 'Monda',
    },
    usedBy: {
        flexDirection: 'row',
        position: 'relative',
    }
   

});
