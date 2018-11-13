import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import Scoreboard from './components/scoreboard/scoreboard.component';
import AppProvider from './provider.store';

const App = () => (
  <AppProvider>
    <div className="App">
      <Scoreboard />
    </div>
  </AppProvider>
);

export default App;
