
import React, { useState } from "react";
import firebase from '@react-native-firebase/auth';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  TextInput,
  Button,
  TouchableOpacity, StatusBar,
} from "react-native";
 
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("on change values");
    // this.setState({errorMessage: ''});
    // this.setState({loadingVisible: true});
    firebase()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(firebase().currentUser.uid);
        
        console.log('User logged-in successfully!')
        navigation.navigate('TanxForLoginUp');
      })
      .catch(error => {
        console.log("what error", error);
        // this.setState({loadingVisible: false});
        // this.setState({
        //   errorMessage: 'You have entered an invalid username or password',
        // });
      });
  };
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://image.pngaaa.com/934/4051934-middle.png'}} />
 
      <StatusBar style="auto" />
    <Text style={styles.txtinput}>Login Page!!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
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
  txtinput:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20,

  },
});