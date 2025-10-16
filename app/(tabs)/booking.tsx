import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import { useRouter } from "expo-router";

export default function Booking() {
  const router = useRouter();
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
      source={require("../../assets/images/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>BOOKING</Text>
        <TouchableOpacity style={styles.notificationIcon} onPress={() => router.push("/notification")}>
          <Ionicons name="notifications" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Centered Main Content */}
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.chooseText}>Choose a pet type</Text>

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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: "#143470",
  },

  pageTitle: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "LuckiestGuy_400Regular",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1,
  },
  notificationIcon: {
    padding: 8,
  },

  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },

  chooseText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 60,
  },

  petContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
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
    borderRadius: 5,
    elevation: 5,
  },

  selectButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
