import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useRouter } from "expo-router";
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy'


const login = () => {

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/(tabs)/home")
  }

  const [fontsLoaded] = useFonts({
      LuckiestGuy: LuckiestGuy_400Regular,
    })
  
    if (!fontsLoaded) {
      return <View><Text>Loading...</Text></View>
  }
  

  return (
    <ImageBackground source={require("../assets/images/pawpatterns.png")} 
      style={styles.container}
      >
      
      {/* Logo + Title */}
      <View style={styles.logo_container}>
        <Image source={require("../assets/images/logo.png")}width={208} height={193} />
          <View style={{ position: "relative" }}>
            <Text style={[styles.logoText, styles.textOutline]}>HAPPY PAWS</Text>
            <Text style={styles.logoText}>HAPPY PAWS</Text>
          </View>
        <View style={[styles.underline, styles.underlineOutline]} />
        <View style={styles.underline} />
      </View>


      <View style={styles.UsernameEmailContainerText}>
        <Text style={styles.UsernameEmailText}>Username/Email Address</Text>
      </View>

      <View style={styles.EmailInputContainer}>
        <Feather 
        name='user'
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
        
  

      
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#143470",
    justifyContent: "center",
    
  },


  logo_container: {
    position: "fixed",
    alignItems: "center",
    marginBottom: 70,
  },


  logoText: {
    color: "white",
    fontSize: 40,
    fontFamily: "LuckiestGuy",
    marginTop: -50,
    elevation: 10,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 3 }, 
    textShadowRadius: 2,
  },

  textOutline: {
  position: "absolute",
  left: 2,
  top: 2,
  color: "black",
 },


  underline: {
    width: 280,     
    height: 4,   
    backgroundColor: "#fcfcfcff",   
    alignSelf: "center",
    marginTop: -8, // overlap the outline
    
  },

  underlineOutline: {
    width: 290,  
    height: 4,  
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 12,
     marginTop: 8, // overlap the outline
  },



  UsernameEmailContainerText: {
    //blank
  },

  UsernameEmailText: {
    marginHorizontal: 20,
    color: "white"

  },


  EmailContainerText: {
    marginTop: 60,
  },

  EmailText: {
    marginHorizontal: 20,
    color: "white",

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
    color: "white",
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