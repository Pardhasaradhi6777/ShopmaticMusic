import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { HomeStackScreen,SearchStackScreen, } from '../stacknavigation/stack.navigation'
import { HOME_SCREEN, HOME_ICON, SEARCH_ICON, SEARCH_SCREEN, TAB_ACTIVE_COLOR, TAB_INACTIVE_COLOR, TAB_BACKGROUND_COLOR } from '../../constants/string.constants';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName= {HOME_SCREEN}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === HOME_SCREEN) {
          iconName = HOME_ICON;
        } else if (route.name === SEARCH_SCREEN) {
          iconName = SEARCH_ICON;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    
    tabBarOptions={{
      activeTintColor: TAB_ACTIVE_COLOR,
      inactiveTintColor: TAB_INACTIVE_COLOR,
      style: { backgroundColor: TAB_BACKGROUND_COLOR }
    }}>
      <Tab.Screen name={HOME_SCREEN} component={HomeStackScreen} />
      <Tab.Screen name={SEARCH_SCREEN} component={SearchStackScreen} />
    </Tab.Navigator>
  );
}