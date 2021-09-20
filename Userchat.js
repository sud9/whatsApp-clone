import React,{ useState, useCallback, useEffect } from 'react'
import { View, Text } from 'react-native'
import { GiftedChat,Bubble,Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
export default function Userchat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello Developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
             
        },
        {
            _id: 2,
            text: 'Hello World',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
               
          },
       
      ])
    }, [])
  


    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

   
 
    const renderSend =(props) =>{
        return(
            <Send {...props}>
             <View>
                 <MaterialCommunityIcons style={{marginBottom:5}} name='send-circle' size={32} color="blue"/>
             </View>
            </Send>
        )
    }

   
    const renderBubble = (props) =>{
        return(
        <Bubble
         {...props}
         wrapperStyle={{
             right:{
                 backgroundColor:"blue"
             }
         }}
         textStyle={{
             right:{
                 color:"white"
             }
         }}
        />
        );
    };
    const scrollToBottomComponent =() =>{
       return(
          <FontAwesome name="angle-double-down" size={22} color="#333"/>
       )
    }

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        scrollToBottom
        scrollToBottomComponent={ scrollToBottomComponent}
        renderSend={renderSend}
      />
    )
}
