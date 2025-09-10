import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'


const Index = () => {

  

  return (

    <View style={styles.container}>

      <ImageBackground 
        source={require("../assets/images/cat.png")} 
        style={styles.background}
      >
        <View style={styles.overlay}></View>

    

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.get_start_cont}>
            <Text style={styles.GetStartText}>Get Started</Text>
          </TouchableOpacity>
        </Link>

      </ImageBackground>

      

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex:1,
  },

  background: {
    flex: 1,
    resizeMode: 'cover', // cover = fill screen
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000073'
  },


  get_start_cont: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 150, 
  },


  GetStartText: {
    textAlign:"center",
    backgroundColor: "#d87505ff",
    fontSize: 35,
    paddingVertical: 10,
    marginHorizontal: 90,
    color: "white",
    borderRadius: 10,
    borderWidth:1,
  }


})

export default Index
