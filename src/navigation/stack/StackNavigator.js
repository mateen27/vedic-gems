import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import { HeaderTitle } from './HeaderTitle';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import HeaderRight from './HeaderRight';
import ProductsScreen from '../../screens/ProductsScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            // headerRight: () => <HeaderRight/>,
            headerTitle: () => <HeaderTitle />,
            // headerRight: () => <HeaderRight />,
          }}
        />

        <Stack.Screen name='Product' component={ProductsScreen} options={{
          headerTitle: () => <HeaderTitle />,
          // headerRightContainerStyle: {
          //   marginRight: 10,
          // },
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 25 }}>
              <FontAwesome5 name="search" size={24} color="#333" />
              <Feather name="shopping-bag" size={24} color="#333" />
            </View>
          ),
          headerTintColor: '#000',
          // headerTitleAlign: 'center',
          // headerBackTitleVisible: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
