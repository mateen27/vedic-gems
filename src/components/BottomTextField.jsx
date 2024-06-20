import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';

const BottomTextField = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.invitationText}>You're invited! Join our mailing list to get 12% off on your first order, new launches and more!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address or Mobile no."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    padding: responsiveScreenHeight(3),
    alignItems: 'center',
    borderRadius: 10
  },
  invitationText: {
    fontSize: responsiveFontSize(1.5),
    color: '#333',
    marginBottom: responsiveScreenHeight(2),
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  input: {
    flex: 1,
    height: responsiveScreenHeight(4),
    paddingHorizontal: 8,
    color: '#333',
  },
  signUpButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginLeft: 8,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BottomTextField;