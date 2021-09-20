import React from 'react'
import { View, Text, Image, FlatList, TouchableHighlight,StatusBar} from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import Fontisto from "react-native-vector-icons/Fontisto"
export default function Countrypicker({navigation}) {
    const Country = [
        {
            id:'1',
            image:require("../assets/image/country flag/india.png"),
            countryname:"India",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'2',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Cyprus",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'3',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Bulgaria",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'4',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Argentina",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'5',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Canada",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'6',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Brazil",
            countrycode:"+91",
            language:"हिंदी"
        },
      
        {
            id:'7',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Armenia",
            countrycode:"+91",
            language:"हिंदी"
        },
         {
            id:'8',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Germany",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'9',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Algeria",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'10',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Colombia",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'11',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Bangladesh",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'12',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Russia",
            countrycode:"+91",
            language:"हिंदी"
        },
        
        
        {
            id:'13',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Australia",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'14',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Pakistan",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'15',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Afghanistan",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'16',
            image:require("../assets/image/country flag/india.png"),
            countryname:"South Africa",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'17',
            image:require("../assets/image/country flag/india.png"),
            countryname:"Albenia",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'18',
            image:require("../assets/image/country flag/india.png"),
            countryname:"USA",
            countrycode:"+91",
            language:"हिंदी"
        },
        {
            id:'19',
            image:require("../assets/image/country flag/india.png"),
            countryname:"United Kingdom",
            countrycode:"+91",
            language:"हिंदी"
        },
        
    ]
    return (

      <View>
            <StatusBar barStyle="light-content" backgroundColor="#023832"/>
          <View style={{flexDirection:'row',padding:16,borderBottomWidth:0.5,borderBottomColor:"#C1C6C6",backgroundColor:"white",elevation:5}}>
              <TouchableHighlight  underlayColor="red" onpress={()=>{}}>
              <Feather onPress={() => navigation.goBack()} color="#128C7E" name="arrow-left" size={26}/>
              </TouchableHighlight>
            
              <Text style={{fontSize:20,marginLeft:30,fontWeight:"500",color:"#128C7E"}}>Choose a country</Text>
              <View style={{position:'absolute',right:18,paddingTop:21}}>
              <Fontisto  color="#128C7E" size={20} name="search"/>
              </View>
          </View>
        <FlatList
        data={Country}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
            <View  style={{flexDirection:"row",margin:18,borderBottomWidth:0.3,paddingBottom:20,borderBottomColor:"#C1C6C6"}}>
              
                <Image style={{width:20,height:15,marginTop:5}} source={(require('../assets/image/flag.jpg'))}/>
              
                <Text style={{fontWeight:'500',fontSize:18,marginLeft:20}}>{item.countryname}</Text>
                <Text style={{fontSize:18,fontWeight:"700",color:"#555F5D",position:"absolute",right:30}}>{item.countrycode}</Text>
            </View>
        )}
        />
      </View>

    )
}
