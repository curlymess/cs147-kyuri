import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import { useState } from 'react';
import Top from './Top';
import MultiSelectScreen from './Multiselect';


const Onboarding3 = ({navigation, setIsLoggedIn}, props) => 
{
    const [routineName, setRoutineName] = useState('');
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
        <Top noBack={false} navigation={navigation} hidePostButton={true} noShadow={true}/>
        <View>
        <Text style={styles.title}>Onboarding</Text>
        <Text style={styles.title}>Your Routine</Text>
            <View style={styles.searchContainer}>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "Routine Name"
                    style={styles.input}
                    onChangeText={(text) => setRoutineName(text)}
                    ></TextInput>
                </View>
                <View>
                    <MultiSelectScreen data={typeData} placeholderTxt={'Product 1'}></MultiSelectScreen>
                </View>
                <View>
                    <MultiSelectScreen data={problemsData} placeholderTxt={'Product 2 (optional)'}></MultiSelectScreen>
                </View>
                <View>
                    <MultiSelectScreen data={problemsData} placeholderTxt={'Product 3 (optional)'}></MultiSelectScreen>
                </View>
                <View>
                    <MultiSelectScreen data={problemsData} placeholderTxt={'Product 4 (optional)'}></MultiSelectScreen>
                </View>
            </View>
        </View>

        <Pressable style={[styles.verticallySpaced, styles.mt20, styles.bttn]} onPress={() => setIsLoggedIn(true)}>
            <Text style={styles.bttnTxt}>Finish!</Text>
        </Pressable>
        <Pressable style={[styles.verticallySpaced, styles.signUpBttn]} onPress={() => setIsLoggedIn(true)}>
            <Text style={styles.signUpTxt}>Don't currently have a routine? Skip!</Text>
        </Pressable>

    </View>
  );
};


export default Onboarding3;

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
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
        borderColor: palette.darkBrown,
      },
      mt20: {
        marginTop: 20,
      },
      bttn: {
        backgroundColor: palette.darkBrown,
        alignItems: 'center',
        margin: 10,
        marginTop: 0,
        borderRadius: 60,
      },
      bttnTxt: {
        padding: 5,
        color: palette.white,
        fontSize: 20,
        fontFamily: 'MondaBold',
      },
      signUpBttn: {
    
      },
      signUpTxt:{
        fontFamily: 'MondaBold',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: palette.white,
      },

});