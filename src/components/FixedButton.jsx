import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

const FixedButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: responsiveScreenHeight(0),
    padding: 16,
    marginBottom: responsiveScreenHeight(2),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  buyNowButton: {
    backgroundColor: 'orange',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FixedButton;