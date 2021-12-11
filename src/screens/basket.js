import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {basketSelector} from '../AppData/cart/selectors';

export const Basket = () => {
  const basket = useSelector(basketSelector);

  return (
    <FlatList
      style={{marginTop: 50}}
      data={basket}
      renderItem={({item}) => <Text>{item.name}</Text>}
    />
  );
};
