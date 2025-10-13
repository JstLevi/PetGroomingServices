import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header / Profile Info */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/owner.jpg")} // 👈 replace with your own owner photo
          style={styles.avatar}
        />
        <Text style={styles.name}>Phil Josh Burlat</Text>
        <Text style={styles.email}>levi@example.com</Text>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* My Pets */}
      <Text style={styles.sectionTitle}>My Pets</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 15 }}>
        <View style={styles.petCard}>
          {/*<Image
            source={require("../../assets/images/dog1.png")}
            style={styles.petImg}
          />*/}
          <Text style={styles.petName}>Buddy</Text>
          <Text style={styles.petBreed}>Golden Retriever</Text>
        </View>

        <View style={styles.petCard}>
          {/*<Image
            source={require("../../assets/images/cat1.png")}
            style={styles.petImg}
          />*/}
          <Text style={styles.petName}>Mochi</Text>
          <Text style={styles.petBreed}>Persian Cat</Text>
        </View>

        <TouchableOpacity style={styles.addPetBtn}>
          <Text style={styles.addText}>+ Add Pet</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Upcoming Booking */}
      <Text style={styles.sectionTitle}>Upcoming Booking</Text>
      <View style={styles.bookingCard}>
        <Text style={styles.service}>Haircut & Bath</Text>
        <Text style={styles.date}>October 20, 2025 • 2:00 PM</Text>
        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.viewText}>View Details</Text>
        </TouchableOpacity>
      </View>

      {/* Feedback Section */}
      <Text style={styles.sectionTitle}>My Feedback</Text>
      <View style={styles.feedbackCard}>
        <Text style={styles.feedbackText}>
          “Great service! Buddy smells amazing 🐶✨”
        </Text>
        <Text style={styles.dateSmall}>Last updated: Oct 1, 2025</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8E7", padding: 20 },
  header: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 10, marginTop: 50 },
  name: { fontSize: 20, fontWeight: "700" },
  email: { color: "#777" },
  editBtn: { backgroundColor: "#FFA726", paddingVertical: 6, paddingHorizontal: 15, borderRadius: 8, marginTop: 10 },
  editText: { color: "#fff", fontWeight: "600" },

  sectionTitle: { fontSize: 18, fontWeight: "700", marginTop: 20, marginBottom: 8 },
  petCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    width: 120,
    alignItems: "center",
  },

  petName: { fontWeight: "700", marginTop: 5 },
  petBreed: { fontSize: 12, color: "#777" },
  addPetBtn: {
    backgroundColor: "#FFD180",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
  },
  addText: { color: "#333", fontWeight: "600" },

  bookingCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 2,
  },
  service: { fontWeight: "700", fontSize: 16 },
  date: { color: "#555", marginVertical: 5 },
  viewBtn: { alignSelf: "flex-end", backgroundColor: "#FFA726", padding: 6, borderRadius: 6 },
  viewText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  feedbackCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    elevation: 2,
    marginBottom: 40,
  },
  feedbackText: { fontStyle: "italic", color: "#444" },
  dateSmall: { fontSize: 12, color: "#888", marginTop: 5 },
});
