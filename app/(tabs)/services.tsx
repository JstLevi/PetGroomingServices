import React from "react";
import { useState } from "react";
import { View,  Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, ImageSourcePropType,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, LuckiestGuy_400Regular,} from "@expo-google-fonts/luckiest-guy";
import { useRouter } from "expo-router";

// Type definition for a service
type Service = {
  id: string;
  name: string;
  price: string;
  image: ImageSourcePropType;
  description: string;
};

// List of services
const services: Service[] = [
  {
    id: "1",
    name: "Haircut & Styling",
    price: "₱500",
    image: require("../../assets/images/haircut.jpg"),
    description: "Professional haircut and styling tailored to your pet's breed.",
  },
  {
    id: "2",
    name: "Bath & Blow Dry",
    price: "₱350",
    image: require("../../assets/images/bath.jpg"),
    description: "Gentle bath with shampoo & conditioner, followed by blow dry.",
  },
  {
    id: "3",
    name: "Teeth Brushing",
    price: "₱200",
    image: require("../../assets/images/teethbrush.png"),
    description: "Keep your pet’s teeth healthy and breath fresh.",
  },
  {
    id: "4",
    name: "Nail Trimming",
    price: "₱150",
    image: require("../../assets/images/nailtrim.png"),
    description: "Safe nail clipping and paw pad care.",
  },
  {
    id: "5",
    name: "Ear Cleaning",
    price: "₱180",
    image: require("../../assets/images/earcleaning.png"),
    description: "Gentle cleaning to prevent ear infections.",
  },
  {
    id: "6",
    name: "Full Grooming",
    price: "₱600",
    image: require("../../assets/images/fullgroom.png"),
    description: "Gentle overall cleaning .",
  },
];

export default function Services() {
  const router = useRouter();
  
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [fontsLoaded] = useFonts ({
    LuckiestGuy_400Regular,
  })
  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>
  }

  const renderService = ({ item }: { item: Service }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelectedService(item)}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>SERVICES</Text>
        <TouchableOpacity style={styles.notificationIcon} onPress={() => router.push("/notification")}>
          <Ionicons name="notifications" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* List of Services */}
      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 15, paddingBottom: 100 }}
      />

      {/* Modal for Service Details */}
      <Modal
        visible={!!selectedService}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedService(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {selectedService && (
              <>
                <Image
                  source={selectedService.image}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{selectedService.name}</Text>
                <Text style={styles.modalDesc}>
                  {selectedService.description}
                </Text>
                <Text style={styles.modalPrice}>
                  Price: {selectedService.price}
                </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedService(null)}
                >
                  <Text style={styles.closeButtonText}>Book Now</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDEFD0",
  },
  // Header styles
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
    color: "#ffffffff",
    fontFamily: "LuckiestGuy",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1,
  },

  notificationIcon: {
    padding: 8,
  },

  // Service Card styles
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 40,
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#FF8C00",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  // Modal styles
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "85%",
    alignItems: "center",
  },
  modalImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  modalDesc: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
