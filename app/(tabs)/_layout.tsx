import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


export default function TabsLayout() {

  const router = useRouter();
    const movetoLogin = () => {
        router.replace("/login")
        }


  return (
    <Tabs>
        <Tabs.Screen 
            name="home"
            options={{
                title: "Home",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen 
            name="settings"
            options={{
                title: "Settings",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings-outline" size={size} color={color} />
                )
            }}
        />

        
        <Tabs.Screen 
            name="logout"
            options={{
                title: "Exit",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="log-out-outline" size={size} color={color} />
                ),

                tabBarButton: (props) => (
                    <TouchableOpacity {...props} onPress={movetoLogin} />

                ),
                
            }}

        />



    </Tabs>
  );
}
