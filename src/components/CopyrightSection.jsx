import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';

const CopyrightSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.invitationText}>© 2024 Vedicgems All Rights Reserved. | Accessibility | Privacy Policy | T&C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    padding: responsiveScreenHeight(2),
    alignItems: 'center',
    borderRadius: 10
  },
  invitationText: {
    fontSize: responsiveFontSize(1.5),
    color: '#333',
    marginBottom: responsiveScreenHeight(2),
    textAlign: 'center',
  }
});

export default CopyrightSection;