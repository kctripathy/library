import React from 'react';
import './App.css';
import AppNavigation from './components/AppNavigation/AppNavigation';
import AppBody from './components/AppBody/AppBody';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <AppNavigation />
         <AppBody />
         <AppFooter />
      </header>
    </div>
  );
}

export default App;
