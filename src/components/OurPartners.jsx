import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const OurPartners = () => {
  const partners = [
    {
      id: 1,
      name: 'amazon',
      image: require('../images/partners/amazon.png'),
    },
    {
      id: 2,
      name: 'blue-dart',
      image: require('../images/partners/bluedart.png'),
    },
    {
      id: 3,
      name: 'lab',
      image: require('../images/partners/bis.png'),
    },
    {
      id: 4,
      name: 'igi',
      image: require('../images/partners/igi.png'),
    },
    {
      id: 5,
      name: 'ajio',
      image: require('../images/partners/ajio.png'),
    },
  ];

  const renderPartnerItem = ({ item }) => (
    <View style={styles.partnerLogoContainer}>
      <Image source={item.image} style={styles.partnerLogo} resizeMode='contain' />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
          data={partners}
          renderItem={renderPartnerItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(-2),
  },
  partnerImage: {
    height: 50,
    resizeMode: 'contain',
  },
  partnerLogoContainer: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveScreenWidth(2),
  },
  partnerLogo: {
    width: '100%',
    height: '100%',
  },
});

export default OurPartners;