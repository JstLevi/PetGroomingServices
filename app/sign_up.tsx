import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const movetoLogin = () => {
    router.replace("/login");
  };

  return (
    <ImageBackground source={require("../assets/images/pawpatterns.png")} 
      style={styles.container}
      >
      
      {/* Logo */}
      <View style={styles.logo_container}>
        <Image source={require("../assets/images/logo.png")}width={208} height={193} />
          <View style={{ position: "relative" }}>
            <Text style={[styles.logoText, styles.textOutline]}>HAPPY PAWS</Text>
            <Text style={styles.logoText}>HAPPY PAWS</Text>
          </View>
        <View style={[styles.underline, styles.underlineOutline]} />
        <View style={styles.underline} />
      </View>

      {/* Username */}
      <View style={styles.inputLabel}>
        <Text style={styles.labelText}>Username</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="user" size={22} color="#4A5568" />
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#A0AEC0"
        />
      </View>

      {/* Email */}
      <View style={styles.inputLabel}>
        <Text style={styles.labelText}>Email Address</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="mail" size={22} color="#4A5568" />
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          placeholderTextColor="#A0AEC0"
          keyboardType="email-address"
        />
      </View>

      {/* Password */}
      <View style={styles.inputLabel}>
        <Text style={styles.labelText}>Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={22} color="#4A5568" />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#A0AEC0"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="#4A5568" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputLabel}>
        <Text style={styles.labelText}>Confirm Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={22} color="#4A5568" />
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          placeholderTextColor="#A0AEC0"
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Feather name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#4A5568" />
        </TouchableOpacity>
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={movetoLogin}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Redirect to Login */}
      <View style={styles.noticesignupContainer}>
        <Text style={styles.noticesignup}>
          Already have an Account?
          <Link href="/login">
            <Text style={styles.proceedLogin}> Log in</Text>
          </Link>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#143470",
    flex: 1,
    paddingHorizontal: 20,
  },

  logo_container: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
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

    left: 2,
    top: 2,
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

  inputLabel: {
    marginTop: 18,
  },
  labelText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ffffffff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CBD5E0",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 55,
    marginTop: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#2D3748",
  },
  signupButton: {
    backgroundColor: "#4269B4",
    borderRadius: 12,
    marginTop: 40,
    paddingVertical: 14,
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  noticesignupContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  noticesignup: {
    fontSize: 14,
    color: "#ffffffff",
  },
  proceedLogin: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
});

export default SignUp;
