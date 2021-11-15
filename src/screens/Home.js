import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {cartSelector} from '../AppData/cart/selectors';

const Home = () => {
  const cartPrice = useSelector(cartSelector);

  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
