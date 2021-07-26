import React, { useState } from "react";
import UserName from "./UserName";
import SignUp from "../SignUp/SignUp";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, StatusBar,
} from "react-native";

const Address = ({ navigation, route }) => {
    const [address, setAddress] = useState("");
    const{username, userphone} = route.params;
    console.log("name", username);
    console.log("phone", userphone);
    console.log("Address", address);
  return (
    <View style={styles.container}>
      <Text>My Address page</Text>
      <Text>My name:-  {username}{'\n'} My Number:- {userphone}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address"
          placeholderTextColor="#003f5c"
          onChangeText={userAddress => setAddress(userAddress)}
          value={address}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Submit', {username: username, userphone: userphone, useraddress: address})}>
        <Text style={styles.loginText}>Submitted</Text>
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
    borderRadius:30,
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
export default Address;