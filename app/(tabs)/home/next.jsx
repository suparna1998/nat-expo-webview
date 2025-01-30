import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function NextScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24 }}>This is Home/Next Page</Text>
      <Button title="Go Back to Home" onPress={() => router.back()} />
    </View>
  );
}
