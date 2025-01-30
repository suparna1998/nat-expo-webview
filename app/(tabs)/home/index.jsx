import React, { useRef, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { router } from "expo-router";

export default function HomeScreen() {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const url = "https://astro.build/";

  const handleNavigationChange = (event) => {
    let webViewUrl = event.url;
    let urlPathname = new URL(event.url).pathname;
    if (webViewUrl !== url) {
      if (urlPathname === "/") {
        return true;
      } else {
        router.push("/home/next");
        return false;
      }
    }
    return true;
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        backgroundColor="#FF0000"
        source={{ uri: url }}
        style={{ opacity: 0.99 }}
        onShouldStartLoadWithRequest={handleNavigationChange}
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
      />
    </View>
  );
}
