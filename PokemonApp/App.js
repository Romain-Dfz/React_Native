// App.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Screens/HomeScreen';
import PokemonListScreen from './Screens/PokemonListScreen';
import PokemonDetailScreen from './Screens/PokemonDetailScreen';
import PokedexScreen from './Screens/PokedexScreen';

const PokemonStack = createStackNavigator(
  {
    PokemonList: PokemonListScreen,
    PokemonDetail: PokemonDetailScreen,
  },
  {
    initialRouteName: 'PokemonList',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    PokemonStack,
    Pokedex: PokedexScreen,
  },
  {
    initialRouteName: 'PokemonStack',
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
