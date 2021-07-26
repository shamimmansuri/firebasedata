import React, { useState } from "react";
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

const SignUp = ({ navigation }) => {
  const [regname, setName] = useState("");
  const [regemail, setEmail] = useState("");
  const [regpassword, setPassword] = useState("");

  const signIn = () => {
    console.log("on change values", regname);
    // if (checkIfEmpty() && matchPasswords()) {
      // setState({ errorMessage: '' });
      // setState({ loadingVisible: true });
      // return;
      firebase()
        .createUserWithEmailAndPassword(regemail, regpassword)
        .then(user => {
          console.log("response", user);
          navigation.navigate('TanxForSignUp');
          firebaseDatabase()
            .ref('users/' + firebase().currentUser.uid + '/')
            .set({
              name: regname,
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
      <Image style={styles.image} source={{ uri: 'https://image.pngaaa.com/934/4051934-middle.png' }} />

      <StatusBar style="auto" />
      <Text style={styles.txtinput}>SignUp Page!!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={regname}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={regemail}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={regpassword}
        />
      </View>

      {/* <TouchableOpacity onPress={this.signIn}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}

      {/* <Button title="press me" onPress={myBtn} /> */}
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
export default SignUp;