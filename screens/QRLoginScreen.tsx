import React, { useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BotContext } from "../context/BotContext";
import { useNavigation } from "@react-navigation/native";

export default function QRLoginScreen() {
  const { connected } = useContext(BotContext);
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (connected) {
      navigation.replace("Dashboard");
    }
  }, [connected]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan the QR code in terminal to login WhatsApp.</Text>
      <Button title="Retry / Rescan" onPress={() => { /* trigger bot QR code again */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  text: { fontSize: 18, textAlign: "center", marginBottom: 20 },
});
