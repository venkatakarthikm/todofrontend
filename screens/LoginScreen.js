import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function LoginScreen({ navigation, onLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Login" onPress={onLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    marginTop: 10,
  },
});

export default LoginScreen;
