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
            name="exit"
            options={{
                title:"Exit",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="log-out-outline" size={size} color={color} />
                ),

                tabBarButton: ({children, style, accessibilityState}) => (
                    <TouchableOpacity
                    onPress={Login} 
                    style={style}
                    accessibilityState={accessibilityState}>
                        {children}
                    </TouchableOpacity> 

                ),
                
            }}

        />



    </Tabs>
  );
}
