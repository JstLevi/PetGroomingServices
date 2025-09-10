import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'


const Index = () => {

  

  return (

    <View style={styles.container}>

      
    {/*<View style={styles.overlay}></View>*/}


    <View style={styles.welcomeCont}>
      <Text style={styles.welcomeTitle}> Welcome to Pet Grooming Services App</Text>
      <Text style={styles.welcomeSubtitle}>Happy Pet, Happy Owner</Text>
    </View>



    <Link href="/login" asChild>
      <TouchableOpacity style={styles.get_start_cont}>
        <Text style={styles.GetStartText}>Get Started</Text>
      </TouchableOpacity>
    </Link>


      

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#143470',
  },


  /*overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000073'
  },*/


  welcomeCont: {
    marginTop: 120,
    paddingHorizontal: 20,
  },

  welcomeTitle: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },

  welcomeSubtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
    opacity: 0.9,
  },


  get_start_cont: {
    position: "absolute",
    bottom: 80, // distance from bottom
    alignSelf: "center",
    backgroundColor: "#d87505ff",
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  GetStartText: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },


})

export default Index
