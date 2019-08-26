import React from 'react'
import ReactMapGL from 'react-map-gl'
require('dotenv').config()

class NearYou extends React.Component {
  state = {
    mapStyle: '',
    viewport: {
      width: 400,
      height: 400,
      latitude: 40.7401491,
      longitude: -73.9897853,
      zoom: 8
    }
  }


  // implement setViewport method and setstate from there
  // setViewport = () => {
  //   this.setState({ viewport })
  // }

  render() {
    const mapStyles = {
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
    }

    return (
      <div style={mapStyles}>
        <h2>Public recycling bins near you:</h2>
        <ReactMapGL
          mapboxAccessToken={process.env.MapboxAccessToken}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </div>
    )
  }

}

export default NearYou
