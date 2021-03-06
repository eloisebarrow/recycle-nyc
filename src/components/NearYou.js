import React from 'react';
import '../App.css';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import './NearYou.css';

class NearYou extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapStyle: '',
      viewport: {
        width: '80%',
        height: '80vh',
        latitude: 40.7401135,
        longitude: -73.98973769999999,
        zoom: 12,
      },
      located: false,
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
      <div className="map-container">
        <h2>Geolocate yourself to find a nearby bin</h2>
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
