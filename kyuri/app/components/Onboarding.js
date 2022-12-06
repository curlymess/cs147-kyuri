import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import { useState } from 'react';
import Top from './Top';
import Onboarding2 from './Onboarding2';
import DropdownScreen from './DropdownScreen';
import MultiSelectScreen from './Multiselect';

const Onboarding = ({navigation}) => 
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [race, setRace] = useState('');
    const [level, setLevel] = useState('');

    const levelData = [
        {label: 'Novice', value: '1'},
        {label: 'Intermediate', value: '2'},
        {label: 'Expert', value: '3'},
        {label: 'Master', value: '4'},
    ];

    const raceData = [
        {label: 'Asian', value: '1'},
        {label: 'Black/African American', value: '2'},
        {label: 'Hispanic', value: '3'},
        {label: 'North African/Middle Eastern', value: '4'},
        {label: 'Native Hawaiian/Pacific Islander', value: '5'},
        {label: 'White', value: '6'},
    ];

  return (
    <View style={styles.container}>
        <Top noBack={false} navigation={navigation}/>
        <View>
            <Text style={styles.title}>Onboarding</Text>
            <View style={styles.searchContainer}>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "First Name"
                    style={styles.input}
                    onChangeText={(text) => setFirstName(text)}
                    ></TextInput>
                </View>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "Last Name"
                    style={styles.input}
                    onChangeText={(text) => setLastName(text)}
                    ></TextInput>
                </View>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "Email"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    ></TextInput>
                </View>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "Username"
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                    // multiline={true}
                    ></TextInput>
                </View>
                <View style={styles.inputBar}>
                    <TextInput 
                    placeholder = "Age (optional)"
                    style={styles.input}
                    onChangeText={(text) => setAge(text)}
                    ></TextInput>
                </View>
                <View>
                    <MultiSelectScreen data={raceData} placeholderTxt={'Ethnicity/Race (Optional)'}></MultiSelectScreen>
                </View>
                <View>
                    <DropdownScreen data={levelData} placeholderTxt={'Set Expertise Level'}></DropdownScreen>
                </View>
            </View>
        </View>
        <View>
            <Text style={styles.privacyTxt}>Default Privacy Setting:</Text>
            <View style={[styles.row, styles.privacyOpt]}>
                <Text style={styles.privacyTxt}>Public</Text>
                <Text style={styles.privacyTxt}>Private</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.flexOne}>
            </View>
            <Pressable style={[styles.flexOne, styles.nextBttn]} onPress={() => {navigation.navigate('Onboarding2', {firstName:{firstName}, lastName:{lastName}, email:{email}, username:{username}, age:{age}, race:{race}, level:{level}})}}>
                <Text style={styles.nextBttnTxt}>Next</Text>
            </Pressable>
        </View>

    </View>
  );
};


export default Onboarding;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: palette.white,
    },
    title: {
        fontFamily: 'MondaBold',
        marginHorizontal: 10,
        fontSize: 24,
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
        backgroundColor: palette.green,
        borderRadius: 20,
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

});