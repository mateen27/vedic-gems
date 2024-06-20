import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Import the payment logo images
// import visaLogo from '../images/payment/visa.png';
import masterCardLogo from '../images/payment/mastercard.png';
import rupayLogo from '../images/payment/Rupay_1.png';
import upiLogo from '../images/payment/UPI.png';
import googlePayLogo from '../images/payment/GooglePay.png';
import bhimLogo from '../images/payment/BHIM.png';
import paytmLogo from '../images/payment/paytm.png';
// import phonePeLogo from '../images/payment/PhonePe.png';

const PaymentLogos = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={visaLogo} style={styles.logo} /> */}
      <Image source={masterCardLogo} style={styles.logo} />
      <Image source={rupayLogo} style={styles.logo} />
      <Image source={upiLogo} style={styles.logo} />
      <Image source={googlePayLogo} style={styles.logo} />
      <Image source={bhimLogo} style={styles.logo} />
      <Image source={paytmLogo} style={styles.logo} />
      {/* <Image source={phonePeLogo} style={styles.logo} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 50,
    height: 30,
    marginHorizontal: 8,
  },
});

export default PaymentLogos;