import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    data: [],
  }

  makeApiCall = async () => {
    const response = await axios.get('https://data.cityofnewyork.us/resource/sxx4-xhzg.json')
    const data = response.data;

    this.setState({
      data
    }, () => {
      console.log('this is data from API call', this.state.data)
    })
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    return (
      <div className="App">
        <h1>Recycle NYC</h1>
        <h3>Waste Not, Want Not: Find a public recycling bin near you!</h3>
      </div>
    );
  }
}

export default App;
