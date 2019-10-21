import React from 'react';
import '../App.css';
import axios from 'axios';
import ByBorough from './ByBorough';
import NearYou from './NearYou';
import Home from './Home';

import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
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
      <div className="main-div-styles">
        <Switch>
          <Route 
            path="/by-borough" 
            render={() => 
              <ByBorough 
                apiData={this.state.data} />}>
          </Route>
          <Route 
            path="/near-you" 
            render={() => 
              <NearYou 
                apiData={this.state.data} />}>
          </Route>
          <Route 
            exact path="/" 
            render={() => 
              <Home />}>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Main;
