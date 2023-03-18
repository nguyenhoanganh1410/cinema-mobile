import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/pages/Index";
import Provider from "./src/store/Provider";
export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Index />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
