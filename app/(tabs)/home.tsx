import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Feather } from "@expo/vector-icons"; // icons

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/images/smalllogo.png")} style={styles.logo} />
        <Text style={styles.title}>Home</Text>
        <Feather name="bell" size={24} color="#fff" />
      </View>

      <ScrollView style={styles.scroll}>
        {/* Welcome */}
        <Text style={styles.welcome}>Welcome, Mga Bisaya 🐾</Text>

        {/* Promo Section */}
        <View style={styles.promo}>
          <Text style={styles.promoText}>Promo Carousel Here</Text>
        </View>

        {/* Popular Services */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.serviceRow}>
          <View style={styles.serviceCard}><Text>Bathing</Text></View>
          <View style={styles.serviceCard}><Text>Haircut</Text></View>
          <View style={styles.serviceCard}><Text>Nail Trim</Text></View>
        </View>

        {/* Appointments */}
        <Text style={styles.sectionTitle}>Appointments</Text>
        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentText}>No appointments yet 🐶</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003366",
    padding: 20,
    paddingTop: 40,
  },
  logo: { width: 50, height: 50, borderRadius: 2 },
  title: { color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: -20, },
  scroll: { flex: 1, padding: 15 },
  welcome: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  promo: {
    backgroundColor: "#ffcc00",
    borderRadius: 12,
    padding: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  promoText: { fontWeight: "600" },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold" },
  seeAll: { color: "#003366", fontWeight: "500" },
  serviceRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  serviceCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  appointmentCard: {
    backgroundColor: "#ffcc00",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  appointmentText: { fontWeight: "500" },
});
