const { Image, View } = require('react-native');

export const HeaderTitle = () => (
    <View style={{ flex: 1,}}>
      <Image 
        source={require('../../images/Logo.png')}
        style={{ width: 160, height: 40 }} 
        resizeMode="contain"
      />
    </View>
  );