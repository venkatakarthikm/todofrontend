import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import config from '../config';

export default function UserLogin({ onLogin, navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const notifySuccess = (msg) => {
    ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const notifyError = (msg) => {
    ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${config.url}/checkuserlogin`, formData);
      if (response.data != null) {
        onLogin();
        localStorage.setItem('user', JSON.stringify(response.data));
        notifySuccess("Login Success!");
        navigation.navigate("Home");
      } else {
        setMessage("Login Failed");
        setError("");
        notifyError(message);
      }
    } catch (errorr) {
      setMessage("");
      setError(errorr.message);
      notifyError(errorr.message);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.signin}>
          <View style={styles.content}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.form}>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  value={formData.email}
                  onChangeText={(value) => handleChange('email', value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="#aaa"
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  value={formData.password}
                  onChangeText={(value) => handleChange('password', value)}
                  secureTextEntry
                  placeholderTextColor="#aaa"
                />
              </View>
              <View style={styles.links}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={[styles.link, styles.signupLink]}>Sign up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputBox}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin: {
    width: 400,
    backgroundColor: '#222',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.9,
    shadowRadius: 35,
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 40,
  },
  title: {
    fontSize: 24,
    color: '#0f0',
    textTransform: 'uppercase',
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    gap: 25,
  },
  inputBox: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    borderWidth: 0,
    padding: 25,
    borderRadius: 4,
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  links: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'none',
  },
  signupLink: {
    color: '#0f0',
    fontWeight: '600',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#0f0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.05,
  },
});
