import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import { MotiView, MotiImage, MotiText } from "moti";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const [fontsLoaded] = useFonts({ LuckiestGuy_400Regular });
  const [welcomeText, setWelcomeText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const typeText = (
      setter: React.Dispatch<React.SetStateAction<string>>,
      message: string,
      delay = 0
    ) => {
      let i = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          setter(message.slice(0, i++));
          if (i > message.length) clearInterval(interval);
        }, 100);
      }, delay);
    };

    typeText(setWelcomeText, "Welcome to..", 0);
    typeText(setTitleText, "HAPPY PAWS", 1800);
    typeText(setSubtitleText, "Happy Pet, Happy Owner", 3500);
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Animated gradient background */}
      <View style={StyleSheet.absoluteFill}>
        <MotiView
          from={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ loop: true, duration: 4000 }}
        >
          <LinearGradient
            colors={["#143470", "#1E3A8A", "#143470"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        </MotiView>
      </View>

      {/* Typing text animations */}
      <MotiText
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 200, duration: 800 }}
        style={styles.welcomeTo}
      >
        {welcomeText}
      </MotiText>

      {/* Logo breathing animation */}
      <MotiView
        from={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: [1, 1.07, 1],
        }}
        transition={{
          type: "timing",
          duration: 1300,
          loop: true,
        }}
        style={styles.logoContainer}
      >
        <Image
          source={require("../assets/images/logo (2).png")}
          style={styles.logo}
        />
      </MotiView>

      {/* Static logo text and underline */}
      <View style={styles.textContainer}>
        <Text style={styles.logoText}>{titleText}</Text>
        <View style={styles.underline} />
      </View>

      <Text style={styles.subtitle}>{subtitleText}</Text>

      {/* Button */}
      <MotiView
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 4500, duration: 800 }}
        style={styles.buttonContainer}
      >
        <Link href="/login" asChild>
          <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
          >
            <MotiView
              from={{ scale: 1 }}
              animate={{ scale: pressed ? 0.9 : 1 }}
              transition={{ type: "spring" }}
              style={styles.getStartBtn}
            >
              <Text style={styles.getStartText}>Get Started</Text>
            </MotiView>
          </TouchableOpacity>
        </Link>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    backgroundColor: "#143470",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  welcomeTo: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.9,
    marginBottom: 10,
    letterSpacing: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#F3C65D",
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 0,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#F3C65D",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  logoText: {
    fontSize: 40,
    color: "#fff",
    fontFamily: "LuckiestGuy_400Regular",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1.5, height: 5 },
    textShadowRadius: 1,
    letterSpacing: 1,
    marginTop: -45,
  },
  underline: {
    width: 270,
    height: 4,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    marginTop: 4,
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    opacity: 0.9,
    marginBottom: 100,
  },
  buttonContainer: { position: "absolute", bottom: 80 },
  getStartBtn: {
    backgroundColor: "#F7941D",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  getStartText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
