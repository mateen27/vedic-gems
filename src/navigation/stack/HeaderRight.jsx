import React from 'react';
import { View } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const HeaderRight = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Feather
        name="bell"
        size={24}
        color="white"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        onPress={() => {
          // Handle bell icon press
        }}
      />
      <FontAwesome5
        name="user-circle"
        size={24}
        color="white"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        onPress={() => {
          // Handle user icon press
        }}
      />
    </View>
  );
};

export default HeaderRight;