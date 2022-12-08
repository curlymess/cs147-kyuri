import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, CheckPost } from 'react-native';
import { Input } from 'react-native-elements';
import Top from './Top';
import { palette } from '../../assets/Themes/palette';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icons from '../../assets/Icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

const DraftRoutine = ({navigation}) => 
{
  const [routineName, setRoutineName] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (

<View style={styles.container}>
    <Top style={styles.head} navigation={navigation} />
    <View>
        <Input
          // label="Routine Name"
          onChangeText={(text) => setRoutineName(text)}
          value={routineName}
          placeholder="give your routine a name!"
          autoCapitalize={'words'}
          style={styles.inputBox}
        />
      <Text style={styles.instructionTxt}>Add some products to your routine!</Text>
      <ScrollView style={styles.routine}>
        <View style={styles.routineCard}>
          <Image style={styles.productImg} source={require('../../assets/Icons/product0.png')} />
          <Text style={styles.routineCardTxt}>Product Name</Text>
        </View>
        <View style={styles.routineCard}>
          <Image style={styles.productImg} source={require('../../assets/Icons/product0.png')} />
          <Text style={styles.routineCardTxt}>Product Name</Text>
        </View>
        <View style={styles.routineCard}>
          <Image style={styles.productImg} source={require('../../assets/Icons/product0.png')} />
          <Text style={styles.routineCardTxt}>Product Name</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.makeRoutineBttn} onPress={() => navigation.navigate('Profile')} >
        <Text style={styles.makeRoutineTxt}>Make Routine!</Text>
      </Pressable>

    </View>
</View>
  );
};

export default DraftRoutine;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        height: '100%',
      },
      head: {
        flex: 1,
      },
      routine: {
        height: '70%',
        width: '100%',
        marginBottom: 5,
      },
      routineCard: {
        backgroundColor: palette.cream,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        maxHeight: '30%',
      },
      routineCardTxt: {
        padding: 10,
        fontFamily: 'MondaBold',
        fontSize: 20,
      },
      instructionTxt: {
        fontFamily: 'MondaBold',
        alignSelf: 'center',
        fontSize: 16,
      },
      inputBox: {
        marginTop: 10,
        fontFamily: 'Monda',
      },
      makeRoutineTxt: {
        fontFamily: 'MondaBold',
        alignSelf: 'center',
      },
      makeRoutineBttn: {
        backgroundColor: palette.green,
        borderRadius: 20,
      },
      productImg: {
        resizeMode: 'contain',
        maxHeight: 100,
        width: 100,
      },
    

});