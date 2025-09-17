import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BotContext } from "../context/BotContext";

export default function DashboardScreen() {
  const { connected } = useContext(BotContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexa Bot Dashboard</Text>
      <Text>Status: {connected ? "Connected ✅" : "Disconnected ❌"}</Text>
      <Button title="Restart Bot" onPress={() => { /* restart bot logic */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
