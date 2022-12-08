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

const imageSelect = (inputImg) => {
    if (inputImg === null){
      return Icons.tom;
    }
    const outputImg = {
      'tom': Icons.tom,
      'iris': Icons.iris,
      'p1': Icons.p1,
      'p2': Icons.p2,
      'p3': Icons.p3,
      'p4': Icons.p4,
      'p5': Icons.p5,
      'p6': Icons.p6,
      'p7': Icons.p7,
      'p8': Icons.p8,
    };
    return outputImg[inputImg];
  }

const ImageDropDown = _props => {
    const [dropdown, setDropdown] = useState(null);
    // const [selected, setSelected] = useState([]);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Image style={styles.icon} source={imageSelect(item.userImg)} />
            <Text style={styles.textItem}>{item.label}</Text>
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
                labelField="label"
                valueField="userImg"
                label="Dropdown"
                labelStyle={styles.dropdownTxt}
                inputSearchStyle={styles.dropdownTxt}
                itemTextStyle={styles.dropdownTxt}
                selectedTextStyle={styles.dropdownTxt}
                placeholder={_props.placeholderTxt}
                placeholderStyle={styles.placeholder}
                fontFamily='Monda'
                itemContainerStyle={styles.itemContainer}
                maxHeight={200}
                value={dropdown}
                onChange={item => {
                setDropdown(item.userImg);
                    console.log('selected', item);
                    console.log(dropdown);
                }}
                renderLeftIcon={() => (
                    <Image style={styles.icon} source={(dropdown === 'p8') ? Icons.tom : Icons.iris} />
                )}
                renderSelectedItem={() => (
                    <Image style={styles.icon} source={Icons.tom} />
                )}
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

export default ImageDropDown;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.green,
        width: '100%',
        fontFamily: 'Monda',
    },
    dropdown: {
        height: 150,
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
        width: 100,
        height: 100,

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