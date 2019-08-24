import React from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import About from './About'
import ByBorough from './ByBorough'
import NearYou from './NearYou'
import Resources from './Resources'

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
    // console.log('this is state from Main', this.state.data)
    return (
      <Switch>
        <Route path="/about" render={() => <About />}></Route>
        <Route path="/resources" render={() => <Resources />}></Route>
        <Route path="/by-borough" render={() => <ByBorough apiData={this.state.data} />}></Route>
        <Route path="/near-you" render={() => <NearYou apiData={this.state.data} />}></Route>
        <Route path="/"></Route>
      </Switch>
    )
  }
}

export default Main
