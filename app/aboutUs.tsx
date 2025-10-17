import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";

export default function AboutUsScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.pageTitle}>ABOUT US</Text>
      </View>

      {/* Scrollable About Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.aboutText}>
            Welcome to HappyPaws Pet Grooming Services, where every pet is treated with
            love, care, and attention — because we believe every furry friend deserves
            to look and feel their very best!
          </Text>

          <Text style={styles.aboutText}>
            At HappyPaws, we understand that pets are more than just animals —
            they’re loyal companions, cherished family members, and a source of
            unconditional happiness. That’s why our mission is to provide a grooming
            experience that’s not only professional but also filled with compassion,
            comfort, and joy.
          </Text>

          <Text style={styles.aboutText}>
            Our team of certified and experienced groomers are passionate animal
            lovers who take the time to get to know your pet’s unique personality and
            needs. Whether it’s a gentle bath for your shy kitten, a stylish haircut
            for your energetic pup, or a soothing grooming session for your senior
            pet, we ensure every visit is safe, relaxing, and enjoyable.
          </Text>

          <Text style={styles.aboutText}>
            We take pride in maintaining a clean, hygienic, and pet-friendly
            environment using only high-quality, pet-safe products that help keep
            coats soft, skin healthy, and tails wagging!
          </Text>

          <Text style={styles.aboutText}>
            At HappyPaws, our goal is simple — to make pets happy and help pet owners
            feel confident knowing their beloved companions are in good hands.
          </Text>

          <Text style={styles.aboutText}>
            Because here at HappyPaws, we don’t just groom pets — we care for them
            like family. 🐾💜🐶🐱
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#FDEFD0",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: "#143470",
    position: "relative",
  },

  iconButton: {
    position: "absolute",
    left: 15,
    padding: 8,
    bottom: 12,
  },

  pageTitle: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "LuckiestGuy_400Regular",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1,
  },

  scrollContainer: {
    padding: 15,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  aboutText: {
    fontSize: 15,
    color: "#333",
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 10,
  },
});
