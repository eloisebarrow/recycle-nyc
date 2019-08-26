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
    bronxData: [],
    brooklynData: [],
    statenIslandData: [],
    queensData: [],
    manhattanData: []
  }

  makeApiCall = async () => {
    const response = await axios.get('https://data.cityofnewyork.us/resource/sxx4-xhzg.json')
    const data = response.data;
    this.setState({
      data
    }, () => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].borough === 'Bronx') {
          this.setState({
            bronxData: data[i]
          }) // ends inner this.setState
        } else if (data[i].borough === 'Brooklyn') {
          this.setState({
            brooklynData: data[i]
          }) // ends inner this.setState
        } else if (data[i].borough === 'Staten Island') {
          this.setState({
            statenIslandData: data[i]
          }) // ends inner this.setState
        } else if (data[i].borough === 'Queens') {
          this.setState({
            queensData: data[i]
          }) // ends inner this.setState
        } else if (data[i].borough === 'Manhattan') {
          this.setState({
            manhattanData: data[i]
          }) // ends inner this.setState
        } // ends if statement
      } // ends for loop
    }) // closes 1st this.setState
  } // closes makeApiCall

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    // console.log('this is data from render', this.state.bronxData, this.state.brooklynData, this.state.statenIslandData, this.state.queensData, this.state.manhattanData)
    return (
      <Switch>
        <Route path="/about" render={() => <About />}></Route>
        <Route path="/resources" render={() => <Resources />}></Route>
        <Route path="/by-borough" render={() => <ByBorough apiData={this.state.data}
        bronxData={this.state.bronxData}
        brooklynData={this.state.brooklynData}
        statenIslandData={this.state.statenIslandData}
        queensData={this.state.queensData}
        manhattanData={this.state.manhattanData} />}></Route>
        <Route path="/near-you" render={() => <NearYou apiData={this.state.data} />}></Route>
        <Route path="/"></Route>
      </Switch>
    )
  }
}

export default Main
