import React,{useState} from 'react'
import { View, Text,StatusBar,StyleSheet,Image,TouchableHighlight,Modal} from 'react-native'
import { Button } from 'react-native-paper'

export default function Welcomscreen({navigation}) {

 
   
    const img = require("../assets/image/ff.png")

    return (
        <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='grey'/>
      <Text style={styles.txt}>Welcome to WhatsApp</Text>
      <View style={{marginTop:50}}>
          <Image style={{width:280,height:280}} source={img}/>
      </View>
      <View style={{position:"absolute",bottom:200,alignItems:"center",alignContent:"center"}}>
         <View style={{flexDirection:"row"}}>
             <Text style={{color:"grey",fontSize:15}}>Read Our</Text>
             <TouchableHighlight style={{marginLeft:5}}  >
                  <Text style={{color:"#34B7F1",fontSize:15}}>Privacy Policy </Text>
                
             </TouchableHighlight>
             <Text style={{fontSize:15,color:"grey"}}>. </Text>
             <Text style={{fontSize:15,color:"grey"}}>Tap "Agree and continue" to</Text>
         </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <Text style={{fontSize:15,color:"grey"}}>accept the</Text>
            <TouchableHighlight style={{marginLeft:5}} underlayColor="#9FDCF9" onPress={()=>{}}>
                  <Text style={{color:"#34B7F1",fontSize:15}}>Terms of Service </Text>
             </TouchableHighlight>
            
            
            
            </View>
        </View>
          <View style={{position:"absolute",bottom:130,elevation:5}}>
          <Button labelStyle={{padding:2,fontWeight:"800",fontSize:15,}} contentStyle={{backgroundColor:"#25D366",paddingHorizontal:34}} mode="contained" onPress={() => navigation.navigate('Details')} >AGREE AND CONTINUE </Button>
          </View>
          <View style={{flexDirection:"column",position:"absolute",bottom:20}}>
                 <Text style={{textAlign:"center",color:"grey",fontSize:15}}>from</Text>
                 <Text style={{color:"#25D366",letterSpacing:2.8,fontSize:14,marginTop:8,fontWeight:'500'}}>FACEBOOK</Text>
             </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FEFCFC",
        alignItems:"center"
    },
    txt:{
        color:"#075E54",
        fontSize:35,
        marginTop:30,
        fontWeight:"500"
        
    }
})