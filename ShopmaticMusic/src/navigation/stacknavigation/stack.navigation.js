import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../components/pages/home';
import Search from '../../components/pages/search';
import Details from '../../components/pages/detail/detail.component';
import { DETAIL_SCREEN, HOME_SCREEN, SEARCH_SCREEN } from '../../constants/string.constants';

const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
export function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name={HOME_SCREEN} component={Home} />
    <HomeStack.Screen name={DETAIL_SCREEN} component={Details}  />
   </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();
export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={SEARCH_SCREEN} component={Search}/>
      <SearchStack.Screen name={DETAIL_SCREEN} component={Details}  />
    </SearchStack.Navigator>
  );
}

export default Stack