import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Features = () => {

  const featureData = [
    {
      id: 1,
      icon: require('../images/gifs/globee.png'),
      title: 'Ethical Sourcing',
    },
    {
      id: 2,
      icon: require('../images/gifs/ringg.png'),
      title: 'Handcrafted to Perfection',
    },
    {
      id: 3,
      icon: require('../images/gifs/inspecction.png'),
      title: 'Step by Step Inspection',
    },
    {
      id: 4,
      icon: require('../images/gifs/highSpeeed.png'),
      title: 'High Speed Service',
    },
  ];

  return (
    <View style={styles.container}>
      {featureData.map((feature) => (
        <View key={feature.id} style={styles.featureContainer}>
           <Image source={feature.icon} style={styles.icon} />
          <Text style={styles.title}>{feature.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  featureContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 10,
    marginTop: 8,
    textAlign: 'center',
    width: 60
    // marginRight: 25
    // padding: 10
  },
});

export default Features;
