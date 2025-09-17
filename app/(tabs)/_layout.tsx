import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";


export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "#a5550aff",
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#FF8C00",
        flex: 1,
        position: "absolute",   
        bottom: 40,
        borderRadius: 10,
        height: 50,
        marginHorizontal: 15,
        paddingTop: 0,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      tabBarLabelStyle: {
        fontSize: 9,
        fontWeight: "500",
      },
      tabBarButton: (props: PressableProps) => (
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
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
