/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useReducer} from 'react';
import globalReducer, {initialState} from './src/reduxs/reducers/global.reducer'
import TabNavigation from './src/navigation/tabNavigation';

export const Context = React.createContext()

const App = () => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <TabNavigation/>
    </Context.Provider>
  );
};

export default App;
