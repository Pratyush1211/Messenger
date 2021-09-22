import React, { useState ,useEffect} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((authUser)=>{
           if(authUser){
               navigation.replace("Home")
           }
    
    });

    return unsubscribe;
    }, []);

    const SignIn = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .catch(error=>alert("Register on App first or enter the credential carefully "));
        console.log(auth)


    };

    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.Container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={SignIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={SignIn} title="Login" />
            <Button containerStyle={styles.button} onPress={()=>navigation.navigate("Register")} type="outline" title="Register" />
            <View style={{ height: 50 }} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,

    },
});
