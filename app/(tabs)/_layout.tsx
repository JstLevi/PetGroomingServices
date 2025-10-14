import { Ionicons, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable, Animated, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native";
import React, { useRef, useEffect } from "react";
import { useMenu, MenuProvider } from "../MenuContext";
import { useRouter } from "expo-router";


const { width } = Dimensions.get("window");



function AnimatedTabs() {
  const { menuVisible, toggleMenu } = useMenu();
  const anim = useRef(new Animated.Value(0)).current;
  const router = useRouter();


const handleLogout = () => {
    router.replace("/login")
  }

  // Animate content shift when menu opens
  useEffect(() => {
    Animated.timing(anim, {
      toValue: menuVisible ? -200 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  // Animation for menu sliding in/out
  const slideAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const menuTranslateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  });




  return (
    <View style={{ flex: 1 }}>
      {/* Animated Tabs shifting left when menu opens */}
      <Animated.View style={{ flex: 1, transform: [{ translateX: anim }] }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#a5550aff",
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#FF8C00",
              position: "absolute",
              bottom: 40,
              borderRadius: 10,
              height: 50,
              marginHorizontal: 15,
              elevation: 5,
            },
            tabBarLabelStyle: {
              fontSize: 9,
              fontWeight: "500",
            },
            tabBarButton: (props) => (
              <Pressable {...props} android_ripple={{ color: "transparent" }} />
            ),
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="services"
            options={{
              title: "Services",
              tabBarIcon: ({ color, size }) => (
                <Feather name="scissors" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="booking"
            options={{
              title: "Booking",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="appointment"
            options={{
              title: "Appointments",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="clipboard-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="user"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </Animated.View>

      {/* Dark overlay when menu is open */}
      {menuVisible && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* GLOBAL SIDE MENU */}
      <Animated.View
        style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}
      >
        <View style={styles.menuContent}>
          <Text style={styles.menuHeader}>Menu</Text>
          <View style={styles.line} />
          <TouchableOpacity>
            <Text style={styles.menuItem}>My Appointments</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={[styles.menuItem, { color: "red" }]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <MenuProvider>
      <AnimatedTabs />
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 2,
  },
  sideMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "70%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 3,
    paddingTop: 80,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: -3, height: 0 },
    shadowRadius: 6,
    elevation: 12,
  },
  menuContent: { paddingHorizontal: 20 },
  menuHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#143470",
    marginBottom: 10,
  },
  line: { height: 1, backgroundColor: "#ccc", marginBottom: 15 },
  menuItem: { fontSize: 16, fontWeight: "700", marginVertical: 10 },
});
