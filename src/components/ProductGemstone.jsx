import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

const ProductGemstone = ({ name }) => {
    // console.log('name', value);
  const [selected, setSelected] = useState('Tanzanite');

  const ringOptions = [
    {
      "id": "1", 
      "name": "Tanzanite",
      "image": 'https://assets.angara.com/catalog/product/T-Round-Faceted-AAAA.png?width=50'
    },
    {
      "id": "2", 
      "name": "Opal",
      "image": 'https://assets.angara.com/catalog/product/OP-Round-Cabochon-AAAA.png?width=50'
    },
    {
      "id": "3", 
      "name": "Morganite",
      "image": 'https://assets.angara.com/catalog/product/MG-Round-Faceted-AAAA.png?width=50'
    },
    {
      "id": "4", 
      "name": "Citrine",
      "image": 'https://assets.angara.com/catalog/product/CT-Round-Pentagon-Star-AAAA.png?width=50'
    },
    {
      "id": "5", 
      "name": "London Blue Topaz",
      "image": 'https://assets.angara.com/catalog/product/LBT-Round-Faceted-AAAA.png?width=50'
    }
  ];

  const naturalGemstoneOptions = [
    {
        "id": 1,
        "image": "https://assets.angara.com/catalog/product/OP-Round-Cabochon-A.png?width=50",
        "name": "Good"
    },
    {
        "id": 2,
        "image": "https://assets.angara.com/catalog/product/OP-Round-Cabochon-AA.png?width=50",
        "name": "Better"
    },
    {
        "id": 3,
        "image": "https://assets.angara.com/catalog/product/OP-Round-Cabochon-AAA.png?width=50",
        "name": "Best"
    },
    {
        "id": 4,
        "image": "https://assets.angara.com/catalog/product/OP-Round-Cabochon-AAAA.png?width=50",
        "name": "Heirloom"
    },
  ]


  const options = name === 'Gemstone' ? ringOptions : naturalGemstoneOptions;

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
              <Image source={{ uri: option.image }} style={styles.optionImage} />
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

export default ProductGemstone;