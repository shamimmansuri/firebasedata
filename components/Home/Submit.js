import React, { useState } from "react";
import UserName from "./UserName";
import Phone from "./Phone";
import Address from "./Address";
import firebase from "@react-native-firebase/auth";
import firebaseDatabase from "@react-native-firebase/database";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, StatusBar,
} from "react-native";

const Submit = ({ navigation, route}) => {
    const{username, userphone, useraddress} = route.params;
    console.log("name", username);
    console.log("phone", userphone);
    console.log("Address", useraddress);

    const signIn = () => {
        console.log("on change values", username);
        // if (checkIfEmpty() && matchPasswords()) {
        // setState({ errorMessage: '' });
        // setState({ loadingVisible: true });
        // return;
        firebase()
            .createUserWithEmailAndPassword(username, userphone)
            .then(user => {
                console.log("response", user);
                navigation.navigate('TanxForSignUp');
                firebaseDatabase()
                    .ref('usersinfo/' + firebase().currentUser.uid + '/')
                    .set({
                        username: username,
                        userphone: userphone,
                        useraddress: useraddress,
                        // city: this.state.city,
                        // stateTxt: this.state.stateTxt,
                        // rating: 0,
                        // numReviews: 0,
                        // userName: this.state.userName,
                    });
            })
            .catch(error => {
                // setState({ loadingVisible: false });
                // setState({ errorMessage: error.message });
                console.log("what error", error);
            })
            .then(() => {
                // props.navigation.navigate('Login');
                // alert()
            });

        // }
    }


    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <Text style={styles.txtinput}>Submit Data!!</Text>

            <Text>My name:-  {username}{'\n'}My Number:- {userphone}{'\n'}My Address:- {useraddress}</Text>

            <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        width: 90,
        height: 90,
        borderRadius: 30,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
    txtinput: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,

    },
});
export default Submit;