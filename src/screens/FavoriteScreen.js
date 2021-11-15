import React from 'react';
import {View, Text} from 'react-native';

const FavoriteScreen = ({navigation}) => {
  return (
    <View>
      <Text>Favorite</Text>
      <Text onPress={() => navigation.goBack()}>Go back</Text>
    </View>
  );
};

export default FavoriteScreen;
