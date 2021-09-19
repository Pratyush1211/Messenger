import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';

export default function ChatScreen({ navigation, route }) {


    const [input, setinput] = useState("")


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            // headerStyle:{backgroundColor:'#fff'},

            headerTitle: () => (
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start'

                }}>
                    <Avatar
                        rounded
                        size={40}

                        source={{
                            uri:
                                "https://cdn-icons-png.flaticon.com/512/906/906362.png"
                        }}
                    />
                    <Text style={{ color: "white", marginLeft: 10, fontWeight: '800', fontSize: 22 }}>{route.params.chatName}</Text>
                </View>
            ),
            // headerLeft:()=>(
            //     <TouchableOpacity>
            //         <AntDesign name="<LeftOutlined/> " size={24} color="white"/>
            //     </TouchableOpacity>
            // )
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="phone" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            )



        });


    }, [navigation]);

    const sendMessage = () => {

    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
               
                style={styles.container}
                
                >

                <>
                    <ScrollView>
                        {/* chat */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder="Message" style={styles.textInput}
                            value={input}
                            onChangeText={(text) => setinput(text)} />
                        <TouchableOpacity onPress={sendMessage}>
                            <FontAwesome name="paper-plane" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </>

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    footer: {
        flexDirection: 'row',
        width:'100%',
        alignItems:'center',
        padding:15
    },
    textInput: {
        bottom:0,
        height:50,
        flex:1,
        marginRight:15,
        borderColor:'transparent',
        borderWidth:1,
        padding:10,
        color:'grey',
        borderRadius:30,
        backgroundColor:'#ECECEC'

    }
})
