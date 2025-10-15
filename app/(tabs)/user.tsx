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
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const { toggleMenu } = useMenu();

  return (
    <View style={styles.root}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>PROFILE</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.notificationIcon}
              onPress={() => router.push("/notification")}
            >
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
              <Image
                source={require("../../assets/images/dog1.jpg")}
                style={styles.petImage}
              />
              <Text style={styles.petName}>Buddy</Text>
              <Text style={styles.petBreed}>Golden Retriever</Text>
            </View>

            <View style={styles.petCard}>
              <Image
                source={require("../../assets/images/cat1.jpg")}
                style={styles.petImage}
              />
              <Text style={styles.petName}>Mochi</Text>
              <Text style={styles.petBreed}>Persian Cat</Text>
            </View>

            <TouchableOpacity style={styles.addPetBtn}>
              <Ionicons name="add-circle-outline" size={30} color="#333" />
              <Text style={styles.addText}>Add Pet</Text>
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

        {/* MY PHOTOS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Photos</Text>
          <View style={styles.photoFrameContainer}>
            <View style={styles.photoGrid}>
              <Image
                source={require("../../assets/images/cat2.jpg")}
                style={styles.photoItem}
              />
              <Image
                source={require("../../assets/images/dog1.jpg")}
                style={styles.photoItem}
              />
              <Image
                source={require("../../assets/images/cat1.jpg")}
                style={styles.photoItem}
              />
              <Image
                source={require("../../assets/images/cat3.jpg")}
                style={styles.photoItem}
              />
              <Image
                source={require("../../assets/images/cat5.jpg")}
                style={styles.photoItem}
              />
              <Image
                source={require("../../assets/images/dog4.jpg")}
                style={styles.photoItem}
              />
            </View>

            {/* Add Photo Button */}
            <TouchableOpacity style={styles.addPhotoBox}>
              <Ionicons name="add" size={40} color="#999" />
            </TouchableOpacity>
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
    width: 130,
    alignItems: "center",
  },

  petImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 6,
  },

  petName: { fontWeight: "700", marginTop: 3 },
  petBreed: { fontSize: 12, color: "#777" },

  addPetBtn: {
    backgroundColor: "#FFD180",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    marginRight: 10,
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

  /** --- MY PHOTOS --- **/
  photoFrameContainer: {
    backgroundColor: "#D6D1C9", // similar to your sample beige-gray
    borderWidth: 1,
    borderColor: "#555",
    padding: 5,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    height: 420,
  },

  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  photoItem: {
    width: "32%",
    aspectRatio: 1,
    marginBottom: 5,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#333",
  },

  addPhotoBox: {
    marginTop: 2,
    borderWidth: 1.5,
    borderColor: "#777",
    borderStyle: "dashed",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width:"32%",
    backgroundColor: "#f7f7f7",
  },
});

