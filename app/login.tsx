import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useRouter } from "expo-router";
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy'
import { useState } from "react";



const login = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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


      {/* Email */}
      <Text style={styles.label}>Username / Email</Text>
      <View style={styles.inputContainer}>
        <Feather name="user" size={24} color="#666" />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="#666" />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? "eye-off" : "eye"} size={22} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 25, marginTop: 5 }}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View style={styles.footer}>
        <Text style={{ color: "#fff" }}>Don’t have an account?</Text>
        <Link href="/sign_up">
          <Text style={styles.signUp}> Sign Up</Text>
        </Link>
      </View>
      
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#143470",
    justifyContent: "center",
    paddingHorizontal: 20,
    
  },


  logo_container: {
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
    textShadowRadius: 3,
  },

  textOutline: {
  right: 2,
  top: 15,
  color: "black",
 },


  underline: {
    width: "70%",     
    height: 4,   
    backgroundColor: "#fcfcfcff",   
    marginTop: -7.5, 
    borderRadius: 2,
    
  },

  underlineOutline: {
    width: "69%",  
    height: 4,  
    backgroundColor: "#000000be",
    borderRadius: 12,
    marginTop: 8, 
  },


  label: {
    color: "white",
    fontWeight: "500",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  forgotPassword: {
    color: "#4A90E2",
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#4269B4",
    borderRadius: 12,
    marginTop: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  signUp: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  


})



export default login