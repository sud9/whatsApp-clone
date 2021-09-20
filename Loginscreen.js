import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import { Button } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Picker } from '@react-native-picker/picker';
import { Menu, MenuItem } from 'react-native-material-menu';
import auth from '@react-native-firebase/auth';

export default function Loginscreen({ navigation }) {
  
    const [confirm, setconfirm] = useState('null');
    
    const [number,setNumber ] = useState('');

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

const signin = async () =>{
    const confirmation = await auth().signInWithPhoneNumber('+91' +number);
    if (confirmation){
        setconfirm(confirmation);
        navigation.navigate('OTP',{'confirm':confirm})
    }
}
   

    return (
        <View style={styles.container}>




            <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Text style={styles.txt}>Enter your phone number</Text>
            </View>
            <View style={{ position: "absolute", marginTop: 20, right: 10 }}>

                <Menu
                     style={{position:"absolute"}}
                    visible={visible}
                    anchor={
                        <TouchableHighlight style={{ borderRadius: 20 }} underlayColor="#9B9A99" onPress={showMenu}>
                            <Entypo style={{ alignContent: "center", padding: 10 }} color="#595D5F" size={20} name="dots-three-vertical" />
                        </TouchableHighlight>
                    }
                        onRequestClose={hideMenu}
                >

                    <MenuItem onPress={hideMenu}>Help</MenuItem>
                 
                </Menu>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 15 }}> WhatsApp will send an SMS message to verify your </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Text>phone number.</Text>

                <TouchableHighlight style={{ marginLeft: 5 }} underlayColor="#9FDCF9" >
                    <Text style={{ color: "#34B7F1", fontSize: 14 }}>What's my number?</Text>
                </TouchableHighlight>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('choosecountry')} style={{ flexDirection: "row", justifyContent: 'space-around' }}>

                <View style={{ borderBottomWidth: 1, width: "60%", borderBottomColor: "#075E54", alignItems: "center", }}>
                    <Text style={{ fontSize: 16, marginTop: 25 }}>Choose a country</Text>
                </View>

                <Picker dropdownIconColor="#075E54" style={{ marginTop: 12, marginLeft: 10 }}></Picker>


            </TouchableOpacity>

            <KeyboardAvoidingView style={{ flexDirection: "row", justifyContent: "space-around", paddingBottom: -120 }} behavior="height">
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#075E54", flexDirection: "row", width: "12%", marginBottom: 20 }}>
                    <AntDesign style={{ marginTop: 50 }} size={12} name="plus" />
                    <TextInput style={{ fontWeight: "400", paddingLeft: 10, marginTop: 30, fontSize: 16 }} keyboardType="number-pad" maxLength={3} />
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#075E54", width: "40%", marginLeft: 10, marginBottom: 20 }}>
                    <TextInput onChangeText={(value)=>setNumber(value)} value={number} style={{ marginTop: 30, fontWeight: "400", fontSize: 16 }} keyboardType="phone-pad" placeholder='phone number' maxLength={10} />
                </View>
            </KeyboardAvoidingView>


            <Text style={{ marginTop: 20 }}>Carrier SMS carges may apply</Text>

            <View style={{ position: "absolute", bottom: 50, elevation: 5 }}  >
                <Button disabled={number.length == 10 ? false:true} labelStyle={{ fontWeight: "900", fontSize: 15, fontWeight: "700" }} contentStyle={{ backgroundColor:number.length ==10 ? 'green' : 'grey' }} mode="contained" onPress={signin} >NEXT</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    txt: {
        color: "#075E54",
        fontSize: 20,
        fontWeight: "500"

    }
})





