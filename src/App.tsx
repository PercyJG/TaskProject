import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
    <HomePage />
    </ReduxProvider>
  );
}

export default App;
