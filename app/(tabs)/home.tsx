import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    LuckiestGuy: LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const services = [
    { id: 1, name: "Basic Grooming", icon: "cut", price: "₱350" },
    { id: 2, name: "Flea & Tick Treatment", icon: "bug", price: "₱650" },
    { id: 3, name: "Nail Trimming", icon: "paw", price: "₱150" },
    { id: 4, name: "Teeth Cleaning", icon: "medical", price: "₱250" },
  ];

  const appointments = [
    {
      id: 1,
      pet: "Bella (Poodle)",
      service: "Basic Grooming",
      date: "Sept 16, 2023",
      time: "2:30 PM",
    },
    {
      id: 2,
      pet: "Charlie (Shiba Inu)",
      service: "Nail Trimming",
      date: "Sept 17, 2023",
      time: "4:00 PM",
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/homebg.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>HOME</Text>
          <TouchableOpacity
            style={styles.notificationIcon}
            onPress={() => router.push("/notification")}
          >
            <Ionicons name="notifications" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Promo Card */}
          <View style={styles.promoCard}>
            <Text style={styles.promoTitle}>SPECIAL OFFER</Text>
            <Text style={styles.promoText}>
              Get 20% off on your first grooming session!
            </Text>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>

          {/* Popular Services */}
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.servicesContainer}
          >
            {services.map((service) => (
              <View key={service.id} style={styles.serviceCard}>
                <View style={styles.serviceIcon}>
                  <Ionicons name={service.icon as any} size={28} color="#FF8C00" />
                </View>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Appointments */}
          <Text style={styles.sectionTitle}>Appointments</Text>
          <View style={styles.appointmentsTable}>
            {appointments.map((appointment) => (
              <View key={appointment.id} style={styles.appointmentRow}>
                <View style={styles.appointmentDetails}>
                  <Text style={styles.petName}>{appointment.pet}</Text>
                  <Text style={styles.serviceName}>{appointment.service}</Text>
                  <Text style={styles.appointmentTime}>
                    {appointment.date} • {appointment.time}
                  </Text>
                </View>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
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
    fontFamily: "LuckiestGuy",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  notificationIcon: {
    padding: 8,
  },
  promoCard: {
    backgroundColor: "#FF8C00",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    letterSpacing: 1,
  },
  promoText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 16,
    fontWeight: "600",
  },
  promoButton: {
    backgroundColor: "#FFD54F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  promoButtonText: {
    color: "#0d3683ff",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginVertical: 16,
    color: "#143470",
  },
  servicesContainer: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: "#fff",
    width: 140,
    height: 160,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF4E0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8C00",
  },
  appointmentsTable: {
    marginHorizontal: 16,
    marginBottom: 30,
  },
  appointmentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  appointmentDetails: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
  },
  appointmentTime: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 4,
  },
  viewButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default Home;
