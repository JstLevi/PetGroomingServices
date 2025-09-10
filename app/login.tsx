import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useRouter } from "expo-router";

const login = () => {

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/(tabs)/home")
  }

  return (
    <View style={styles.container}>
      

      <View style={styles.login_container}>
        <Text style={styles.loginText}>Log In</Text>
        <View style={styles.underline}></View>
      </View>

      <View style={styles.cat_dogContainer}>
        <Image
        source={require("../assets/images/vector.png")}
        style={styles.catdogImage}
        />
      </View>




      <View style={styles.EmailContainerText}>
        <Text style={styles.EmailText}>Username/Email Address</Text>
      </View>

      <View style={styles.EmailInputContainer}>
        <Feather 
        name='mail'
        size= {30}
        color="292D32"
        style={styles.EmailIcon}
        />
        <TextInput
        style={styles.EmailAddress}
        placeholder="Enter Username/Email Address"
        keyboardType='email-address'
        />
      </View>



      <View style={styles.passwordContainerText}>
        <Text style={styles.passwordText}>Enter Password</Text>
      </View>

      <View style={styles.passwordInputContainer}>
        <Feather 
        name='lock'
        size= {30}
        color="292D32"
        style={styles.passwordIcon}
        />
        <TextInput
        style={styles.password}
        placeholder="Enter Password"
        secureTextEntry={true}
        />
      </View>


      

     

      <TouchableOpacity style={styles.loginBotton} onPress={handleLogin}>
        <Text style={styles.loginTextBotton}>Log In</Text>
      </TouchableOpacity>


      <View style={styles.noticeloginContainer}> 
        <Text style={styles.noticelogin}> Don't have an Account?
        <Link href="/sign_up">
        <Text style={styles.proceedSignup}> Sign up</Text>
        </Link>
        </Text> 
        
     </View>


  

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },


  login_container: {
    //blank
  },
  loginText: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 50,
    fontWeight: "500",
    fontFamily: "poppins",
    color: "#1E3A8A",
  },
  underline: {
    width: 250,     
    height: 4,   
    backgroundColor: "#1E3A8A", 
    marginTop: 4,   
    alignSelf: "center",
  },

  cat_dogContainer: {
    backgroundColor: "#1E3A8A",
    marginTop: 35, 
    width: 377,
    height: 121,
    alignSelf: "center",
    borderRadius: 10,
  },
  catdogImage: {
    alignSelf: "center",
    marginTop: -30,
  },


  UsernameContainerText: {
    //blank
    marginTop: 10,
  },
  UsernameText: {
    marginHorizontal: 20,

  },
  


  EmailContainerText: {
    marginTop: 60,
  },

  EmailText: {
    marginHorizontal: 20,

  },
  EmailInputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: 376,
    height: 56,
    borderRadius: 12,
    elevation: 9,
    borderWidth:1,
  },
  EmailIcon: {
    marginLeft: 11,
    marginRight: 9,

  },
  EmailAddress:{
    width: 320,
    //backgroundColor: "blue"
  },



  passwordContainerText: {
    marginTop: 20,
  },

  passwordText: {
    marginHorizontal: 20,
  },

  passwordInputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: 376,
    height: 56,
    borderRadius: 12,
    elevation: 9,
    borderWidth:1,  
  },

  passwordIcon: {
    marginLeft: 11,
    marginRight: 9,

  },
  password:{
    width: 320,
    //backgroundColor: "blue"
  },




  loginBotton: {
    backgroundColor: "#4A90E2",
    marginHorizontal: 40,
    borderRadius: 11,
    marginTop: 50,
    

  },
  loginTextBotton: {
    textAlign: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: "white",
    fontWeight: "400",
  },


  noticeloginContainer: {
    alignItems: "center",
    paddingVertical: 20,

  },
  noticelogin: {

  },

  proceedSignup: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  



})



export default login