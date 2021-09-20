import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomescreen from './screen/Welcomscreen';
import Loginscreen  from './screen/Loginscreen';
import Otpscreen from "./screen/otpscreen"
import Homescreen from "./screen/Homescreen"
import Profilescreen from "./screen/profileinfo"
import Chat from "./screen/Userchat"
import Countrypick from './screen/Countrypicker'
import Splashscreen from './screen/SplashScreen';
export default function App() {

  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name ="Splash_screen" options={{headerShown:false}} component={Splashscreen}/>
        <AppStack.Screen name ="Login" options={{headerShown:false}} component={Welcomescreen}/>
        <AppStack.Screen name="Details" options={{headerShown:false}} component={Loginscreen}/>
        <AppStack.Screen name="OTP" options={{headerShown:false}} component={Otpscreen}/>
        <AppStack.Screen name="Profile" options={{headerShown:false}} component={Profilescreen}/>
        <AppStack.Screen name="Home" options={{headerShown:false}} component={Homescreen}/>
        <AppStack.Screen name="Chat"  component={Chat} options={({route})=>({title:route.params.username})}/>
        <AppStack.Screen name="choosecountry" options={{headerShown:false}}  component={Countrypick}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})