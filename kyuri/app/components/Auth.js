import React, { useState } from 'react'
import { Alert, StyleSheet, View, Text, Image } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'
import { palette } from '../../assets/Themes/palette'
import Icons from '../../assets/Icons';
import { Pressable } from 'react-native';
import Onboarding from './Onboarding'


export default function Auth( {setIsLoggedIn, navigation} ) {
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

  return (
    <View style={authStyles.container}>
      <View style={authStyles.logoContainer}>
        <Image style={authStyles.logo} source={Icons.logo} />
        <Text style={authStyles.logoTxt}>Kyuri</Text>
      </View>
      <View style={[authStyles.verticallySpaced, authStyles.mt20]}>
        <Input
          rightIcon={{ type: 'font-awesome', name: 'envelope', color: palette.lightBrown, size: 20, marginRight: 15,}}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          style={authStyles.input}
          inputContainerStyle={authStyles.inputContainer}
          labelStyle={authStyles.labelStyle}
        />
      </View>
      <View style={authStyles.verticallySpaced}>
        <Input
          rightIcon={{ type: 'font-awesome', name: 'lock', color: palette.lightBrown, size: 26, marginRight: 15, }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          style={authStyles.input}
          inputContainerStyle={authStyles.inputContainer}
          labelStyle={authStyles.labelStyle}
        />
      </View>
      <Pressable style={[authStyles.verticallySpaced, authStyles.mt20, authStyles.bttn]} disabled={loading} onPress={() => signInWithEmail()}>
        <Text style={authStyles.bttnTxt}>Sign In</Text>
      </Pressable>
      <Pressable style={[authStyles.verticallySpaced, authStyles.signUpBttn]} disabled={loading} onPress={() => {navigation.navigate('Onboarding')}}>
        <Text style={authStyles.signUpTxt}>Don't have an account? Sign Up!</Text>
      </Pressable>
    </View>
  )
}

const authStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.green,
    height: "100%",
    flex: 1,
    justifyContent: 'center',
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
    color: palette.white,
    fontFamily: 'Rosmatika',
    paddingTop: 10,
    marginTop: 4,
    marginLeft: 4,
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
  input: {
    fontFamily: 'Monda',
    paddingHorizontal: 10,
  },
  inputContainer: {
    borderBottomWidth: 3,
    borderWidth: 3,
    borderColor: palette.darkBrown,
    borderRadius: 8,
    backgroundColor: palette.white,
  },
  labelStyle: {
    marginBottom: 5,
  }
})

