import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";

export default function Booking() {
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  const [selectedPet, setSelectedPet] = useState<string | null>(null);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
       // 🐾 background image with paw prints
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/smalllogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.pageTitle}>BOOKING</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Pet Options */}
      <View style={styles.petContainer}>
        <TouchableOpacity
          style={[
            styles.petCard,
            { backgroundColor: "#B22222" }, // red for cat
            selectedPet === "cat" && styles.activeCard,
          ]}
          onPress={() => setSelectedPet("cat")}
        >
          <Text style={styles.petText}>CAT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.petCard,
            { backgroundColor: "#FF8C00" }, // orange for dog
            selectedPet === "dog" && styles.activeCard,
          ]}
          onPress={() => setSelectedPet("dog")}
        >
          <Text style={styles.petText}>DOG</Text>
        </TouchableOpacity>
      </View>

      {/* Select Button */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.selectButton,
            !selectedPet && { backgroundColor: "#ccc" },
          ]}
          disabled={!selectedPet}
          onPress={() => alert(`You selected: ${selectedPet?.toUpperCase()}`)}
        >
          <Text style={styles.selectButtonText}>Select</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDEFD0",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 5,
    backgroundColor: "#143470",
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
    position: "relative",
  },
  logo: {
    width: 80,
    height: 60,
    resizeMode: "contain",
  },
  pageTitle: {
    position: "absolute",
    left: 0,
    top: 50,
    right: 0,
    textAlign: "center",
    fontSize: 28,
    color: "#fff",
    fontFamily: "LuckiestGuy_400Regular",
  },
  notificationIcon: {
    padding: 8,
  },
  petContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  petCard: {
    width: 140,
    height: 160,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  activeCard: {
    borderWidth: 3,
    borderColor: "#fff",
  },
  petText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 40,
  },
  selectButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    elevation: 5,
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
