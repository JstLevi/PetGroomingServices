import React from "react";
import {View,Text,StyleSheet, FlatList, Image, TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";

type Appointment = {
  id: string;
  pet: string;
  service: string;
  date: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
};

const appointments: Appointment[] = [
  {
    id: "1",
    pet: "Buddy 🐶",
    service: "Grooming",
    date: "Sept 20, 2025 | 2:00 PM",
    status: "Confirmed",
  },
  {
    id: "2",
    pet: "Mittens 🐱",
    service: "Vaccination",
    date: "Sept 22, 2025 | 11:00 AM",
    status: "Pending",
  },
  {
    id: "3",
    pet: "Charlie 🐕",
    service: "Check-up",
    date: "Sept 25, 2025 | 4:30 PM",
    status: "Completed",
  },
];

export default function AppointmentScreen() {
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return { backgroundColor: "green" };
      case "Pending":
        return { backgroundColor: "orange" };
      case "Completed":
        return { backgroundColor: "blue" };
      case "Cancelled":
        return { backgroundColor: "red" };
      default:
        return { backgroundColor: "gray" };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/smalllogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.pageTitle}>APPOINTMENTS</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Appointment List */}
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.petName}>{item.pet}</Text>
            <Text style={styles.text}>Service: {item.service}</Text>
            <Text style={styles.text}>Date: {item.date}</Text>

            {/* Status Badge */}
            <View style={[styles.statusBadge, renderStatusColor(item.status)]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No appointments yet. Book now!</Text>
        }
      />
    </View>
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
    fontFamily: "LuckiestGuy",
  },
  notificationIcon: {
    padding: 8,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  petName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "gray",
  },
});
