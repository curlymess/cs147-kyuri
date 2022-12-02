import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { Input } from 'react-native-elements';
import Top from './Top';
import { palette } from '../../assets/Themes/palette';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icons from '../../assets/Icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

const Routine = ({navigation}) => 
{
  const [routineName, setRoutineName] = useState('')
  return (

<View style={styles.container}>
    <Top style={styles.head} navigation={navigation} />
    <View>
        <Input
          // label="Routine Name"
          onChangeText={(text) => setEmail(text)}
          value={routineName}
          placeholder="give your routine a name!"
          autoCapitalize={'words'}
          style={styles.inputBox}
        />
      <Text style={styles.instructionTxt}>Add some products to your routine!</Text>
      <ScrollView>
        <View style={styles.routineCard}>
          <Image source={Icons.product1} />
          <Text style={styles.routineCardTxt}>Product Name</Text>
        </View>
        <View style={styles.routineCard}>
          <Image source={Icons.product1} />
          <Text style={styles.routineCardTxt}>Product Name</Text>
        </View>
        <View style={styles.routineCard}>
          <Image source={Icons.product1} />
          <Text style={styles.routineCardTxt}>Product Name</Text>
        </View>
      </ScrollView>
        
      


    </View>
</View>
  );
};

export default Routine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
      },
      head: {
        flex: 1,
      },
      routineCard: {
        backgroundColor: palette.cream,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        margin: 10,
      },
      routineCardTxt: {
        padding: 10,
        fontFamily: 'MondaBold',
        fontSize: 20,
      },
      instructionTxt: {
        fontFamily: 'Monda',
        padding: 10,
      },
      inputBox: {
        marginTop: 10,
        fontFamily: 'Monda',
      },
      
    

});