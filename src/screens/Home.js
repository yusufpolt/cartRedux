import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  decreaseCartAction,
  increaseCartAction,
  addCartPriceAction,
  removeCartPriceAction,
} from '../AppData/cart/actions';
import {cartSelector, totalCartPriceSelector} from '../AppData/cart/selectors';
import {CART_DATA} from '../data/cartData';

const FAVORITE_ICONS =
  'https://img.icons8.com/external-sbts2018-flat-sbts2018/468/000000/external-favorite-social-media-basic-1-sbts2018-flat-sbts2018.png';
const CART_ICONS =
  'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/464/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-flat-vitaly-gorbachev.png';

const REMOVE_ICON = 'https://img.icons8.com/doodle/48/000000/delete-sign.png';
const ADD_ICON = 'https://img.icons8.com/doodle/48/000000/add.png';

const Home = ({navigation}) => {
  const [data, setData] = useState(CART_DATA);

  const cartItemUnit = useSelector(cartSelector);

  const cartItemPrice = useSelector(totalCartPriceSelector);

  const dispatch = useDispatch();

  const showStateUnit = () => {
    return cartItemUnit;
  };

  const showStatePrice = () => {
    return cartItemPrice;
  };

  const increaseCartUnit = () => (
    dispatch(increaseCartAction(cartItemUnit)),
    dispatch(addCartPriceAction(cartItemPrice))
  );

  const decreaseCartUnit = () => {
    return (
      dispatch(decreaseCartAction(cartItemUnit)),
      dispatch(removeCartPriceAction(cartItemPrice))
    );
  };

  const CartItem = ({item}) => (
    <View style={styles.itemsContainer}>
      <View style={styles.itemsImageContainer}>
        <Image style={styles.itemsImage} source={{uri: item.image}} />
      </View>

      <View style={styles.itemsDetailsContainer}>
        <View style={styles.itemsDetailName}>
          <Text style={styles.itemsName}>{item.name}</Text>
        </View>

        <View style={styles.itemsDetailsContent}>
          <Text style={styles.itemsPrice}>{item.price}/</Text>
          <Text style={styles.itemsPriceType}>{item.priceType}</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.increaseButtonContainer}>
          <TouchableOpacity
            onPress={() => increaseCartUnit()}
            style={styles.increaseButton}>
            <Image source={{uri: ADD_ICON}} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.decreaseButtonContainer}>
          <TouchableOpacity
            onPress={() => decreaseCartUnit()}
            style={styles.decreaseButton}>
            <Image source={{uri: REMOVE_ICON}} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.favoriteCart}>
        <TouchableOpacity>
          <Image
            source={{uri: FAVORITE_ICONS}}
            style={styles.favoriteCartIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const cartRenderItem = ({item}) => <CartItem item={item} />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.favoriteContainer}>
          <TouchableOpacity onPress={() => navigation.push('FavoriteScreen')}>
            <Image source={{uri: FAVORITE_ICONS}} style={styles.iconImage} />
            <View style={[styles.favoriteCartItem, styles.itemUnitCounter]}>
              <Text style={styles.cartItemUnit}>1</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleTextContent}>CART</Text>
        </View>

        <View style={styles.cartContainer}>
          <Image style={styles.iconImage} source={{uri: CART_ICONS}} />
          <View style={[styles.cartItem, styles.itemUnitCounter]}>
            <Text style={styles.cartItemUnit}>
              {showStateUnit(cartItemUnit)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.headerDivider}></View>

      <View style={styles.cartContainer}>
        <FlatList
          data={data}
          renderItem={cartRenderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.bottomPriceContainer}>
        <LinearGradient
          style={styles.bottomLinear}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ffff47', '#ffb647', '#ff8947']}>
          <View style={styles.bottomPlus}>
            <Text style={styles.bottomPlusText}>+</Text>
          </View>

          <View style={styles.bottomContent}>
            <Text style={styles.totalPriceText}>
              {showStatePrice(cartItemPrice)}
            </Text>
            <Text style={styles.totalPriceText}>{data[0].priceType}</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 25,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favoriteContainer: {},
  iconImage: {
    width: 50,
    height: 50,
  },
  itemUnitCounter: {
    position: 'absolute',
    width: 25,
    height: 25,
    backgroundColor: 'lightgreen',
    right: -10,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemUnit: {
    fontSize: 14,
    fontWeight: '500',
  },
  favoriteCartItem: {},
  titleContainer: {},
  titleTextContent: {
    fontSize: 27,
    fontWeight: '600',
    color: 'black',
    fontStyle: 'italic',
  },
  cartContainer: {},
  cartItem: {},
  headerStyle: {},
  headerDivider: {
    marginTop: 5,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  //Items Styles
  itemsContainer: {
    flexDirection: 'row',
    marginTop: 7,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  itemsImageContainer: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    padding: 5,
  },
  itemsImage: {
    width: 48,
    height: 48,
  },
  itemsDetailsContainer: {
    marginHorizontal: 10,
  },
  itemsDetailName: {
    marginBottom: 5,
  },
  itemsName: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemsDetailsContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemsPrice: {
    fontSize: 18,
  },
  itemsPriceType: {
    alignSelf: 'flex-end',
  },
  //Item Button
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  increaseButtonContainer: {},
  increaseButton: {},
  buttonIcon: {
    width: 40,
    height: 40,
  },
  decreaseButtonContainer: {},
  decreaseButton: {},
  favoriteCart: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
  favoriteCartIcon: {
    width: 40,
    height: 40,
  },
  //Bottom
  bottomPriceContainer: {
    position: 'absolute',
    bottom: -70,
    alignSelf: 'center',
  },
  bottomLinear: {
    flexDirection: 'row',
    width: 200,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomPlus: {},
  bottomPlusText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
  },
  bottomContent: {
    flexDirection: 'row',
  },
  totalPriceText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
  },
});

export default Home;
