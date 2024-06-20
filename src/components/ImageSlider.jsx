import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const ImageSlider = () => {
  const flatListRef = useRef(null);
  const scrollIndex = useRef(0);

  const featuredImages = [
    require('../images/brands/askmen.webp'),
    require('../images/brands/byride.webp'),
    require('../images/brands/cbs_news.webp'),
    require('../images/brands/forbes.webp'),
    require('../images/brands/hello.webp'),
    require('../images/brands/medium.webp'),
    require('../images/brands/prevention.webp'),
    require('../images/brands/the-knot.webp'),
    require('../images/brands/vogue.webp'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndex.current = (scrollIndex.current + 1) % featuredImages.length;
      flatListRef.current?.scrollToIndex({ index: scrollIndex.current, animated: true });
    }, 2000);

    return () => clearInterval(interval);
  }, [featuredImages.length]);

  return (
        <View style={styles.featuredSection}>
          <Text style={styles.featuredText}>Featured in</Text>
          <FlatList
            data={featuredImages}
            renderItem={({ item }) => <Image source={item} style={styles.featuredImage} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  featuredSection: {
    marginTop: responsiveScreenHeight(-3),
    alignItems: 'center',
  },
  featuredText: {
    fontSize: responsiveScreenHeight(2),
    fontWeight: '600',
    marginBottom: responsiveScreenHeight(3),
    color: '#000'
  },
  featuredImage: {
    width: 160,
    height: 40,
    marginHorizontal: 10,
  }
});
