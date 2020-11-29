import React from 'react'
import BottomTabNavigator from './bottomTabNavigator.js'
import { NavigationContainer } from '@react-navigation/native';

const TabNavigation = () => {
    
    return(
    <NavigationContainer>
        <BottomTabNavigator/>
    </NavigationContainer>
    )
}
export default TabNavigation