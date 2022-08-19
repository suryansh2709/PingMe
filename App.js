import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
