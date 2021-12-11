import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToBasketAction} from '../AppData/cart/actions';
import {
  increaseCountAction,
  decreaseCountAction,
} from '../AppData/count/actions';
import {countSelector} from '../AppData/count/selectors';
import {CART_DATA} from '../data/cartData';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const count = useSelector(countSelector);

  const onDecrease = () => {
    dispatch(decreaseCountAction());
  };

  const onIncrease = () => {
    dispatch(increaseCountAction());
  };

  const onAdd = item => {
    dispatch(addToBasketAction(item));
  };

  return (
    <FlatList
      style={{marginTop: 50}}
      data={CART_DATA}
      ListFooterComponent={
        <Button
          title="Go To Basket"
          onPress={() => navigation.navigate('Basket')}
        />
      }
      renderItem={({item}) => (
        <View
          style={{
            marginLeft: 16,
            marginVertical: 16,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>{item.name}</Text>
          <Button title="Add" onPress={() => onAdd(item)} />
        </View>
      )}
    />
  );
};

export default Home;
