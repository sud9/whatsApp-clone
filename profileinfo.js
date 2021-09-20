import React,{useState} from 'react'
import { Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import storage from '@react-native-firebase/storage'
import { launchImageLibrary } from 'react-native-image-picker';
import uuid from 'react-native-uuid';
export default function profileinfo({ navigation }) {
  const [image, setimage] = useState(null)
    const pickImageupload = () => {
        launchImageLibrary({ quality: 0.5 }, (fileobj) => {
           
            const uploadTask = storage().ref().child(`/userprofile/${Date.now()}`).putFile(fileobj)
            uploadTask.on('state_changed',
                (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                   if (progress==100) alert('image uploaded')
                  
                },
                (error) => {
                   alert('error uploading image')
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        setimage(downloadURL)
                    });
                }
            );
        })
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={50} behavior="padding" style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Text style={styles.txt}>Profile info</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ color: "grey" }}>
                    Plese provide your name and an optional profile photo
                </Text>
            </View>
            <TouchableOpacity onPress={pickImageupload} >
                <Avatar backgroundColor="lightgrey" activeOpacity={0.7} containerStyle={{ marginTop: 30 }} size={100} rounded icon={{ name: "camera", type: "font-awesome", color: "#fff", size: 40 }} />
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ borderBottomWidth: 1.5, borderBottomColor: "#075E54", marginTop: 20, width: "75%" }}>

                    <TextInput
                        placeholder="Type your name here"
                        placeholderTextColor="grey"
                        style={{ fontWeight: "300", fontSize: 15 }}
                    />


                </View>

                <SimpleLineIcons style={{ marginTop: 38, }} size={21} name="emotsmile" />
            </View>


            <View style={{ position: "absolute", bottom: 50, elevation: 5 }}>
                <Button labelStyle={{ fontWeight: "900", fontSize: 15, fontWeight: "700" }} contentStyle={{ backgroundColor: "#25D366" }} mode="contained" onPress={() => navigation.navigate('Home')}>NEXT</Button>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    txt: {
        color: "#075E54",
        fontSize: 20,
        fontWeight: "500"

    }
})