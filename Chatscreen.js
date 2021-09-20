import React from 'react'
import { View, Text,FlatList,StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Data from "../data/Data"
import { Avatar } from 'react-native-paper';

export default function Chatscreen({navigation}) {
    const Messages = [
        {
            id: '1',
            username: 'Menu Phaphrana',
            userImg: require('../assets/image/girl1.jpg'),
            messageTime: '8 min ago',
            messageText: 'Hey there you are using whatsapp',
            time: "10:40 am",
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '2',
            username: 'Rajesh Gosai',
            userImg: require('../assets/image/boy4.jpeg'),
            messageTime: '6 min ago',
            messageText: 'Hey there you are using whatsapp',
            time: '9:30 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '3',
            username: 'Alka Gupta',
            userImg: require('../assets/image/girl1.jpg'),
            messageTime: '2 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'4:30 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '4',
            username: 'Rajnish Pandey',
            userImg: require('../assets/image/boy4.jpeg'),
            messageTime: '5 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'8:30am',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '5',
            username: 'karan Wahi',
            userImg: require('../assets/image/boy3.jpg'),
            messageTime: '2 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'12:20 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '6',
            username: 'Lalit Gadana',
            userImg: require('../assets/image/user1.jpeg'),
            messageTime: '2 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'12:20 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '7',
            username: 'Suresh Wadhwa',
            userImg: require('../assets/image/user2.jpeg'),
            messageTime: '2 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'12:20 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '8',
            username: 'Tushar Agnihotri',
            userImg: require('../assets/image/user3.jpeg'),
            messageTime: '2 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'12:20 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
        {
            id: '9',
            username: 'surender Vats',
            userImg: require('../assets/image/user4.jpeg'),
            messageTime: '2 min ago',
            messageText: 'Hey there you are using whatsapp',
            time:'12:20 pm',
            txt:'Messges and calls are end-to-end encrypted'
        },
    ]
    return (
        <View>
           <FlatList
           data={Messages}
           keyExtractor={item=>item.id}
           renderItem ={({item})=>(
               <TouchableOpacity onPress={()=>navigation.navigate('Chat',{username:item.username})} style={{flexDirection:"row",padding:12}}>
                  <Avatar.Image  size={60} source={item.userImg} />
                  <View>
                  <Text style={{fontWeight:"500",fontSize:18,marginLeft:18}}>{item.username}</Text>
                   <Text numberOfLines={0} style={{textAlign:"justify",marginHorizontal:18,marginTop:8,fontSize:16,color:"grey"}}>{item.txt}</Text>
                  </View>
                  
                  <View style={{position:"absolute",right:12,top:15}}>
                  <Text style={{color:"grey"}}>{item.time}</Text>
                  </View>
               
               </TouchableOpacity>
           )}
           /> 
    </View>
    )
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center"
  }
})