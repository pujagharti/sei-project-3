import React from 'react'
import axios from 'axios'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class LocationsMap extends React.Component {

  state = {
    locationsOnMap: null
  }

  async componentDidMount() {

  }

  render() {
    return (
      <MapGL
        className='locations-map'
        mapboxApiAccessToken='pk.eyJ1Ijoic3J0bjEwIiwiYSI6ImNrZjZhazFzMjB1bjEyeW55ank2czZ1NmcifQ.kT5J0kWX-_Tk6HF6uFyahw'
        height={'30vh'}
        width={'30vw'}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        latitude={51.515}
        longitude={-0.078}
        zoom={3}
      >

      </MapGL>
    )
  }
}

export default LocationsMap

