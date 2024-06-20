import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

const JewelleryCategory = () => {
  const [selected, setSelected] = useState('Rings');

  const options = [
    {
      "id": "1", 
      "name": "Rings",
      "image": require('../images/favorites/ClassicRing.jpg')
    },
    {
      "id": "2", 
      "name": "Pendants",
      "image": require('../images/favorites/Classic.png')
    },
    {
      "id": "3", 
      "name": "Bracelets",
      "image": require('../images/favorites/Bracelet.png')
    }
  ];

  const handleSelection = (option) => {
    setSelected(option.name);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selected === option.name && styles.selectedOption,
            ]}
            onPress={() => handleSelection(option)}
          >
            <View style={styles.optionContent}>
              <Image source={option.image} style={styles.optionImage} />
              <Text
                style={[
                  styles.optionText,
                  selected === option.name && styles.selectedOptionText,
                ]}
              >
                {option.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(3)
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  selectedOption: {
    borderColor: '#D57D45',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#333',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default JewelleryCategory;