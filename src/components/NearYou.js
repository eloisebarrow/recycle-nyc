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
        latitude: null,
        longitude: null,
        zoom: 13
      },
    }
  }

  setViewport = (viewport) => {
    this.setState({ viewport })
  }

  componentDidMount() {
    if (this.state.viewport.latitude === null) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState(prevState => ({
          viewport: {
            ...prevState.viewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        }))
      });
    }
  }

  render() {
    const mapStyles = {
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
    }

    return (
      <div style={mapStyles}>
        <h2>Public recycling bins near you:</h2>
        {this.state.viewport.latitude && <ReactMapGL
          {...this.state.viewport}
          mapboxAccessToken={process.env.MapboxAccessToken}
          onViewportChange={this.setViewport}
        /> }
      </div>
    )
  }
}

export default NearYou
