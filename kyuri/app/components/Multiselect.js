import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';

const MultiSelectScreen = _props => {
    // const [dropdown, setDropdown] = useState(null);
    const [selected, setSelected] = useState([]);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
        </View>
        );
    };

    return (
        <View style={styles.container}>
            <MultiSelect
                style={styles.dropdown}
                data={_props.data}
                labelField="label"
                itemContainerStyle={styles.itemContainer}
                containerStyle={styles.shadow}
                search={false}
                valueField="value"
                label="Multi Select"
                placeholder={_props.placeholderTxt}
                fontFamily='Monda'
                placeholderStyle={styles.placeholder}
                searchPlaceholder="Search"
                value={selected}
                selectedStyle={styles.selectedTag}
                selectedTextStyle={styles.selectedText}
                maxHeight = {300}
                onChange={item => {
                setSelected(item);
                    console.log('selected', item);
                }}
                renderItem={item => _renderItem(item)}
            /> 
        </View>
    );
};

export default MultiSelectScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        width: '100%',
        fontFamily: 'Monda',
    },
    selectedTag: {
        backgroundColor: palette.cream,
        borderRadius: 20,
        borderColor: palette.mediumBrown,
        borderWidth: 2,
        marginLeft: 10,
    },
    selectedText: {
        color: 'black',
        fontFamily: 'MondaBold',
    },
    dropdown: {
        height: 46,
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        alignItems: 'center',
        overflow: 'hidden',
        padding: 5,
        marginVertical: 5,

    },
    placeholder: {
        marginLeft: 5,
        color: 'lightgrey'
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Monda',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Monda',
    },
    dropdownTxt: {
        fontFamily: 'Monda',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        overflow: 'hidden',
        marginTop: 5,
    },
    itemContainer: {
        paddingHorizontal: 5,
    }


});