import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
require('dotenv').config()

class NearYou extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapStyle: 'mapbox://styles/mapbox/light-v9',
      viewport: {
        width: 400,
        height: 400,
        latitude: null,
        longitude: null,
        zoom: 14,
      },
      located: false,
      bins: [],
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
          },
          located: true,
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
    const filteredCoords = this.props.apiData.filter( bin => (Math.pow(bin.latitude, 2) * Math.pow(bin.longitude, 2)) > 1);

    return (
      <div style={mapStyles}>
        <h2>Public recycling bins near you:</h2>
        {this.state.located && <ReactMapGL
          {...this.state.viewport}
          mapboxAccessToken={process.env.MapboxAccessToken}
          onViewportChange={this.setViewport}
           >
           {filteredCoords.map((d,i) => {
             console.log('lat/long from Marker map', typeof d.latitude, typeof d.longitude)
             let lat = parseFloat(d.latitude);
             let lon = parseFloat(d.longitude);
             return (
               <Marker key={i}
               latitude={lat}
               longitude={lon}
               >
               </Marker>
             )
           }) }
        </ReactMapGL> }
      </div>
    )
  }
}

export default NearYou
