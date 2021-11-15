import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/AppData/store';
import FavoriteScreen from './src/screens/FavoriteScreen';
import Home from './src/screens/Home';
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
