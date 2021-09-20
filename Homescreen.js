import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableHighlight } from 'react-native'

import Fontisto from "react-native-vector-icons/Fontisto"
import Entypo from "react-native-vector-icons/Entypo"

import Chatscreen from "./Chatscreen"
import Statusscreen from "./statsscreen"
import Call from "./callscreen"
import { Menu, MenuItem } from 'react-native-material-menu';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchBar } from 'react-native-elements';


export default function Homescreen({ navigation }) {

    const [searchbar, setsearchbar] = useState(SearchBar);


    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const Tab = createMaterialTopTabNavigator();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#023832" />
            
            <View style={styles.header}>
                <Text style={{ fontSize: 22, color: "white", fontWeight: "500", marginLeft: 12 }}>WhatsApp</Text>
                <View style={{ position: 'absolute', right: 15, flexDirection: "row", justifyContent: "space-between", paddingTop: 19 }}>

                    <TouchableHighlight underlayColor="#036257" onPress={() =>{}} style={{
                        borderRadius: 16, right: 12, height: 32, width: 32, padding: 6
                    }}>
                        <Fontisto style={{}} color="white" size={21} name="search" />

                    </TouchableHighlight>

                    <Menu

                        style={{ backgroundColor: "white", paddingRight: 5, width: "48%", marginLeft: 20 }}

                        visible={visible}
                        anchor={<TouchableHighlight onPress={showMenu} underlayColor="#036257" style={{
                            borderRadius: 16, height: 32, width: 32, padding: 6
                        }}>
                            <Entypo color="white" size={20} name="dots-three-vertical" />
                        </TouchableHighlight>}
                        onRequestClose={hideMenu}
                    >
                        <MenuItem pressColor="#9B9A99" textStyle={{ fontSize: 16, fontWeight: "400" }} onPress={hideMenu}>New group</MenuItem>
                        <MenuItem pressColor="#9B9A99" textStyle={{ fontSize: 16, fontWeight: "400" }} onPress={hideMenu}>New broadcast</MenuItem>
                        <MenuItem pressColor="#9B9A99" textStyle={{ fontSize: 16, fontWeight: "400" }} onPress={hideMenu}>Linked devices</MenuItem>
                        <MenuItem pressColor="#9B9A99" textStyle={{ fontSize: 16, fontWeight: "400" }} onPress={hideMenu}>Starred messages</MenuItem>
                        <MenuItem pressColor="#9B9A99" textStyle={{ fontSize: 16, fontWeight: "400" }} onPress={hideMenu}>Payments</MenuItem>
                        <MenuItem pressColor="#9B9A99" textStyle={{ fontSize: 16, fontWeight: "400" }} onPress={hideMenu}>Settings</MenuItem>


                    </Menu>


                </View>

            </View>


            <Tab.Navigator screenOptions={{ tabBarPressOpacity: 0.5, tabBarPressColor: "white", tabBarStyle: { backgroundColor: '#044039' }, tabBarIndicatorStyle: { color: "white" }, tabBarLabelStyle: { fontSize: 14, fontWeight: "600" }, tabBarActiveTintColor: "white", tabBarIndicatorStyle: { width: 90, alignContent: 'center', borderWidth: 1.5, borderColor: "white", marginHorizontal: 18 } }} >

                <Tab.Screen name="CHATS" component={Chatscreen} />
                <Tab.Screen name="STATUS" component={Statusscreen} />
                <Tab.Screen name="CALLS" component={Call} />
            </Tab.Navigator>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#044039",
        height: 70,
        paddingTop: 15
    }
})