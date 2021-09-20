import React from 'react'
import { View, Text,Image } from 'react-native'


export default function splashscreen({navigation}) {
    setTimeout(()=>{
      navigation.navigate('Login')
    },250);
    const logo = require('../assets/image/whatsapp.jpg')
    return (
       
           <View style={{alignItems:"center",flex:1,marginTop:15}}>
           <Image style={{height:90,width:90,marginTop:120}}source={logo}/>
             <View style={{flexDirection:"column",position:"absolute",bottom:50}}>
                 <Text style={{textAlign:"center",color:"grey",fontSize:15}}>from</Text>
                 <Text style={{color:"#25D366",letterSpacing:2.8,fontSize:14,marginTop:8,fontWeight:'500'}}>FACEBOOK</Text>
             </View>
           </View>
         
       
       
    )
}
