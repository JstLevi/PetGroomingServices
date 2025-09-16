import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Booking() {
  const [selectedPet, setSelectedPet] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose Your Pet</Text>
      </View>

      {/* Pet Options */}
      <View style={styles.petContainer}>
        <TouchableOpacity
          style={[
            styles.petCard,
            selectedPet === "cat" && styles.activeCard,
          ]}
          onPress={() => setSelectedPet("cat")}
        >
           {/*<Image
            source={require("../../assets/images/cat.png")}
            style={styles.petImage}
          />*/}
          
          <Text style={styles.petText}>CAT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.petCard,
            selectedPet === "dog" && styles.activeCard,
          ]}
          onPress={() => setSelectedPet("dog")}
        >
          {/*<Image
            source={require("../../assets/images/dog.png")}
            style={styles.petImage}
          />*/}
          <Text style={styles.petText}>DOG</Text>
        </TouchableOpacity>
      </View>

      {/* Select Button */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9c67a", // background paw color
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  petContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  petCard: {
    width: 130,
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  activeCard: {
    borderWidth: 3,
    borderColor: "#FF8C00", // highlight when selected
  },
  petImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  petText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectButton: {
    marginTop: 50,
    backgroundColor: "#ff8c00ff",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    elevation: 5,
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
