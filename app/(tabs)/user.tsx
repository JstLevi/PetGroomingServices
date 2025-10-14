import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMenu } from "../MenuContext";

export default function ProfileScreen() {
  const { toggleMenu } = useMenu();

  return (
    <View style={styles.root}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>PROFILE</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.notificationIcon}>
              <Ionicons name="notifications" size={26} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* PROFILE SECTION */}
        <View style={styles.profile}>
          <Image
            source={require("../../assets/images/owner.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Phil Josh Burlat</Text>
          <Text style={styles.email}>levi@example.com</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* PETS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Pets</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.petCard}>
              <Text style={styles.petName}>Buddy</Text>
              <Text style={styles.petBreed}>Golden Retriever</Text>
            </View>
            <View style={styles.petCard}>
              <Text style={styles.petName}>Mochi</Text>
              <Text style={styles.petBreed}>Persian Cat</Text>
            </View>
            <TouchableOpacity style={styles.addPetBtn}>
              <Text style={styles.addText}>+ Add Pet</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* BOOKING SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Booking</Text>
          <View style={styles.bookingCard}>
            <Text style={styles.service}>Haircut & Bath</Text>
            <Text style={styles.date}>October 20, 2025 • 2:00 PM</Text>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FEEDBACK SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Feedback</Text>
          <View style={styles.feedbackCard}>
            <Text style={styles.feedbackText}>
              “Great service! Buddy smells amazing 🐶✨”
            </Text>
            <Text style={styles.dateSmall}>Last updated: Oct 1, 2025</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFF8E7" },
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
    fontFamily: "LuckiestGuy",
    textShadowColor: "rgba(0,0,0,1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1,
  },
  notificationIcon: { padding: 5 },
  menuIcon: { padding: 5 },
  profile: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: { fontSize: 20, fontWeight: "700" },
  email: { color: "#777" },
  editBtn: {
    backgroundColor: "#FFA726",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 10,
  },
  editText: { color: "#fff", fontWeight: "600" },
  section: { paddingHorizontal: 20, marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
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
  viewBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#FFA726",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  viewText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  feedbackCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    elevation: 2,
  },
  feedbackText: { fontStyle: "italic", color: "#444" },
  dateSmall: { fontSize: 12, color: "#888", marginTop: 5 },
});
