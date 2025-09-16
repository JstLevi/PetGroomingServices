import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';

const { width } = Dimensions.get('window');

const Home = () => {
  // Load the Luckiest Guy font
  let [fontsLoaded, fontError] = useFonts({
    LuckiestGuy: LuckiestGuy_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null; // Or a loading indicator
  }

  // Sample data for services
  const services = [
    { id: 1, name: 'Basic Grooming', icon: 'cut', price: '$35' },
    { id: 2, name: 'Flea & Tick Treatment', icon: 'bug', price: '$65' },
    { id: 3, name: 'Nail Trimming', icon: 'paw', price: '$15' },
    { id: 4, name: 'Teeth Cleaning', icon: 'medical', price: '$25' },
  ];

  // Sample data for appointments
  const appointments = [
    { id: 1, pet: 'Max (Golden Retriever)', service: 'Full Spa', date: 'Sept 15, 2023', time: '10:00 AM' },
    { id: 2, pet: 'Bella (Poodle)', service: 'Basic Grooming', date: 'Sept 16, 2023', time: '2:30 PM' },
    { id: 3, pet: 'Charlie (Shiba Inu)', service: 'Nail Trimming', date: 'Sept 17, 2023', time: '4:00 PM' },
  ];

  return (
    <ImageBackground 
      source={require('../../assets/images/homebg.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Header with logo, title and notification icon */}
        <View style={styles.header}>
          <Image 
            source={require('../../assets/images/smalllogo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={[styles.pageTitle, fontsLoaded && { fontFamily: 'LuckiestGuy' }]}>HOME</Text>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Promo Card */}
          <View style={styles.promoCard}>
            <Text style={styles.promoTitle}>SPECIAL OFFER</Text>
            <Text style={styles.promoText}>Get 20% off on your first grooming session!</Text>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>

          {/* Popular Services */}
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
            {services.map(service => (
              <View key={service.id} style={styles.serviceCard}>
                <View style={styles.serviceIcon}>
                  <Ionicons name={service.icon as any} size={28} color="#4A90E2" />
                </View>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Appointments */}
          <Text style={styles.sectionTitle}>Appointments</Text>
          <View style={styles.appointmentsTable}>
            {appointments.map(appointment => (
              <View key={appointment.id} style={styles.appointmentRow}>
                <View style={styles.appointmentDetails}>
                  <Text style={styles.petName}>{appointment.pet}</Text>
                  <Text style={styles.serviceName}>{appointment.service}</Text>
                  <Text style={styles.appointmentTime}>{appointment.date} • {appointment.time}</Text>
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
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#143470',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    position: 'relative',
  },
  logo: {
    width: 120,
    height: 40,
  },
  pageTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 28,
    color: '#4A90E2',
    zIndex: -1,
  },
  notificationIcon: {
    padding: 8,
  },
  promoCard: {
    backgroundColor: '#4A90E2',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    letterSpacing: 1,
  },
  promoText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
    fontWeight: '600',
  },
  promoButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 16,
    color: '#2c3e50',
  },
  servicesContainer: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: '#fff',
    width: 140,
    height: 160,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  appointmentsTable: {
    marginHorizontal: 16,
    marginBottom: 30,
  },
  appointmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  appointmentDetails: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  viewButton: {
    backgroundColor: '#e8f4ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
});

export default Home;