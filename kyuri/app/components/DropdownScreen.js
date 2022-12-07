import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import Icons from '../../assets/Icons';
import { palette } from '../../assets/Themes/palette';

const data = [
    {label: 'Review', value: '1'},
    {label: 'Article', value: '2'},
    {label: 'Routine', value: '3'},
    {label: 'Request', value: '4'},
];

const DropdownScreen = _props => {
    const [dropdown, setDropdown] = useState(null);
    // const [selected, setSelected] = useState([]);

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
            <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={_props.data}
                search={false}
                searchPlaceholder="Search"
                labelField="label"
                valueField="value"
                label="Dropdown"
                labelStyle={styles.dropdownTxt}
                inputSearchStyle={styles.dropdownTxt}
                itemTextStyle={styles.dropdownTxt}
                selectedTextStyle={styles.dropdownTxt}
                placeholder={_props.placeholderTxt}
                placeholderStyle={styles.placeholder}
                fontFamily='Monda'
                itemContainerStyle={styles.itemContainer}
                iconStyle={styles.icon}
                maxHeight={200}
                value={dropdown}
                onChange={item => {
                setDropdown(item.value);
                    console.log('selected', item);
                }}
                // renderLeftIcon={() => (
                //     <Image style={styles.icon} source={Icons.iris} />
                // )}
                renderItem={item => _renderItem(item)}
                textError="Error"
            />

            {/* <MultiSelect
                style={styles.dropdown}
                data={data}
                labelField="label"
                valueField="value"
                label="Multi Select"
                placeholder="Select item"
                search
                searchPlaceholder="Search"
                value={selected}
                onChange={item => {
                setSelected(item);
                    console.log('selected', item);
                }}
                renderItem={item => _renderItem(item)}
            /> */}
        </View>
    );
};

export default DropdownScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        width: '100%',
        fontFamily: 'Monda',
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
        fontFamily: 'Monda',
    },
    placeholder: {
        color: 'lightgrey',
        marginLeft: 5,
    },
    itemContainer: {
        paddingHorizontal: 5,
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
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        overflow: 'hidden',
        marginTop: 5,
    },
});