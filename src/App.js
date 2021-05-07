import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import createStore from './Redux/CreateStore';

const { store, persistor } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App;
 
 