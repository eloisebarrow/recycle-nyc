import React from 'react'
import ReactMapGL from 'react-map-gl'
require('dotenv').config()

class NearYou extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapStyle: '',
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
      },
      userLat: null,
      userLong: null,
    }
  }

  setViewport = (viewport) => {
    this.setState({ viewport })
  }

  getUserLocation = navigator.geolocation.getCurrentPosition( (position) => {
    this.setState({
      userLat: position.coords.latitude,
      userLong: position.coords.longitude,
    })
  });

  render() {
    const mapStyles = {
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
    }

    console.log('this is user lat:', this.state.userLat, 'this is userLong:', this.state.userLong)

    return (
      <div style={mapStyles}>
        <h2>Public recycling bins near you:</h2>
        <ReactMapGL
          mapboxAccessToken={process.env.MapboxAccessToken}
          {...this.state.viewport}
          onViewportChange={this.setViewport}
        />
      </div>
    )
  }
}

export default NearYou
