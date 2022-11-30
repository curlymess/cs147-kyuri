import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { Alert, StyleSheet, View, Text, Image } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'
import { palette } from '../../assets/Themes/palette'
import Icons from '../../assets/Icons';
import { Pressable } from 'react-native';


export default function Auth( {setIsLoggedIn} ) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if(!error) setIsLoggedIn(true)
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if(!error) setIsLoggedIn(true)
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  const [fontsLoaded] = useFonts({
    Rosmatika: require('../../assets/Fonts/RosmatikaRegular-BWA45.ttf'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Icons.logo} />
        <Text style={styles.logoTxt}>Kyuri</Text>
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <Pressable style={[styles.verticallySpaced, styles.mt20, styles.bttn]} disabled={loading} onPress={() => signInWithEmail()}>
        <Text style={styles.bttnTxt}>Sign In</Text>
      </Pressable>
      <Pressable style={[styles.verticallySpaced, styles.bttn]} disabled={loading} onPress={() => signUpWithEmail()}>
        <Text style={styles.bttnTxt}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: palette.white,
    height: "100%",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
      resizeMode: 'contain',
      maxHeight: 55,
      maxWidth: 55,
  },
  logoTxt: {
    fontSize: 50,
    color: palette.green,
    fontFamily: 'Rosmatika',
    paddingTop: 10,
    marginTop: 4,
    marginLeft: 4,
  },
  bttn: {
    backgroundColor: palette.green,
    alignItems: 'center',
    marginVertical: 10,
  },
  bttnTxt: {
    padding: 10,
    color: palette.white,
    fontSize: 20,
  },

})

