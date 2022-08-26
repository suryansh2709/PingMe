import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigator';
import {persistor, store} from './src/redux/store';
import NetInfoHandler from './src/utils/NetInfo/netInfo';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
      <NetInfoHandler />
    </Provider>
  );
};

export default App;
