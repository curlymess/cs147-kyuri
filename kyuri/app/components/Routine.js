import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image, CheckPost } from 'react-native';
import { Input } from 'react-native-elements';
import Top from './Top';
import { palette } from '../../assets/Themes/palette';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icons from '../../assets/Icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

const Routine = ({navigation}) => 
{
  const [routineName, setRoutineName] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (

<View style={styles.container}>
    <Top style={styles.head} navigation={navigation} />
    <View>

    <View style={styles.myProfileCard}>
        <View style={styles.profileTxt}>
          <Text style={[styles.myProfileTxt, styles.myProfileUsername]}>Routine Name</Text>
          <Text style={[styles.myProfileTxtName, styles.myProfileName]}>Winter Skin Saver</Text>

          <Text style={styles.myProfileTxt}>
            <Text style={styles.boldLabel}>Treats </Text>
            Acne, Dry Skin
          </Text>
          <Text style={styles.myProfileTxt}>              
            <Text style={styles.boldLabel}>Created </Text>
            12/07/22
          </Text>
          <Text style={styles.myProfileTxt}>              
            <Text style={styles.boldLabel}>Season </Text>
            Winter
          </Text>
          <Text style={styles.myProfileTxt}>              
            <Text style={styles.boldLabel}>Steps </Text>
            3
          </Text>
        </View>
      </View>

      <ScrollView style={styles.routine}>
        <View style={styles.routineCard}>
          <Image style={styles.productImg} source={Icons.product2} />
          <View>
            <View style={styles.row}>
              <Text style={styles.productInfo}>Step 1</Text>
              <Text style={[styles.productInfo, styles.boldLabel]}>Cleanse</Text>
            </View>
            <Text style={styles.routineCardTxt}>GoodMorning by Cosex</Text>
            <View style={styles.row}>
              <Ionicons name="caret-forward-outline" color={palette.darkBrown} size={20}></Ionicons>
              <Text style={styles.productInfo}>Click to expand for instructions</Text>
            </View>
          </View>
        </View>

        <View style={styles.routineCard}>
          <Image style={styles.productImg} source={Icons.product8} />
          <View>
            <View style={styles.row}>
              <Text style={styles.productInfo}>Step 2</Text>
              <Text style={[styles.productInfo, styles.boldLabel]}>Moisturize</Text>
            </View>
            <Text style={styles.routineCardTxt}>Ultra Moisturize by Cosex</Text>
            <View style={styles.row}>
              <Ionicons name="caret-forward-outline" color={palette.darkBrown} size={20}></Ionicons>
              <Text style={styles.productInfo}>Click to expand for instructions</Text>
            </View>
          </View>
        </View>

        <View style={styles.routineCard}>
          <Image style={styles.productImg} source={Icons.product13} />
          <View>
            <View style={styles.row}>
              <Text style={styles.productInfo}>Step 3</Text>
              <Text style={[styles.productInfo, styles.boldLabel]}>SPF</Text>
            </View>
            <Text style={styles.routineCardTxt}>Daylight Protection by Neogen</Text>
            <View style={styles.row}>
              <Ionicons name="caret-forward-outline" color={palette.darkBrown} size={20}></Ionicons>
              <Text style={styles.productInfo}>Click to expand for instructions</Text>
            </View>
          </View>
        </View>

        
      </ScrollView>

    </View>
</View>
  );
};

export default Routine;

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
      routineCardTxt: {
        fontFamily: 'MondaBold',
        fontSize: 16,
        paddingLeft: 10,
      },
      productImg: {
        resizeMode: 'contain',
        maxHeight: 100,
        width: 100,
        margin: 10,
      },
      myProfileName:{
        fontSize: 20,
      },
      myProfileCard: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: palette.darkBrown,
        justifyContent:'space-around',
        position: 'relative',
        top: -23,
        paddingTop: 5,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 1.61,
  
      },
      profileTxt: {
        width: '50%',
      },
      row: {
        flexDirection: 'row',
      },
      productInfo: {
        fontFamily: 'Monda',
        paddingLeft: 10,
      },
      myProfileTxt: {
        color: palette.white,
        fontSize: 12,
        fontFamily: 'Monda',
      },
      myProfileTxtName: {
        color: palette.white,
        fontSize: 24,
        fontFamily: 'MondaBold',
      },
      routineCard: {
        backgroundColor: palette.lightGreen,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
      },
      postsCard: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        flex: 1,
      },
      heading: {
        marginLeft: 10,
        marginBottom: 10,
        fontFamily: 'MondaBold',
        fontSize: 16,
        marginTop: 40,
      },  
      routineTxt: {
        fontFamily: 'MondaBold',
        fontSize: 18,
      },
      viewRoutineTxt: {
        fontFamily: 'Monda',
        alignSelf: 'center',
        color: palette.blue,
        textDecorationLine: 'underline',
      },
      boldLabel: {
        fontFamily: 'MondaBold',
      },
      myProfileUsername: {
        marginTop: 0,
        position: 'relative',
      },
      myProfilePic: {
        height: 150,
        width: 150,
        position: 'relative',
      },
      spacer: {
          height: 150,
          width: 150,  
      },
      myProfilePicWrapper: {
        position: 'absolute',
        overflow: 'visible',
        bottom: -6,
      },
    

});