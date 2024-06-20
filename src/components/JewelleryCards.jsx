import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import blueRing from '../images/rings/blueRing.jpg';
import whiteRing from '../images/rings/whiteRing.jpg';
import RoundDiamond from '../images/rings/RoundDiamond.jpg';
import Emerald from '../images/rings/Emerald.jpg';
import rubyYellowGold from '../images/rings/rubyYellowGold.jpg';
import goldRing from '../images/rings/goldRing.jpg';

const JewelleryCards = () => {
  const navigation = useNavigation();

  const jewellery = require('../api/jewelleryData.json');

  const imageMapping = {
    '../images/rings/blueRing.jpg': blueRing,
    '../images/rings/whiteRing.jpg': whiteRing,
    '../images/rings/RoundDiamond.jpg': RoundDiamond,
    '../images/rings/Emerald.jpg': Emerald,
    '../images/rings/rubyYellowGold.jpg': rubyYellowGold,
    '../images/rings/goldRing.jpg': goldRing,
  };

  const handlePress = (item) => {
    console.log('Pressed Item', item);
    navigation.navigate('Product', { item });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {jewellery.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => handlePress(item)}>
            <Image source={imageMapping[item.image]} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(2)
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    width: 250,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 8,
    color: '#c2c2c2'
  },
  price: {
    fontSize: 14,
    color: '#888888',
  },
});

export default JewelleryCards;