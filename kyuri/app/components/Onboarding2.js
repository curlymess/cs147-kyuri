import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import { useState } from 'react';
import Top from './Top';
import MultiSelectScreen from './Multiselect';


const Onboarding2 = ({navigation}, props) => 
{
    const [profileImg, setProfileImg] = useState('');
    const [skinType, setSkinType] = useState('');
    const [skinProblems, setSkinProblems] = useState('');

    const typeData = [
        {label: 'Oily', value: '1'},
        {label: 'Dry', value: '2'},
        {label: 'Combination', value: '3'},
    ];
    const problemsData = [
        {label: 'Acne-prone', value: '1'},
        {label: 'Sensitive', value: '2'},
        {label: 'Dry Skin', value: '3'},
        {label: 'Aging Skin', value: '4'},
        {label: 'Sun Protection', value: '5'},
        {label: 'Specialty', value: '6'},
    ];

  return (
    <View style={styles.container}>
        <Top noBack={false} navigation={navigation} hidePostButton={true}/>
        <View>
            <Text style={styles.title}>Onboarding</Text>
            <View style={styles.searchContainer}>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "Profile Image"
                    style={styles.input}
                    onChangeText={(text) => setProfileImg(text)}
                    ></TextInput>
                </View>
                <View>
                    <MultiSelectScreen data={typeData} placeholderTxt={'Skin Type'}></MultiSelectScreen>
                </View>
                <View>
                    <MultiSelectScreen data={problemsData} placeholderTxt={'Skin Problems'}></MultiSelectScreen>
                </View>

            </View>
        </View>

        <View style={styles.buttonWrapper}>
            <Pressable style={styles.nextBttn} onPress={() => {navigation.navigate('NavContainer')}}>
                <Text style={styles.nextBttnTxt}>Next</Text>
            </Pressable>
        </View>

    </View>
  );
};


export default Onboarding2;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: palette.green,
    },
    title: {
        fontFamily: 'MondaBold',
        marginHorizontal: 10,
        fontSize: 24,
        color: palette.white,
    },
    searchContainer: {
        
    },
    inputBar: {
        height: 46,
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: 5,
    },
    inputPostBar: {
        height: 300,
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: palette.darkBrown,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 5,
        overflow: 'hidden',
        marginVertical: 5,
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Monda',
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexOne: {
        flex: 1,
    },
    nextBttn: {
        alignItems: 'center',
        backgroundColor: palette.darkBrown,
        borderRadius: 20,
        width: 200,
        marginRight: 10,
    },
    privacyTxt: {
        fontFamily: 'Monda',
        textAlign: 'center',
    },
    nextBttnTxt: {
        fontFamily: 'MondaBold',
        paddingVertical: 5,
        color: palette.white,
    },
    privacyOpt: {
        justifyContent: 'space-around',
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30,
        position: 'absolute',
        bottom: 105,
        width: '100%',
        flex: 1,
      }

});