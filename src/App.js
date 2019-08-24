import React from 'react';
import './App.css';
import axios from 'axios'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
  state = {
    data: [],
  }

  makeApiCall = async () => {
    const response = await axios.get('https://data.cityofnewyork.us/resource/sxx4-xhzg.json')
    const data = response.data;

    this.setState({
      data
    })
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main apiData={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
