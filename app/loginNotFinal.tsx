import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

const LoginScreen = () => {
  // 1️⃣ State variables for email/username and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2️⃣ Function to handle login button
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    // Here you can add your backend login (Supabase/Firebase)
    Alert.alert('Success', `Logged in as ${email}`);
  };

  return (
    <View style={styles.container}>
      
      {/* Top placeholder */}
      <View style={styles.topContainer}></View>

      {/* Login Title */}
      <Text style={styles.loginText}>Log In</Text>
      <View style={styles.underline}></View>

      {/* Cat & Dog Image */}
      <View style={styles.catDogContainer}>
        <Image
          source={require('../assets/images/vector.png')}
          style={styles.catDogImage}
        />
      </View>

      {/* Email Input */}
      <Text style={styles.label}>Username/Email Address</Text>
      <View style={styles.inputContainer}>
        <Feather name="mail" size={24} color="#292D32" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Username/Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Enter Password</Text>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="#292D32" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign up Link */}
      <View style={styles.signupContainer}>
        <Text>Don't have an account? 
          <Link href="/sign_up">
            <Text style={styles.signupText}> Sign up</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 20 },
  topContainer: { height: 40, backgroundColor: 'black' },
  loginText: { fontSize: 40, fontWeight: 'bold', color: '#1E3A8A', textAlign: 'center', marginTop: 40 },
  underline: { height: 4, backgroundColor: '#1E3A8A', width: '50%', alignSelf: 'center', marginVertical: 10 },
  catDogContainer: { backgroundColor: '#1E3A8A', height: 120, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginVertical: 20 },
  catDogImage: { width: 100, height: 100, resizeMode: 'contain' },
  label: { marginLeft: 10, fontSize: 16, marginTop: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, paddingHorizontal: 10, height: 50, marginTop: 5, elevation: 5 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16 },
  loginButton: { backgroundColor: '#4A90E2', borderRadius: 10, marginTop: 30, paddingVertical: 12 },
  loginButtonText: { color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
  signupContainer: { marginTop: 20, alignItems: 'center' },
  signupText: { color: '#4A90E2', fontWeight: 'bold' },
});

export default LoginScreen;
