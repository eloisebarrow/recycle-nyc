import React from 'react';
import '../App.css';
import axios from 'axios';
import About from './About';
import ByBorough from './ByBorough';
import NearYou from './NearYou';
import Resources from './Resources';
import Reduce from './Reduce';
import Reuse from './Reuse';
import Recycle from './Recycle';
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
        <Reduce />
        <Reuse />
        <Recycle />

        <Switch>
          {/* <Route path="/about" render={() => <About />}></Route> */}
          <Route path="/resources" render={() => <Resources />}></Route>
          <Route path="/by-borough" render={() => <ByBorough apiData={this.state.data}
          borough={'Staten Island'} />}></Route>
          <Route path="/near-you" render={() => <NearYou apiData={this.state.data} />}></Route>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    )
  }
}

export default Main;
