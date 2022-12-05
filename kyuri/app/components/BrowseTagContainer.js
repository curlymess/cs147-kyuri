import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';



export default function BrowseTagContainer(props) { 
    let list = []; 
    props.checkboxesProp.list.map((cat) => {
        cat.content.map((item) => {
            if (item.active) {list.push(item)};
        })
    })
    return (
        <View>
            {list == 0 && <View style={styles.spacer}></View>}
            {list != 0 && <View style={styles.container}>
                <FlatList 
                    horizontal={true}
                    data={list}
                    renderItem={({item}) => 
                        <View style={styles.tag}>
                            <Text style={styles.text}>{item.key}</Text>
                            <Pressable onPress={() => {
                                let cloneState = {...props.checkboxesProp};
                                cloneState.list[item.outer].content[item.inner].active = false;
                                props.callback(cloneState)
                            }}>
                                <Ionicons size={18} name='close-outline' color='black'></Ionicons>
                            </Pressable>
                        </View>
                    }
                ></FlatList>
            </View>}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    spacer: {
        height: 10,
    },
    tag: {
        backgroundColor: palette.blueTag,
        borderColor: palette.blue,
        borderWidth: 1,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 5,
        borderRadius: 20,
        marginRight: 3,  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    text: {
        fontSize: 10,
        color: palette.black,
        fontFamily: 'Monda',  
        marginRight: 5,
    }
});
