import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default Login;
