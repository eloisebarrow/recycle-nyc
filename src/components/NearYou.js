import React from 'react'
import '../App.css'
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl'
require('dotenv').config()

class NearYou extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapStyle: '',
      viewport: {
        width: 700,
        height: 700,
        latitude: 40.7401135,
        longitude: -73.98973769999999,
        zoom: 12,
      },
      located: false,
      bins: [],
    }
  }

  setViewport = (viewport) => {
    this.setState({ viewport })
  }

  componentDidMount() {
    this.setState({
      located: true,
    })
  }

  render() {
    const filteredCoords = this.props.apiData.filter( bin => (Math.pow(bin.latitude, 2) * Math.pow(bin.longitude, 2)) > 1);

    return (
      <div className="map">
        <h2>Public recycling bins near you:</h2>
        {this.state.located && <ReactMapGL
          mapStyle="mapbox://styles/eloisebarrow/cjzu271jb11xx1ck0q3wwz1je"
          {...this.state.viewport}
          mapboxAccessToken={process.env.MapboxAccessToken}
          onViewportChange={this.setViewport}
           >
           {filteredCoords.map((d,i) => {
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
           <GeolocateControl
           className="geolocator"
           positionOptions={{enableHighAccuracy: true}}
           trackUserLocation={true} />
        </ReactMapGL> }
      </div>
    )
  }
}

export default NearYou
