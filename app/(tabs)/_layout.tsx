import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


export default function TabsLayout() {

  const router = useRouter();
    const Login = () => {
        router.replace("/login")
    }


  return (
    <Tabs>
        <Tabs.Screen 
            name="home"
            options={{
                title: "HOME",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen 
            name="booking"
            options={{
                title: "BOOKING",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="calendar-outline" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen 
            name="services"
            options={{
                title: "SERVICES",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="paw-outline" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen 
            name="appointment"
            options={{
                title: "APPOINTMENT",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="clipboard-outline" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen 
            name="settings"
            options={{
                title: "SETTINGS",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings-outline" size={size} color={color} />
                )
            }}
        />

        






    </Tabs>
  );
}
