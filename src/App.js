import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    const bodyStyles = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }

    return (
      <div style={bodyStyles} className="App">
        <Header />
        <Main />
        <Route path="/" render={() => <Footer />}></Route>
      </div>
    );
  }

}

export default App;
