import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function otpscreen({ navigation }) {
    const [number, setNumber] = useState('');

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Text style={styles.txt}>Enter your phone number</Text>
            </View>
            <View style={{ position: "absolute", marginTop: 20, right: 10 }}>
                <TouchableHighlight underlayColor="#BAC3C6" onPress={() => { }} style={{ borderRadius: 20 }}>
                    <Entypo style={{ alignContent: "center", padding: 10 }} color="#595D5F" size={20} name="dots-three-vertical" />
                </TouchableHighlight>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 15 }}>Waiting to automatically detect an SMS sent to </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Text>+91 4578982546</Text>


                <TouchableHighlight style={{ marginLeft: 5 }} underlayColor="#9FDCF9" onPress={() => { }}>
                    <Text style={{ color: "#06A0D4", fontSize: 14, fontWeight: "600" }}>Wrong number?</Text>
                </TouchableHighlight>




            </View>
            <OTPInputView
                onCodeChanged={(value) => setNumber(value)} value={number}
                style={{ width: '55%', height: 200 }}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                }}
            />

            <View style={{ position: "absolute", bottom: 50, elevation: 5 }}>
                <Button disabled={number.length == 6 ? false : true} labelStyle={{ fontWeight: "900", fontSize: 15, fontWeight: "700" }} contentStyle={{ backgroundColor:number.length ==6? "#25D366":'grey' }} mode="contained" onPress={() => navigation.navigate('Profile')}>NEXT</Button>
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

    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "green",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 2,
        borderBottomWidth: 1,
        color: "black",

    },

    underlineStyleHighLighted: {
        borderColor: "red",
    },
})
