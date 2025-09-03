import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>

      </View>

      <View style={styles.signup_container}>
        <Text style={styles.signupText}>Sign Up</Text>
        <View style={styles.underline}></View>
      </View>

      <View style={styles.cat_dogContainer}>
        <Image
        source={require("../assets/images/vector.png")}
        style={styles.catdogImage}
        />
      </View>


      <View style={styles.UsernameContainerText}>
        <Text style={styles.UsernameText}>Username</Text>
      </View>

      <View style={styles.usernameInputContainer}>
        <Feather 
        name='user'
        size= {30}
        color="292D32"
        style={styles.usernameIcon}
        />
        <TextInput
        style={styles.username}
        placeholder="Enter Username"
        />
      </View>



      <View style={styles.EmailContainerText}>
        <Text style={styles.EmailText}>Email Address</Text>
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
        placeholder="Enter Email Address"
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


      <View style={styles.ConfirmpasswordContainerText}>
        <Text style={styles.ConfirmpasswordText}>Confirm Password</Text>
      </View>

      <View style={styles.ConfirmpasswordInputContainer}>
        <Feather 
        name='lock'
        size= {30}
        color="292D32"
        style={styles.ConfirmpasswordIcon}
        />
        <TextInput
        style={styles.Confirmpassword}
        placeholder="Re-enter Password"
        secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.signupBotton}>
        <Text style={styles.signupTextBotton}>Sign Up</Text>
      </TouchableOpacity>


      <View style={styles.noticesignupContainer}> 
        <Text style={styles.noticesignup}> Already have an Account?
        <Link href="/">
        <Text style={styles.proceedLogin}> Log in</Text>
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

  topContainer: {
    height: 40,
    backgroundColor: "black",
  },

  signup_container: {
    //blank
  },
  signupText: {
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
  usernameInputContainer: {
    //blank
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
  usernameIcon: {
    marginLeft: 11,
    marginRight: 9,

  },
  username:{
    width: 320,
    //backgroundColor: "blue"
  },




  EmailContainerText: {
    marginTop: 20,
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



  ConfirmpasswordContainerText: {
    marginTop: 20,
  },

  ConfirmpasswordText: {
    marginHorizontal: 20,
  },

  ConfirmpasswordInputContainer: {
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

  ConfirmpasswordIcon: {
    marginLeft: 11,
    marginRight: 9,

  },
  Confirmpassword:{
    width: 320,
    //backgroundColor: "blue"
  },


  signupBotton: {
    backgroundColor: "#4A90E2",
    marginHorizontal: 40,
    borderRadius: 11,
    marginTop: 50,
    

  },
  signupTextBotton: {
    textAlign: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: "white",
    fontWeight: "400",
  },


  noticesignupContainer: {
    alignItems: "center",
    paddingVertical: 20,

  },
  noticesignup: {

  },

  proceedLogin: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  



})


export default index