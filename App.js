import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

import UserList from "./src/components/userList";

import {store, persistor} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <UserList/>
      </PersistGate>
    </Provider>
  );
};

export default App;
