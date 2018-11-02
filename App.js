import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SearchScreen from './screens/SearchScreen.js'
import ViewMovieScreen from './screens/ViewMovieScreen.js'
import FavoritesScreen from './screens/FavoritesScreen.js'

const MainStack = createStackNavigator(
  {
    Search: SearchScreen,
    ViewMovie: ViewMovieScreen,
  },
  {
    initialRouteName: 'Search',
  }
)

const AppNavigator = createBottomTabNavigator(
  {
    Main: MainStack,
    Favorites: FavoritesScreen
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#eee'
      }
    }
  }
)

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
